import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-container">
        <div className="footer-box">
          <img src={logo} alt="" />
        </div>
        <div className="footer-box">
          <h2>Contact Us</h2>
          <p className="foot-p">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </p>
          <p>example2020@gmail.com</p>
          <p>[903] 443-0343</p>
        </div>
        <div className="footer-box">
          <h2>More</h2>
          <p>About Us</p>
          <p>Products</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-box">
          <div className="main-box">
            <div className="box-social">
              <h2>Social Link</h2>
              <div className="social">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
              </div>
            </div>
            <p>© 2023 Food Truck Example</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
