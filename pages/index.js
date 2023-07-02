import Link from "next/link";

const Home = () => {
  return (
    <div className="main">
      <article className="main-info-container">
        <h1>One app for all things fitness, wellness & beauty</h1>
        <p>
          ClassPass gives you worldwide access to thousands of top-rated gyms,
          fitness studios, salons and spas.
        </p>
        <div className="button-container">
          <button
            className="primary"
            //   onClick={login}
          >
            Try for free
          </button>
          <button
            className="secondary"
            //   onClick={login}
          >
            Tell me more about ClassPass
          </button>
        </div>

        <Link href="/search">Browse Classes & Appointments</Link>
        <p className="disclaimer">
          Offer is available to new Trailers only. Spa and Salon appointments
          are available after trial.
        </p>
      </article>
    </div>
  );
};

export default Home;
