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

  const handleEnroll = () => {
    window.open('https://forms.gle/ruawZbLV62XApGsG8', '_blank');
  };

  return (
    <main>
      <section className={`container ${styles.heroSection}`}>
        <div className={styles.heroContentContainer}>
          <div className={styles.heroContent}>
            <h1>
              CODINCO{' '}
              <span style={{ color: 'var(--highlight)' }}>Python Bootcamp</span>
            </h1>
            <p>
              Master Python programming with our comprehensive bootcamp. Learn
              from industry experts, build real-world projects, and kickstart
              your career in tech. Join our flexible weekend classes designed
              for beginners and working professionals.
            </p>
            <div className={styles.priceTag}>
              <h3>Rs. 2,500</h3>
              <p>Monthly Fee</p>
              <p className={styles.duration}>
                Complete Course Duration: 3 Months
              </p>
            </div>
            <button className="btn" onClick={handleEnroll}>
              Enroll Now
            </button>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src="/assets/python.png"
            alt="Python Programming"
            loading="eager"
            className={styles.heroImage}
          />
        </div>
      </section>

      <section className={`background-dark`}>
        <section className={`container ${styles.scheduleSection}`}>
          <div className={styles.scheduleContent}>
            <h3 className={styles.highlightCircle}>01</h3>
            <h2>Course Schedule</h2>
            <div className={styles.scheduleGrid}>
              <div className={styles.scheduleItem}>
                <i className="fa-regular fa-calendar"></i>
                <h4>Duration</h4>
                <p>3 Months</p>
              </div>
              <div className={styles.scheduleItem}>
                <i className="fa-regular fa-clock"></i>
                <h4>Schedule</h4>
                <p>Saturday & Sunday</p>
              </div>
              <div className={styles.scheduleItem}>
                <i className="fa-regular fa-hourglass-half"></i>
                <h4>Time</h4>
                <p>9:00 PM – 10:30 PM</p>
              </div>
              <div className={styles.scheduleItem}>
                <i className="fa-solid fa-laptop"></i>
                <h4>Mode</h4>
                <p>Online + GitHub + Google Colab</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`container ${styles.toolsSection}`}>
          <div className={styles.toolsContent}>
            <h3 className={styles.highlightCircle}>02</h3>
            <h2>Tools Required</h2>
            <div className={styles.toolsGrid}>
              <div className={styles.tool}>
                <i className="fa-brands fa-google"></i>
                <h4>Google Colab</h4>
                <p>Cloud coding & practice</p>
              </div>
              <div className={styles.tool}>
                <i className="fa-solid fa-code"></i>
                <h4>VS Code</h4>
                <p>Local development (optional)</p>
              </div>
              <div className={styles.tool}>
                <i className="fa-brands fa-github"></i>
                <h4>GitHub</h4>
                <p>Code storage & project push</p>
              </div>
              <div className={styles.tool}>
                <i className="fa-brands fa-discord"></i>
                <h4>Discord/WhatsApp</h4>
                <p>Student Q&A, updates</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`container ${styles.syllabusSection}`}>
          <div className={styles.syllabusContent}>
            <h3 className={styles.highlightCircle}>03</h3>
            <h2>Course Syllabus</h2>
            <div className={styles.syllabusGrid}>
              <div className={styles.week}>
                <h4>Week 1</h4>
                <p>Setup & Introduction</p>
                <ul>
                  <li>Python overview</li>
                  <li>VS Code installation</li>
                  <li>Google Colab intro</li>
                  <li>First script</li>
                </ul>
              </div>
              <div className={styles.week}>
                <h4>Week 2</h4>
                <p>Data Types & Operators</p>
                <ul>
                  <li>int, float, str, bool</li>
                  <li>Operators</li>
                  <li>Keywords</li>
                </ul>
              </div>
              <div className={styles.week}>
                <h4>Week 3</h4>
                <p>Strings & Type Casting</p>
                <ul>
                  <li>String operations</li>
                  <li>Type casting</li>
                  <li>Text processing</li>
                </ul>
              </div>
              <div className={styles.week}>
                <h4>Week 4</h4>
                <p>Control Flow</p>
                <ul>
                  <li>if, elif, else</li>
                  <li>Loops</li>
                  <li>Control statements</li>
                </ul>
              </div>
              <div className={styles.week}>
                <h4>Week 5-6</h4>
                <p>Data Structures</p>
                <ul>
                  <li>Lists & Tuples</li>
                  <li>Dictionaries</li>
                  <li>Sets</li>
                </ul>
              </div>
              <div className={styles.week}>
                <h4>Week 7-8</h4>
                <p>Functions & Exceptions</p>
                <ul>
                  <li>Function definition</li>
                  <li>Modules</li>
                  <li>Error handling</li>
                </ul>
              </div>
              <div className={styles.week}>
                <h4>Week 9-10</h4>
                <p>File & DateTime</p>
                <ul>
                  <li>File handling</li>
                  <li>Math module</li>
                  <li>DateTime operations</li>
                </ul>
              </div>
              <div className={styles.week}>
                <h4>Week 11-12</h4>
                <p>Object-Oriented Programming</p>
                <ul>
                  <li>Classes & Objects</li>
                  <li>Inheritance</li>
                  <li>Polymorphism</li>
                </ul>
              </div>
              <div className={styles.week}>
                <h4>Week 13-14</h4>
                <p>Advanced Topics & Project</p>
                <ul>
                  <li>Dataclasses</li>
                  <li>GitHub deployment</li>
                  <li>Capstone project</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`container ${styles.paymentSection}`}>
          <div className={styles.paymentContent}>
            <h3 className={styles.highlightCircle}>04</h3>
            <h2>Payment Details</h2>
            <div className={styles.paymentInfo}>
              <div className={styles.paymentMethod}>
                <i className="fa-solid fa-mobile-alt"></i>
                <h4>EasyPaisa</h4>
                <p>Send payment to:</p>
                <h3>+92 348 6824381</h3>
                <p className={styles.note}>
                  After payment, please fill the enrollment form
                </p>
                <p className={styles.feeNote}>
                  Course Fee: Rs. 2,500 per month
                </p>
                <p className={styles.feeNote}>Total Duration: 3 Months</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
