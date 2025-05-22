'use client';

import { useEffect } from 'react';
import styles from './Home.module.css';

export default function Home() {
  useEffect(() => {
    // Add scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handlePackageClick = () => {
    window.location.href = '/courses';
  };

  const handleFeedbackClick = () => {
    window.location.href = '/testimonials';
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchInput = document.getElementById('search') as HTMLInputElement;
    if (searchInput.value.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(
        searchInput.value
      )}`;
    }
  };

  return (
    <main>
      <section className={`container ${styles.heroSection}`}>
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
          <form onSubmit={handleSearch} className={styles.searchbox}>
            <input
              id="search"
              type="text"
              placeholder="Enter Course Name"
              aria-label="Search courses"
            />
            <button type="submit" className="btn">
              Search
            </button>
          </form>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src="/assets/screen/hero.jpg"
            alt="Coding Bootcamp"
            loading="eager"
          />
        </div>
      </section>

      <section className={`background-dark`}>
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
                  From basics to advanced concepts, we cover everything you need
                  to become job-ready!
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
                  Build real-world applications to strengthen your portfolio and
                  skills!
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
                  Get resume reviews, interview prep, and job search assistance!
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

        <section className={`container ${styles.packages}`}>
          <div className={styles.packagesContent}>
            <h3 className={styles.highlightCircle}>02</h3>
            <h2>Course Packages</h2>
            <p>
              Choose the learning plan that fits your schedule and career goals.
              All packages include project work and certification.
            </p>
            <button className="btn" onClick={handlePackageClick}>
              Learn More
            </button>
          </div>
          <div className={styles.packagesCards}>
            <div className={styles.card}>
              <div className={styles.packageCardImg}>
                <img
                  src="/assets/screen/basic.jpg"
                  alt="Python Basics"
                  loading="lazy"
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
                  src="/assets/screen/advanced.jpg"
                  alt="Python Advanced"
                  loading="lazy"
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

      <section className={`container ${styles.feedbackSection}`}>
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
  );
}
