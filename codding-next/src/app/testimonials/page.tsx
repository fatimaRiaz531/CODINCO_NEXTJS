'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Testimonials.module.css';
import { Testimonial, initialTestimonials } from './data';
import Image from 'next/image';

interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
  avatar: string;
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    review: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      setReviews(data.reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString(),
          avatar: `/assets/Avatar${Math.floor(Math.random() * 10) + 1}.png`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      setSubmitSuccess(true);
      setFormData({ name: '', rating: 5, review: '' });
      fetchReviews(); // Refresh reviews after submission
    } catch (error) {
      setSubmitError('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.testimonialsContainer}>
      <div className={styles.header}>
        <h1>Student Reviews</h1>
        <p>
          Hear what our students have to say about their learning experience
        </p>
      </div>

      <div className={styles.testimonialsGrid}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.testimonialCard}>
            <div className={styles.testimonialImage}>
              <Image
                src={review.avatar}
                alt={review.name}
                width={300}
                height={200}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.testimonialContent}>
              <div className={styles.testimonialText}>"{review.review}"</div>
              <div className={styles.testimonialAuthor}>
                <h3>{review.name}</h3>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < review.rating ? styles.starFilled : styles.starEmpty
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span>{new Date(review.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.feedbackForm}>
        <h2>Share Your Experience</h2>
        {submitSuccess && (
          <div className={styles.successMessage}>
            Thank you for your review! It will be visible after approval.
          </div>
        )}
        {submitError && (
          <div className={styles.errorMessage}>{submitError}</div>
        )}
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
            <div className={styles.ratingInput}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`${styles.starButton} ${
                    star <= formData.rating
                      ? styles.starFilled
                      : styles.starEmpty
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, rating: star }))
                  }
                >
                  ★
                </button>
              ))}
            </div>
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
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>

      <Link href="/" className={styles.backLink}>
        <i className="fa-solid fa-arrow-left"></i> Back to Home
      </Link>
    </main>
  );
}
