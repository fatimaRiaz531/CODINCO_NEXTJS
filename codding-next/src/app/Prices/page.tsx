// pages/prices.tsx

import Head from 'next/head';
import styles from '../styles/Prices.module.css';

const Prices = () => {
  return (
    <>
      <Head>
        <title>CODINCO | Pricing</title>
        <link rel="icon" href="/assets/brand-icon.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
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
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/prices">Pricing</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className={`container ${styles.pricing}`}>
          <h1>Pricing</h1>
          <div className={styles.pricingCards}>
            <div className={styles.card}>
              <h2>Basic</h2>
              <p>Rs. 2500/month</p>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i> 1 Project
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> 1 Month Support
                </li>
                <li>
                  <i className="fa-solid fa-times"></i> No Certificate
                </li>
              </ul>
              <button className="btn">Enroll Now</button>
            </div>
            <div className={styles.card}>
              <h2>Pro</h2>
              <p>Rs. 5000/month</p>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i> 3 Projects
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> 3 Months Support
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> Certificate
                </li>
              </ul>
              <button className="btn">Enroll Now</button>
            </div>
            <div className={styles.card}>
              <h2>Enterprise</h2>
              <p>Rs. 10000/month</p>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i> 5 Projects
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> 6 Months Support
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> Certificate
                </li>
              </ul>
              <button className="btn">Enroll Now</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section className="articles"></section>
        <div className="container">
          <h1>
            Get started and receive <span>updates</span> about our courses
          </h1>
          <div className={styles.searchbox}>
            <input type="text" placeholder="Enter your email" />
            <button className="btn" id="cta">
              Subscribe
            </button>
          </div>
          <hr />
          <div className={styles.footer}>
            <img src="/assets/wajo.png" alt="CODINCO Logo" />
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/destination">Curriculum</a>
              </li>
              <li>
                <a href="/testimonials">Testimonials</a>
              </li>
              <li>
                <a href="/prices">Pricing</a>
              </li>
            </ul>
            <p>
              <i className="fa-regular fa-copyright"></i> 2025 CODINCO
            </p>
          </div>
          <div className={styles.socials}>
            <div className={styles.social}>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className={styles.social}>
              <a href="https://twitter.com/" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className={styles.social}>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Prices;
