import React from "react";
import "./Footer.scss";
import footerLogo from "../../assets/icons/UNV.png";
import facebook from "../../assets/icons/Facebook.png";
import twitter from "../../assets/icons/Twitter.png";
import youtube from "../../assets/icons/YouTube.png";
import instagram from "../../assets/icons/Instagram.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container px-0">
        <div className="footer-menu">
          <div className="row">
            <div className="col-2 px-0">
              <div className="footer-item">
                <div className="footer-color"></div>
                <h6>News</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Nation</a>
                  </li>
                  <li>
                    <a href="#">World</a>
                  </li>
                  <li>
                    <a href="#">Politics</a>
                  </li>
                  <li>
                    <a href="#">Solar Eclipce</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2 px-0">
              <div className="footer-item">
                <div style={{backgroundColor: 'var(--purple-75)'}} className="footer-color"></div>
                <h6>Arts</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Art & Design</a>
                  </li>
                  <li>
                    <a href="#">Movies</a>
                  </li>
                  <li>
                    <a href="#">People</a>
                  </li>
                  <li>
                    <a href="#">Video: Arts</a>
                  </li>
                  <li>
                    <a href="#">Theatre</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2 px-0">
              <div className="footer-item">
                <div style={{backgroundColor: 'var(--blue-75)'}} className="footer-color"></div>
                <h6>Travel</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Destinations</a>
                  </li>
                  <li>
                    <a href="#">Flights</a>
                  </li>
                  <li>
                    <a href="#">Bussines Travel</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2 px-0">
              <div className="footer-item">
                <div style={{backgroundColor: 'var(--orange-75)'}} className="footer-color"></div>
                <h6>Sports</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Olympics</a>
                  </li>
                  <li>
                    <a href="#">Motor Sports</a>
                  </li>
                  <li>
                    <a href="#">Volleyball</a>
                  </li>
                  <li>
                    <a href="#">MMA</a>
                  </li>
                  <li>
                    <a href="#">Cycling</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2 px-0">
              <div className="footer-item">
                <div style={{backgroundColor: 'var(--green-75)'}} className="footer-color"></div>
                <h6>Tech</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Tech</a>
                  </li>
                  <li>
                    <a href="#">Tech Columnists</a>
                  </li>
                  <li>
                    <a href="#">Tech Reviews</a>
                  </li>
                  <li>
                    <a href="#">Talking Tech</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2 px-0">
              <div className="footer-item">
                <div style={{backgroundColor: 'var(--grey-blue-75)'}} className="footer-color"></div>
                <h6>Moneys</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Markets</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Personal Finance</a>
                  </li>
                  <li>
                    <a href="#">Retirement</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-socials">
          <div className="d-flex justify-content-between">
            <div>
              <ul className="list-unstyled list-group list-group-horizontal">
                <li className="logo">
                  <img src={footerLogo} alt="logo" />
                </li>
                <li>
                  <a href="#">contact us</a>
                </li>
                <li>
                  <a href="#">work with us</a>
                </li>
                <li>
                  <a href="#">advertise</a>
                </li>
                <li>
                  <a href="#">your add choise</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="socials-menu list-unstyled list-group list-group-horizontal">
                <li>
                  <a href="#">
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twitter} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={youtube} alt="youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-down d-flex justify-content-between">
          <p>
            Universal’s business concept is to offer fashion and quality at the
            best price in a sustainable way. Universal has since it was founded
            in 2015 grown into one of the world's leading fashion companies.{" "}
          </p>
          <span className="d-block">© 2019 Universal UI Kit</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
