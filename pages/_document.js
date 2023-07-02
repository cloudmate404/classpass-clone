import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      {/* The "Head* is where we pass in our MetaData, for example what we wanna call our site*/}

      <Head>
        <title>Hazzys ClassPass</title>
        {/* This is for the mobile view, if it is done */}
        <meta name="viewport" content="initial-scale=1." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
