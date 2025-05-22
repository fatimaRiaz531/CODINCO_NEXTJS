'use client';

import Link from 'next/link';
import styles from './Courses.module.css';

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: 'Python Basics',
      duration: '4 Weeks',
      level: 'Beginner',
      price: 'Rs. 2500',
      description:
        'Learn Python fundamentals and build your first applications.',
      image: '/assets/screen/basic.jpg',
    },
    {
      id: 2,
      title: 'Python Advanced',
      duration: '8 Weeks',
      level: 'Intermediate',
      price: 'Rs. 4500',
      description:
        'Master advanced Python concepts and web development with Django/Flask.',
      image: '/assets/screen/advanced.jpg',
    },
  ];

  return (
    <main className={styles.coursesContainer}>
      <div className={styles.header}>
        <h1>Our Courses</h1>
        <p>Choose the perfect course for your learning journey</p>
      </div>

      <div className={styles.coursesGrid}>
        {courses.map((course) => (
          <div key={course.id} className={styles.courseCard}>
            <div className={styles.courseImage}>
              <img src={course.image} alt={course.title} />
            </div>
            <div className={styles.courseContent}>
              <h2>{course.title}</h2>
              <div className={styles.courseDetails}>
                <span>
                  <i className="fa-regular fa-clock"></i> {course.duration}
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i> {course.level}
                </span>
                <span>
                  <i className="fa-solid fa-tag"></i> {course.price}
                </span>
              </div>
              <p>{course.description}</p>
              <button className={styles.enrollButton}>Enroll Now</button>
            </div>
          </div>
        ))}
      </div>

      <Link href="/" className={styles.backLink}>
        <i className="fa-solid fa-arrow-left"></i> Back to Home
      </Link>
    </main>
  );
}
