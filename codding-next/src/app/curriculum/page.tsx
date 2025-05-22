'use client';

import styles from './Curriculum.module.css';

export default function Curriculum() {
  const curriculum = [
    {
      title: 'Python Basics',
      duration: '4 Weeks',
      topics: [
        'Introduction to Python',
        'Variables and Data Types',
        'Control Structures',
        'Functions and Modules',
        'Basic OOP Concepts',
        'File Handling',
        'Error Handling',
        'Final Project',
      ],
    },
    {
      title: 'Python Advanced',
      duration: '8 Weeks',
      topics: [
        'Advanced OOP',
        'Decorators and Generators',
        'Database Integration',
        'Web Development with Flask',
        'API Development',
        'Testing and Debugging',
        'Performance Optimization',
        'Deployment and DevOps',
      ],
    },
  ];

  return (
    <main className={styles.curriculumContainer}>
      <div className={styles.header}>
        <h1>Our Curriculum</h1>
        <p>Comprehensive learning paths designed for your success</p>
      </div>

      <div className={styles.courses}>
        {curriculum.map((course, index) => (
          <div key={index} className={styles.courseCard}>
            <div className={styles.courseHeader}>
              <h2>{course.title}</h2>
              <span className={styles.duration}>{course.duration}</span>
            </div>
            <ul className={styles.topicsList}>
              {course.topics.map((topic, topicIndex) => (
                <li key={topicIndex}>
                  <i className="fa-solid fa-check"></i>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
