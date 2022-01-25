import React from "react";
import moment from 'moment';
import hamMenu from "../../assets/icons/Hamburger_menu.png";
import search from "../../assets/icons/Search.png";
import subsImg from "../../assets/images/image-253.png";
import man from "../../assets/icons/Man.png";
import logo from '../../assets/images/image-252.png';
import weather from '../../assets/icons/Sun.png';
import "./Header.scss";

const Header = () => {

  return (
    <div className="Header">
      <div className="search-container">
        <div className="flex-container">
          <div className="sections">
            <button type="button">
              <img src={hamMenu} alt="logo" />
              <span>Sections</span>
            </button>
          </div>
          <div className="search-bar">
            <form action="/action_page">
              <img src={search} alt="search logo" />
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </form>
          </div>
          <div className="subscribe-now">
            <img src={subsImg} alt="subscribe now" />
            <a href="#" className="subscribe-text">
              <h6 className="text-capitalize">subscibe now</h6>
              <small>3 month for $19</small>
            </a>
          </div>
          <div className="sign-in">
            <a href="#sign-in">
              <img src={man} alt="Man" />
              <p className="text-capitalize">sign in</p>
            </a>
          </div>
        </div>
      </div>
      <div className="logo-container">
      <div className="row">
        <div className="col-4">
          <div className="logo-section">
            <img src={logo} alt="logo" />
            <span>Boston and New York Bear Brunt</span>
          </div>
        </div>
        <div className="col-4">
          <div className="universal">
            <h1>Universal</h1>
          </div>
        </div>
        <div className="col-4">
          <div className="data-section">
            <span className="for-data">
              { moment().format('dddd' + ", " + 'LL') }
            </span>
            <div className="weather">
              <img src={weather} alt="icon" className="img-fluid d-block" />
              <span>- 23 °C</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
