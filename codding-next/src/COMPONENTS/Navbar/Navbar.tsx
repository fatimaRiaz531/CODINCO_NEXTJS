import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a>
          <Image
            src="/assets/logo.jpg"
            alt="CODINCO Logo"
            width={120}
            height={40}
            priority
          />
        </a>
      </Link>

      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/destination">Curriculum</Link>
        </li>
        <li>
          <Link href="/feedback">Testimonials</Link>
        </li>
        <li>
          <Link href="/prices">Pricing</Link>
        </li>
      </ul>

      <div>
        <div style={{ display: 'none' }}>
          <Link href="/checkout">
            <a>
              <i
                className="fa-solid fa-cart-shopping"
                style={{ marginRight: '1rem' }}
              ></i>
            </a>
          </Link>
          <Link href="/" id="logout-btn" className={styles.btnSmall}>
            Log Out
          </Link>
        </div>
      </div>

      {/* Responsive Nav */}
      <div className={styles.responsiveNav}>
        <i
          className="fa-solid fa-bars"
          style={{ color: 'var(--white-light)' }}
        ></i>
        <div className={styles.responsiveNavContent}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/destination">Curriculum</Link>
            </li>
            <li>
              <Link href="/feedback">Testimonials</Link>
            </li>
            <li>
              <Link href="/prices">Pricing</Link>
            </li>
          </ul>
          <div id="login-container" className={styles.loginContainer}>
            <Link href="/login" id="loginBtn">
              <a>
                <i className="fa-solid fa-user" id="login-btn"></i>
              </a>
            </Link>
            <div style={{ display: 'none' }}>
              <Link href="/checkout">
                <a>
                  <i
                    className="fa-solid fa-cart-shopping"
                    style={{ marginRight: '1rem' }}
                  ></i>
                </a>
              </Link>
              <Link href="/" id="logout-btn" className={styles.btnSmall}>
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
