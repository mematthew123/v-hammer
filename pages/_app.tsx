import { AppProps } from "next/app";
import { useState } from "react";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Navbar />
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    </>
  );
}
