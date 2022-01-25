import React from "react";
import "./Navbar.scss";
import downImg1 from "../../assets/images/image-173.png";
import downImg2 from "../../assets/images/image-174.png";
import downImg3 from "../../assets/images/image-175.png";
import downImg4 from "../../assets/images/image-176.png";
import benjamin from "../../assets/images/image-190.png";

import arrowRight from "../../assets/icons/Arrow.png";
import play from "../../assets/icons/Arrow-1.png";
import play1 from "../../assets/icons/ArrowMP.png";
import MenuSection from "../MenuSection/MenuSection";
import ImgContent from "../ImgContent/ImgContent";
import Recomendation from "../Recomendation/Recomendation";
import Careers from "../Careers/Careers";
import Footer from '../Footer/Footer';
;


const Navbar = () => {
  return (
    <div className="my-menu">
      <div className="container px-0">
        <div className="row px-0 pb-4">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="menu-item">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      News
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      opinion
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      science
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      life
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      travel
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      moneys
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      art & design
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      sports
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      people
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      health
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      education
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="navbar-down">
          <div className="row">
            <div className="col-md-3">
              <div className="navbar-down-item">
                <p className="down-text">
                  25 Songs That Tell Us Where Music Is Going
                </p>
                <img src={downImg1} alt="img" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="navbar-down-item">
                <p className="down-text">
                  These Ancient Assassins Eat Their Own Kind
                </p>
                <img src={downImg2} alt="img" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="navbar-down-item">
                <p className="down-text">
                  How Do You Teach People to Love Difficult Music?
                </p>
                <img src={downImg3} alt="img" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="navbar-down-item p-0" style={{ border: "none" }}>
                <p className="down-text">
                  International Soccer’s Man of Mystery
                </p>
                <img src={downImg4} alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="top-img-content">
          <div className="top-img-item" data-aos="fade-up">
            <div className="row">
              <div className="col-md-9 px-0">
                <div className="left-side">
                  <div className="row">
                    <span className="text-capitalize">
                      <div>
                        <img src={benjamin} alt="image" />
                      </div>
                      <div>
                        <h6>by benjamin Turner</h6>
                        <small>traveler</small>
                      </div>
                    </span>
                  </div>
                  <div className="row">
                    <p className="subscribtion text-uppercase">destinations</p>
                    <h1 className="top-img-title">
                      In Southeast England, White Cliffs and Fish
                    </h1>
                  </div>
                  <div className="row">
                    <div className="top-img-buttons">
                      <button className="btn blueBtn">
                        Read more
                        <img src={arrowRight} alt="arrow" />
                      </button>
                      <div className="play">
                        <a href="#" className="circle d-block">
                          <img src={play} alt="play" />
                        </a>
                        <div className="play-text">
                          <p>The chalk cliff of Beachy Head</p>
                          <small>18:05</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 px-0">
                <div className="right-side">
                  <div className="right-heading">
                    <h6 className="text-uppercase">recommended for you</h6>
                  </div>
                  <div className="right-item">
                    <span style={{color: 'var(--blue-green-75)'}} className="text-uppercase">food</span>
                    <p>
                      For Chicken-Fried Steak, Too Much Is Just Enough{" "}
                      <span>
                      <img src={play1} alt="play" />
                      </span>
                    </p>
                  </div>
                  <div className="right-item">
                    <span style={{color: 'var(--blue-green-75)'}} className="text-uppercase">Cars</span>
                    <p>Storm Has Car Dealers Doing Swift Business</p>
                  </div>
                  <div className="right-item">
                    <span style={{color: 'var(--purple-75)'}} className="text-uppercase">Movies</span>
                    <p>
                      War Is Hell? In New Military Dramas, It’s One-Dimensional
                    </p>
                  </div>
                  <div className="right-item">
                    <span style={{color: 'var(--orange-75)'}} className="text-uppercase">NFL</span>
                    <p>
                      11 surprising stat rankings for active NFL players{" "}
                      <span>
                      <img src={play1} alt="play" />
                      </span>
                    </p>
                  </div>
                  <div className="right-item" style={{border: 'none'}}>
                    <span style={{color: 'var(--green-75)'}} className="text-uppercase">Tech Reviews</span>
                    <p>
                      The bookcases you can buy online and assemble yourself
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuSection />
      <ImgContent />
      <Recomendation />
      <Careers />
      <Footer />
    </div>
  );
};

export default Navbar;
