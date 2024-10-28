import Image from 'next/image';
import Logo from '../../public/mantleLogo.svg';

export default function Footer() {
  return (
    <footer class="footer-container">
      <div class="footer-logo">
        <Image src={Logo} alt="Mantle Logo"/>
      </div>

      <div class="footer-section">
        <h4>Products</h4>
        <ul>
          <li><a href="#">Cap Table Management</a></li>
          <li><a href="#">Planning & Forecasting</a></li>
          <li><a href="#">LP Automation</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Solutions</h4>
        <ul>
          <li><a href="#">For Founders</a></li>
          <li><a href="#">For Limited Partners</a></li>
          <li><a href="#">For Law Firms</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Migrate from Carta</a></li>
          <li><a href="#">Migrate from Pulley</a></li>
          <li><a href="#">Migrate from Shareworks</a></li>
          <li><a href="#">409A Valuations</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Security</a></li>
        </ul>
        <div class="social-links">
        </div>
      </div>

      <div class="footer-bottom">
        &copy; 2024 Ten Key Labs Incorporated DBA Mantle • Terms of Use
      </div>
    </footer>
  );
}
