import React, { useState, useEffect } from 'react';

interface CartItem {
  course: string;
  students: number;
  months: number;
  plan: string;
  basePrice: number;
}

const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      course: 'Python Bootcamp',
      students: 1,
      months: 1,
      plan: 'Monthly',
      basePrice: 2500,
    },
  ]);
  const [total, setTotal] = useState<number>(0);
  const [message, setMessage] = useState<{
    text: string;
    type: 'success' | 'failure' | '';
  }>({ text: '', type: '' });

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const calculateTotal = () => {
    const sum = cartItems.reduce(
      (acc, item) => acc + item.basePrice * item.students * item.months,
      0
    );
    setTotal(sum);
  };

  const handleRemove = (index: number) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const displayMessage = (text: string, type: 'success' | 'failure') => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  const handleSaveCart = () => {
    displayMessage('Enrollment Saved!', 'success');
  };

  const handleBuyNow = () => {
    displayMessage(
      'Enrollment Successful! Check your email for details.',
      'success'
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="container cart-section" style={{ paddingBlock: '8rem' }}>
        <h2>Your enrollment cart is empty</h2>
        <p>
          Browse our{' '}
          <a href="/courses.html" style={{ color: 'var(--highlight)' }}>
            courses
          </a>{' '}
          to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="container cart-section" style={{ paddingBlock: '8rem' }}>
      {message.text && (
        <div
          className={`msg-card ${
            message.type === 'success' ? 'success' : 'warning'
          }`}
        >
          {message.text}
        </div>
      )}
      <h1>
        Your <span>Bootcamp</span> Enrollment
      </h1>
      <table id="table">
        <thead className="thead">
          <tr>
            <th>Course</th>
            <th>Students</th>
            <th>Months</th>
            <th>Plan</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody id="append">
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.course}</td>
              <td>{item.students}</td>
              <td>{item.months}</td>
              <td>{item.plan}</td>
              <td>
                <button
                  onClick={() => handleRemove(index)}
                  style={{
                    backgroundColor: 'var(--failure)',
                    borderRadius: '8px',
                    padding: '0.25rem 0.5rem',
                    color: 'white',
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className="bootcamp-features"
        style={{
          marginTop: '2rem',
          padding: '2rem',
          backgroundColor: 'var(--background-dark)',
          borderRadius: '1rem',
          border: '2px solid var(--background-light)',
        }}
      >
        <h3>Why Choose Our Python Bootcamp:</h3>
        <ul>
          <li>
            Comprehensive Curriculum covering Python fundamentals to advanced
            topics
          </li>
          <li>Hands-on Projects to build real-world applications</li>
          <li>
            Career-Oriented Skills development with industry best practices
          </li>
          <li>Flexible Learning schedule with recorded sessions</li>
          <li>Personalized mentorship and code reviews</li>
          <li>Certificate upon completion</li>
        </ul>
      </div>

      <div
        className="checkout-container"
        style={{
          paddingBlock: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '2px solid var(--background-light)',
          borderTop: 'none',
          padding: '2rem',
          marginTop: '-2px',
          borderRadius: '0 0 1rem 1rem',
        }}
      >
        <h4
          style={{
            fontSize: 'var(--h3)',
            color: 'var(--highlight)',
            marginLeft: '1rem',
          }}
        >
          Your Total: <span id="total">Rs. {total}</span>{' '}
          <i
            className="fa-solid fa-sack-dollar"
            style={{ color: 'var(--highlight)' }}
          ></i>
        </h4>
        <div>
          <button
            onClick={handleSaveCart}
            className="btn secondary-btn"
            style={{ borderRadius: '50px', color: 'var(--white)' }}
          >
            Save Enrollment
          </button>
          <button
            onClick={handleBuyNow}
            className="btn"
            style={{ marginLeft: '1rem' }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
