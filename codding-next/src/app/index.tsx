// pages/index.tsx

import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  const handlePackageClick = () => {
    window.location.href = '/courses';
  };

  const handleFeedbackClick = () => {
    window.location.href = '/testimonials';
  };

  return (
    <>
      <Head>
        <title>CODINCO | Python Bootcamp for Beginners</title>
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
              <a href="/feedback">Testimonials</a>
            </li>
            <li>
              <a href="/prices">Pricing</a>
            </li>
          </ul>
          <div id="login-container">
            <a href="/login" id="loginBtn">
              <i className="fa-solid fa-user" id="login-btn"></i>
            </a>
            <div style={{ display: 'none' }}>
              <a href="/checkout">
                <i
                  className="fa-solid fa-cart-shopping"
                  style={{ marginRight: '1rem' }}
                ></i>
              </a>
              <a
                href="/"
                id="logout-btn"
                className="btn-small"
                style={{ borderRadius: '50px', color: 'var(--white)' }}
              >
                Log Out
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className={`container ${styles.heroSection} fade-in`}>
          <div className={styles.heroContentContainer}>
            <div className={styles.heroContent}>
              <h1>
                CODINCO{' '}
                <span style={{ color: 'var(--highlight)' }}>
                  (Python Bootcamp for Beginners)
                </span>
              </h1>
              <p>
                Affordable Python training with real-world projects. Flexible
                evening classes perfect for beginners. Enroll now and transform
                your skills in just one month!
              </p>
            </div>
            <div className={styles.searchbox}>
              <input id="search" type="text" placeholder="Enter Course Name" />
              <button id="search-btn" className="btn">
                Search
              </button>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <img
              src="https://media.istockphoto.com/photos/laptop-on-a-wooden-table-against-the-background-picture-id685840730?b=1&k=20&m=685840730&s=170667a&w=0&h=0ZJ5O8Y9699zlZX-VTNu7hvaxRbTj41lc3IZ-c-vwbU="
              alt="Coding Bootcamp"
            />
          </div>
        </section>
        <section className={`background-dark fade-in`}>
          <section className={`container ${styles.services}`}>
            <div className={styles.servicesCards}>
              <div className={`${styles.card} ${styles.largeCard}`}>
                <div className={styles.serviceImgContainer}>
                  <i
                    className="fa-solid fa-laptop-code"
                    style={{ color: 'var(--primary)' }}
                  ></i>
                </div>
                <div className={styles.serviceContent}>
                  <h4>Comprehensive Curriculum</h4>
                  <p>
                    From basics to advanced concepts, we cover everything you
                    need to become job-ready!
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.serviceImgContainer}>
                  <i className="fa-solid fa-diagram-project"></i>
                </div>
                <div className={styles.serviceContent}>
                  <h4>Hands-on Projects</h4>
                  <p>
                    Build real-world applications to strengthen your portfolio
                    and skills!
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.serviceImgContainer}>
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <div className={styles.serviceContent}>
                  <h4>Career Support</h4>
                  <p>
                    Get resume reviews, interview prep, and job search
                    assistance!
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.servicesContent}>
              <h3 className={styles.highlightCircle}>01</h3>
              <h2>Our Features</h2>
              <p>
                CODINCO provides comprehensive Python training with flexible
                schedules, perfect for working professionals and students alike.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </section>
          <section className={`container ${styles.packages} fade-in`}>
            <div className={styles.packagesContent}>
              <h3 className={styles.highlightCircle}>02</h3>
              <h2>Course Packages</h2>
              <p>
                Choose the learning plan that fits your schedule and career
                goals. All packages include project work and certification.
              </p>
              <button className="btn" onClick={handlePackageClick}>
                Learn More
              </button>
            </div>
            <div className={styles.packagesCards}>
              <div className={styles.card}>
                <div className={styles.packageCardImg}>
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                    alt="Python Basics"
                  />
                </div>
                <div className={styles.packageCardContent}>
                  <h4>
                    Python Basics <span>4 Weeks</span>
                  </h4>
                  <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <button className="btn-small">View Now</button>
                </div>
              </div>
              <div className={`${styles.largeCard} ${styles.card}`}>
                <div className={styles.packageCardImg}>
                  <img
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80"
                    alt="Python Advanced"
                  />
                </div>
                <div className={styles.packageCardContent}>
                  <h4>
                    Python Advanced <span>8 Weeks</span>
                  </h4>
                  <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p>Includes Django/Flask</p>
                  <button className="btn-small">View Now</button>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className={`container ${styles.feedbackSection} fade-in`}>
          <div className={styles.feedbackDetails}>
            <h3 className={styles.highlightCircle}>03</h3>
            <div>
              <h2>Trusted by more than 5,000 students worldwide</h2>
              <button className="btn" onClick={handleFeedbackClick}>
                View All
              </button>
            </div>
          </div>
          <div className={styles.offers}>
            <div></div>
            <div>
              <span>Limited Time</span>
              <h3>
                <span>Rs.2500</span>/month
              </h3>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-check"></i> Comprehensive
                  Python curriculum
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i> 5 real-world
                  projects
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i> Certificate upon
                  completion
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
                <a href="/admin">Admin</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/checkout">Checkout</a>
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

export default Home;
