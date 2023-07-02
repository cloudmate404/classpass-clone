import Head from "next/head";

import Link from "next/link";

import "../styles/globals.css";

// because we need to use this app page to display all the pages, we need to pass through it "component and pageprops"
const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* The "Head* is where we pass in our MetaData, for example what we wanna call our site*/}
      <Head>
        <title>Hazzys ClassPass</title>
        {/* This is for the mobile view, if it is done */}
        <meta name="viewport" content="initial-scale=1." />
      </Head>

      <header>
        <Link href="/">
          <h3>ClassPass</h3>
        </Link>
      </header>
      {/*So this "Component {...pageProps}" allows us to essentially see all the pages in our app */}
      <Component {...pageProps} />
    </>
  );
};

export default App;
