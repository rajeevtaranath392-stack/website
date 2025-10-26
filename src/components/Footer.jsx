import SocialLinks from "../commonComponents/SocialLinks";
import { useNavigate } from "react-router-dom";
import Subscribe from "./Subscribe";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer id="footer" className="section bg-dark p-4" data-bs-theme="dark">
      <div className="container wow fadeInUp">
        <ul className="social-icons social-icons-lg social-icons-muted justify-content-center mb-3">
          <SocialLinks />
        </ul>
        <div className="mb-3 text-center">
          <div className="mb-2 subscription-note">Join the mailing list to receive updates *</div>
          <Subscribe />
        </div>
        <div className="footer-links">
          <a
            href="/terms-of-service"
            className="footer-link"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
          <a
            href="/privacy-policy"
            className="footer-link"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a
            className="footer-link"
            onClick={() => {
              navigate('/contact');
            }}
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
