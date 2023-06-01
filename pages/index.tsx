import { Inter } from "next/font/google";
import { client } from "@/sanity/lib/client";
import Locations from "../components/Locations";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const locations = await client.fetch('*[_type == "locations"]');
  return { props: { locations } };
}

interface HomeProps {
  locations: any;
}

export default function Home({ locations }: HomeProps) {
  console.log(locations);

  return (
    <main>
      <h1 className="font-extrabold text-5xl text-center text-blue-500">
        Hello World
      </h1>

      <Locations locations={locations} />
    </main>
  );
}

