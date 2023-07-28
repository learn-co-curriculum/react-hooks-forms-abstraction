import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        {/* Logo and Navigation */}
        <img src="https://www.shutterstock.com/image-vector/home-cleaning-service-logo-design-600w-2145553895.jpg" />
        <nav>
          {/* Navigation links */}
          <a href="#login/signup">SignUp/Login</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        {/* Hero Section Content */}
        <h1>Welcome to HouseClean!</h1>
        <p>Get your house cleaned with just a few clicks.</p>
        <button>Get Started</button>
      </section>

      <section id="features" className="features">
        {/* Features Section Content */}
        <h2>Key Features</h2>
        <div className="feature">
          <img src="" alt="" />
          <h3>Easy Booking</h3>
          <p>Book a cleaning service in no time.</p>
        </div>
        <div className="feature">
          <img src="feature-icon-2.png" alt="Feature 2" />
          <h3>Trusted Cleaners</h3>
          <p>Experienced and background-checked cleaners.</p>
        </div>
      </section>

      {/* Pricing Options Section */}
      <section id="pricing-options" className="pricing-options">
        <h2>Choose Your Plan</h2>
        <div className="options">
          <div className="option">
            <h3>Bronze</h3>
            <p>$29</p>
          </div>
          <div className="option">
            <h3>Gold</h3>
            <p>$59</p>
          </div>
          <div className="option">
            <h3>Silver</h3>
            <p>$39</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        {/* Testimonials Section Content */}
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <img src="user-avatar-1.png" alt="User 1" />
          <blockquote>
            "HouseClean is a lifesaver! Their cleaners are professional and always do a fantastic job."
          </blockquote>
          <p>- Kibiwot</p>
        </div>
        <div className="testimonial">
          <img src="user-avatar-2.png" alt="User 2" />
          <blockquote>
            "I'm impressed with the quality of service and the ease of booking. Highly recommended!"
          </blockquote>
          <p>- Elon Musk</p>
        </div>
      </section>

      <section id="pricing" className="pricing">
        {/* Pricing Section Content */}
        <h2>Pricing Plans</h2>
        <div className="plan">
          <h3>Basic</h3>
          <p>$49 per cleaning</p>
          <ul>
            <li>Standard cleaning</li>
            <li>1 bedroom & 1 bathroom</li>
          </ul>
        </div>
        <div className="plan">
          <h3>Standard</h3>
          <p>$79 per cleaning</p>
          <ul>
            <li>Full house cleaning</li>
            <li>3 bedrooms & 2 bathrooms</li>
          </ul>
        </div>
        {/* Add more pricing plans here */}
      </section>

      <section id="contact" className="contact">
        {/* Contact Section Content */}
        <h2>Contact Us</h2>
        <p>Have a question or need support? Contact our team.</p>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">

        <p>&copy; {new Date().getFullYear()} HouseClean App. All rights reserved.</p>
        <div className="social-icons">
          {/* Social media icons here */}
          <a href="#">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="twitter-icon.png" alt="Twitter" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
