import React from "react";
import "./footer.css";
import {
  FaArrowCircleUp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaComments,
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
          <a href="#" className="social-link">
            <FaFacebook />
          </a>
          <a href="#" className="social-link">
            <FaTwitter />
          </a>
          <a href="#" className="social-link">
            <FaInstagram />
          </a>
          <a href="#" className="social-link">
            <FaYoutube />
          </a>
          <a href="#" className="social-link">
            <FaComments />
          </a>{" "}
          {/* Icon for thread */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
