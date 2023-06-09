import { Inter } from "next/font/google";
import { client } from "@/sanity/lib/client";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Locations from "@/components/Locations";

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
      <Hero />
      <WhyUs />
      <Locations locations={locations} />
    </main>
  );
}
