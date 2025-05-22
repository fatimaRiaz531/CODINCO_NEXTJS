// pages/login.tsx
'use client';
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Login.module.css';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login/signup logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>Every Sunday | Login</title>
        <link rel="icon" href="/assets/brand-icon.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <header>
        <nav className="container">
          <img src="/assets/wajo.png" alt="Logo" />
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
      <main className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            {!isLogin && (
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
            )}
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <p className={styles.switchText}>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className={styles.switchButton}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
          <Link href="/" className={styles.backLink}>
            <i className="fa-solid fa-arrow-left"></i> Back to Home
          </Link>
        </div>
      </main>
      <footer>
        <section className="articles"></section>
        <div className="container">
          <h1>
            Get started and early <span>Update</span> about our package
          </h1>
          <div className={styles.searchbox}>
            <input type="text" placeholder="Enter your email" />
            <button className="btn" id="cta">
              Get Started
            </button>
          </div>
          <hr />
          <div className={styles.footer}>
            <img src="/assets/wajo.png" alt="Every Sunday Logo" />
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
            <p>
              <i className="fa-regular fa-copyright"></i> 2025 Codinco
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
}
