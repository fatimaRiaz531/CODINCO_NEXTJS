'use client';

import Link from 'next/link';
import styles from './Pricing.module.css';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 'Rs. 2,500',
      duration: '4 Weeks',
      features: [
        'Python Fundamentals',
        'Basic OOP Concepts',
        'File Handling',
        'Error Handling',
        '1 Project',
        'Email Support',
        'Community Access',
      ],
    },
    {
      name: 'Advanced',
      price: 'Rs. 4,500',
      duration: '8 Weeks',
      features: [
        'Everything in Basic',
        'Advanced OOP',
        'Web Development',
        'Database Integration',
        'API Development',
        '3 Projects',
        'Priority Support',
        'Career Guidance',
      ],
      popular: true,
    },
  ];

  return (
    <main className={styles.pricingContainer}>
      <div className={styles.header}>
        <h1>Choose Your Plan</h1>
        <p>Invest in your future with our comprehensive Python courses</p>
      </div>

      <div className={styles.plansGrid}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${styles.planCard} ${
              plan.popular ? styles.popular : ''
            }`}
          >
            {plan.popular && (
              <div className={styles.popularBadge}>Most Popular</div>
            )}
            <div className={styles.planHeader}>
              <h2>{plan.name}</h2>
              <div className={styles.price}>
                <span className={styles.amount}>{plan.price}</span>
                <span className={styles.duration}>/{plan.duration}</span>
              </div>
            </div>
            <ul className={styles.featuresList}>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <i className="fa-solid fa-check"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/login" className={styles.enrollButton}>
              Enroll Now
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
