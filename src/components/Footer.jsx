import React from "react";
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer() {
    return (
<div className="footer-container">
  <div className="footer-links-container">
    <div className="footer-links-wrapper">
      <div className="footer-links-items">
        <h2 className="footer-link-title">About Us</h2>
        <Link to="/" className="footer-link">
          How it works
        </Link>
        <Link to="/" className="footer-link">
          Testimonials
        </Link>
        <Link to="/" className="footer-link">
          Careers
        </Link>
        <Link to="/" className="footer-link">
          Investors
        </Link>
        <Link to="/" className="footer-link">
          Terms of Service
        </Link>
      </div>
      <div className="footer-links-items">
        <h2 className="footer-link-title">Contact Us</h2>
        <Link to="/" className="footer-link">
          Contacts
        </Link>
        <Link to="/" className="footer-link">
          Support
        </Link>
        <Link to="/" className="footer-link">
          Destinations
        </Link>
        <Link to="/" className="footer-link">
          Sponsorships
        </Link>
      </div>
    </div>
    <div className="footer-links-wrapper">
      <div className="footer-links-items">
        <h2 className="footer-link-title">Videos</h2>
        <Link to="/" className="footer-link">
          Submit Video
        </Link>
        <Link to="/" className="footer-link">
          Ambassadors
        </Link>
        <Link to="/" className="footer-link">
          Agency
        </Link>
        <Link to="/" className="footer-link">
          Influencer
        </Link>
      </div>
      <div className="footer-links-items">
        <h2 className="footer-link-title">Social Media</h2>
        <a href='/' className="footer-link"
                  target="_blank"
                  aria-label="Instagram">
          Instagram
        </a>
        <a href='/' className="footer-link"
                  target="_blank"
                  aria-label="Facebook">
          Facebook
        </a>
        <a href='/' className="footer-link"
                  target="_blank"
                  aria-label="Youtube">
          Youtube
        </a>
        <a href='/' className="footer-link"
                  target="_blank"
                  aria-label="Twitter">
          Twitter
        </a>
        <a href='/' className="footer-link"
                  target="_blank"
                  aria-label="LinkedIn">
          LinkedIn
        </a>
      </div>
    </div>
  </div>
  <section className="social-media">
    <div className="social-media-wrap">
      <Link to="/" className="social-logo">
        TRVL <i class="fa-brands fa-typo3"></i>
      </Link>
      <small className="website-rights">TRVL © 2022</small>
      <div className="social-icons">
        <a
          href="/"
          className="social-icon-link"
          target="_blank"
          aria-label="Instagram"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>

        <a
          href="/"
          className="social-icon-link"
          target="_blank"
          aria-label="Facebook"
        >
          <i class="fa-brands fa-facebook"></i>
        </a>

        <a
          href="/"
          className="social-icon-link"
          target="_blank"
          aria-label="Youtube"
        >
          <i class="fa-brands fa-youtube"></i>
        </a>

        <a
          href="/"
          className="social-icon-link"
          target="_blank"
          aria-label="Twitter"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>

        <a
          href="/"
          className="social-icon-link"
          target="_blank"
          aria-label="Linkedin"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>

      </div>
    </div>
  </section>
</div>
    )
}

export default Footer;