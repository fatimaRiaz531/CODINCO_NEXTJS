'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>CODINCO</h3>
            <p>Learn programming with our comprehensive courses</p>
          </div>
          <div className={styles.column}>
            <h4>Quick Links</h4>
            <Link href="/courses">Courses</Link>
            <Link href="/curriculum">Curriculum</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className={styles.column}>
            <h4>Contact</h4>
            <p>Email: info@codinco.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className={styles.column}>
            <h4>Newsletter</h4>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                aria-label="Email for newsletter"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2024 CODINCO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
