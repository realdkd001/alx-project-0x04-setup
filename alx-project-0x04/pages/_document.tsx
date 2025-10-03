import { Html, Head, Main, NextScript } from "next/document";
import Layout from "@/components/layouts/Layout";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Layout>
          <Main />
        </Layout>
        <NextScript />
      </body>
    </Html>
  );
}
