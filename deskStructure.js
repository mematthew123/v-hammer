/* eslint-disable react/no-unescaped-entities */
// ./deskStructure.js

// ./deskStructure.js
const JsonPreview = ({document}) => (
  <> 
    <h1>JSON Data for "{document.displayed.title}"</h1>
    
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
 
  </>
)

export const getDefaultDocumentNode = ({documentId, schemaType}) => {
  // Render the JSON preview only on posts or the siteSettings document
  if (schemaType === "post" || documentId === "siteSettings") {
    return S.document().views([
      S.view.form(),
      S.view.component(JsonPreview).title('JSON')
    ])
  }
}

export const defaultDocumentNodeResolver = (params) => {
  const {schemaType} = params
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),
      S.view.component(JsonPreview).title('JSON')
    ])
  }
  return getDefaultDocumentNode(params)
}

export const deskStructure = (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Site Config")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Settings Documents")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Metadata")
                .child(
                  S.document().schemaType("settings").documentId("siteSettings")
                ),
              S.listItem()
                .title("Site Colors")
                .child(S.document().schemaType("colors").documentId("colors")),
              S.listItem()
                .title("Main Navigation")
                .child(
                  S.document().schemaType("navigation").documentId("navigation")
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Filtered Posts")
        .child(
          S.list()
            .title("Filters")
            .items([
              S.listItem()
                .title("Posts By Category")
                .child(
                  S.documentTypeList("category")
                    .title("Posts by Category")
                    .child((categoryId) =>
                      S.documentList()
                        .title("Posts")
                        .filter(
                          '_type == "post" && $categoryId in categories[]._ref'
                        )
                        .params({ categoryId })
                    )
                ),
              S.listItem()
                .title("Posts By Author")
                .child(
                  S.documentTypeList("author")
                    .title("Posts by Author")
                    .child((authorId) =>
                      S.documentList()
                        .title("Posts")
                        .filter('_type == "post" && $authorId == author._ref')
                        .params({ authorId })
                    )
                ),
            ])
        ),
      S.listItem().title("All Posts").child(
        /* Create a list of all posts */
        S.documentList().title("All Posts").filter('_type == "post"')
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["settings", "post", "colors", "navigation"].includes(
            listItem.getId()
          )
      ),
    ]);
