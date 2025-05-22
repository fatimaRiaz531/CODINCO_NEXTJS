'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Testimonials.module.css';
import { Testimonial, initialTestimonials } from './data';

interface FormData {
  name: string;
  rating: number;
  review: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    rating: 5,
    review: '',
  });

  useEffect(() => {
    setTestimonials(initialTestimonials);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.review) {
      alert('Please fill in all required fields');
      return;
    }

    const newTestimonial: Testimonial = {
      id: testimonials.length + 1,
      name: formData.name,
      role: 'Student',
      image: '/assets/testimonials/default.jpg',
      text: formData.review,
      rating: formData.rating,
    };

    setTestimonials([...testimonials, newTestimonial]);
    setFormData({ name: '', rating: 5, review: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value,
    }));
  };

  return (
    <main className={styles.testimonialsContainer}>
      <div className={styles.header}>
        <h1>Student Success Stories</h1>
        <p>Hear from our graduates about their journey with us</p>
      </div>

      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <div className={styles.testimonialImage}>
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.testimonialAuthor}>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
                <div className={styles.rating}>
                  {'⭐'.repeat(testimonial.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.feedbackForm}>
        <h2>Share Your Experience</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
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
          <div className={styles.formGroup}>
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="5"
              value={formData.rating}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="review">Your Review</label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              required
              placeholder="Share your experience with us"
              rows={4}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit Review
          </button>
        </form>
      </div>

      <Link href="/" className={styles.backLink}>
        <i className="fa-solid fa-arrow-left"></i> Back to Home
      </Link>
    </main>
  );
}
