import '../HomePageDark.css'
import logo from "/src/assets/logo.svg"

function Footer() {
  return (
      <footer className="footer-dark">
        <div className="footer-content-dark">
          <div className="footer-logo-dark">
            <img src={logo} alt="To Go To Go Logo" />
          </div> 
          <nav className="footer-navigation-dark">
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </nav>
          <p className="copyright-dark">&copy; {new Date().getFullYear()} To Go To Go. All rights reserved.</p>
        </div>
      </footer>
  ) 
}

export default Footer
