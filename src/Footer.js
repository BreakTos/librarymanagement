import { FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <>
    <footer className="footer">
      <div className='container'>
            <p className='thoraNeeche'>Connect with us on social media:</p>
          
            <a href="#" className="social-icon"><FaLinkedin /></a>
            <a href="#" className="social-icon"><FaGithub /></a>
       </div>
       <div className='end'>
            <p>&copy; 2023 My Library. All rights reserved.</p>
          </div>
       
    </footer>
    </>
  );
}

export default Footer;