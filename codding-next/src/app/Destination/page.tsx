// pages/destination/page.tsx

import Head from 'next/head';
import styles from '../../styles/Destination.module.css';

const Destination = () => {
  return (
    <>
      <Head>
        <title>Destination - CODINCO</title>
        <link rel="icon" href="/assets/brand-icon.svg" />
      </Head>
      <header>
        <nav className="container">
          <img src="/assets/wajo.png" alt="CODINCO Logo" />
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/destination">Curriculum</a>
            </li>
            <li>
              <a href="/feedback">Testimonials</a>
            </li>
            <li>
              <a href="/prices">Pricing</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className={styles.destination}>
          <h1>Welcome to the Destination Page</h1>
          <p>
            This is where you can find information about our courses and
            programs.
          </p>
          {/* Add more content as needed */}
        </section>
      </main>
      <footer>
        <div className="container">
          <h1>
            Start learning today with our <span>Python Bootcamp</span>
          </h1>
          <div className={styles.searchbox}>
            <input type="text" placeholder="Enter your email" />
            <button className={styles.btn} id="cta">
              Get Started
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Destination;
