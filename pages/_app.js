import Head from "next/head";

import Link from "next/link";

import "../styles/globals.css";

// because we need to use this app page to display all the pages, we need to pass through it "component and pageprops"
const App = ({ Component, pageProps }) => {
  return (
    <>
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
