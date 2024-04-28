import React from "react";
import "./footer.css";
import {
  FaArrowCircleUp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaNewspaper, // Updated icon for news
} from "react-icons/fa";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="scroll-to-top-container">
        <button className="scroll-to-top" onClick={handleScrollToTop}>
          <FaArrowCircleUp size={30} />
        </button>
      </div>
      <div className="footer-content">
        <div className="logo">बुन्देलखण्डी </div>
        <p>
          "ये सूखे सजर की शाखों पे उगते सूरज ये बादलों के किनारे जो सूरज की रौशनी
          से चाँदी हुए हैं इनकी ज़मीन से ऊंचाई और बुंदेलखंड के प्यास की गहराई
          समान ही तो है"
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com/Bundelkhand24x7" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/bundelkhandnews?lang=en" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/incrediblebundelkhand/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/channel/UC_LN7Y5usUMHs7kMwP-dbrg" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaYoutube />
          </a>
          <a href="https://www.bundelkhand24x7.com/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaNewspaper /> {/* Updated icon for news */}
          </a>{" "}
        </div>
        <div className="fff">
          <footer>  Created by &#169; Sourabh & &#169; Nikhil ! </footer>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
