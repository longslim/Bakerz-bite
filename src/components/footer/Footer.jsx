import React, { useState } from 'react';
import './footer.css';
import Ticker from '../ticker/Ticker';
import { NavLink, useNavigate } from 'react-router-dom';

function Footer() {
  const company = {
    address: 'West One Building',
    phone: '(123) 456-7890',
    mail: 'bakerzbite@domain.com'
  };

  const site = [
        {
          item: "About Us", path: "/about"
      },

      {
          item: "Merchandise", path: "/merchandise"
      },

      {
          item: "FAQS", path: "#faqs"
      },

      {
          item: "Contact Us", path: "/contact"
      }
  ];

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleNewsletterSubmit = () => {
    if (!newsletterEmail) return alert('Please enter your email');
    alert(`Subscribed with ${newsletterEmail}`);
    setNewsletterEmail('');
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedback) return alert('Please enter your feedback');
    alert(`Feedback received with rating: ${rating} star(s)`);
    setFeedback('');
    setRating(0);
  };


  const navigate = useNavigate()

    const handleScroll = (e, path) => {
        e.preventDefault()
        navigate("/")
        const element = document.querySelector(path)
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
            setOpenMenu(false)
        }
    }

  return (
    <div className='footie'>
      <div className='contact_container'>
        <h2>CONTACT</h2>
        <div className='contact'>
          <h3>{company.address}</h3>
          <h4>{company.phone}</h4>
          <h5>{company.mail}</h5>
        </div>
      </div>

      <div className='info_container'>
        <h2>INFO</h2>
        {site.map(({item, path}) => (
            path.startsWith("#") ? (
              <a 
                  key={item}
                  href={path}
                  className='items'
                  onClick={(e) => handleScroll(e, path)}
              >
                  {item} 
              </a>
          ) : (
              <NavLink
                  key={item}
                  to={path}
                  className= "items"
                  
              >
                  {item}
            </NavLink>
          )
        ))}
      </div>

      <div className='news_container'>
        <h2>NEWSLETTER</h2>
        <p>Subscribe to receive updates and more</p>
        <input
          type="email"
          placeholder='Enter your email'
          value={newsletterEmail}
          onChange={(e) => setNewsletterEmail(e.target.value)}
        />
        <button onClick={handleNewsletterSubmit}>SUBSCRIBE</button>
      </div>

      <div className='feedback_container'>
        <h2>FEEDBACK</h2>
        <form onSubmit={handleFeedbackSubmit}>
          <input
            type="text"
            placeholder='Enter your feedback'
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <div className='star_rating'>
            {[...Array(5)].map((star, index) => {
              const starValue = index + 1;
              return (
                <span
                  key={index}
                  className={`star ${starValue <= (hover || rating) ? 'filled' : ''}`}
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                >
                  &#9733;
                </span>
              );
            })}
          </div>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <Ticker/>
    </div>
  );
}

export default Footer;
