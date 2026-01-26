import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT -- PAGES ROUTER")
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index, follow" /> {/* Searching engine larga  instruction berish */}
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
        {/* SEO */}
        <meta name="keyword" content="nestar, nestar.uz, devex mern, mern nestjs fullstack" />
        <meta name="description" content={
          "Buy and sell properties anyWhere anytime in South Korea. | " +
          "Покупка и продажа недвижимости в любом месте и в любое время в Южной Корее. |" +
          "대한민국 언제 어디서나 부동산을 사고팔 수 있습니다."
        } />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
