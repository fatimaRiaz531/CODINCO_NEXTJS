'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const handleEnroll = () => {
    window.open('https://forms.gle/ruawZbLV62XApGsG8', '_blank');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.avatarSection}>
          <h4>Our Students</h4>
          <div className={styles.avatarGrid}>
            {[...Array(10)].map((_, index) => (
              <div key={index} className={styles.avatarWrapper}>
                <Image
                  src={`/assets/Avatar${index + 1}.png`}
                  alt={`Student Avatar ${index + 1}`}
                  width={60}
                  height={60}
                  className={styles.avatar}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>CODINCO</h3>
            <p>
              Master Python programming with our comprehensive bootcamp. Join
              our weekend classes and start your coding journey today!
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://wa.me/923486824381"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://www.facebook.com/codinco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/codinco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <button onClick={handleEnroll} className={styles.footerLink}>
              Enroll Now
            </button>
            <Link href="/testimonials">Testimonials</Link>
          </div>
          <div className={styles.column}>
            <h4>Contact</h4>
            <p>
              <i className="fa-solid fa-phone"></i> +92 348 6824381
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> codinco.help@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Online Classes
            </p>
          </div>
          <div className={styles.column}>
            <h4>Course Details</h4>
            <p className={styles.scheduleLogo}>
              <Image
                src="/assets/logo.jpg"
                alt="CODINCO Logo"
                width={30}
                height={30}
              />
              Weekend Classes
            </p>
            <p>
              <i className="fa-regular fa-hourglass-half"></i> 9:00 PM – 10:30
              PM
            </p>
            <p>
              <i className="fa-solid fa-graduation-cap"></i> 3 Months Duration
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2024 CODINCO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
