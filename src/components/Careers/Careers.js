import React, { useEffect } from "react";
import arrow from "../../assets/icons/Arrow.png";
import blogImg from "../../assets/images/image-169.png";
import carousel_1 from "../../assets/images/image-205.png";
import carousel_2 from "../../assets/images/image-208.png";
import carousel_logo from "../../assets/images/image-207.jpg";
import gallery from "../../assets/icons/Images.png";

import "./Careers.scss";

const Careers = () => {
  return (
    <div>
      <div className="Careers">
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="careers-carousel">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="3"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="4"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={carousel_1}
                        alt="First slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <div className="carousel-inner-item">
                          <div className="d-flex justify-content-center">
                            <img
                              src={carousel_logo}
                              alt="Sarah"
                              className="img-fluid d-block"
                            />
                          </div>
                          <h6 className="text-capitalize">by sarah jenkins</h6>
                          <small>Photographer</small>
                          <h1 className="text-white">
                            Readers' Choice winners: Your wine country favorites
                          </h1>
                          <button className="btn blueBtn">
                            <img className="m-0" src={gallery} alt="gallery" />{" "}
                            Watch photos <span>26</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={carousel_2}
                        alt="Second slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <div className="carousel-inner-item">
                          <div className="d-flex justify-content-center">
                            <img
                              src={carousel_logo}
                              alt="Sarah"
                              className="img-fluid d-block"
                            />
                          </div>
                          <h6 className="text-capitalize">by sarah jenkins</h6>
                          <small>Photographer</small>
                          <h1 className="text-white">
                            Readers' Choice winners: Your wine country favorites
                          </h1>
                          <button className="btn blueBtn">
                            <img className="m-0" src={gallery} alt="gallery" />{" "}
                            Watch photos <span>26</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={carousel_1}
                        alt="Third slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <div className="carousel-inner-item">
                          <div className="d-flex justify-content-center">
                            <img
                              src={carousel_logo}
                              alt="Sarah"
                              className="img-fluid d-block"
                            />
                          </div>
                          <h6 className="text-capitalize">by sarah jenkins</h6>
                          <small>Photographer</small>
                          <h1 className="text-white">
                            Readers' Choice winners: Your wine country favorites
                          </h1>
                          <button className="btn blueBtn">
                            <img className="m-0" src={gallery} alt="gallery" />{" "}
                            Watch photos <span>26</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={carousel_2}
                        alt="Fourth slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <div className="carousel-inner-item">
                          <div className="d-flex justify-content-center">
                            <img
                              src={carousel_logo}
                              alt="Sarah"
                              className="img-fluid d-block"
                            />
                          </div>
                          <h6 className="text-capitalize">by sarah jenkins</h6>
                          <small>Photographer</small>
                          <h1 className="text-white">
                            Readers' Choice winners: Your wine country favorites
                          </h1>
                          <button className="btn blueBtn">
                            <img className="m-0" src={gallery} alt="gallery" />{" "}
                            Watch photos <span>26</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={carousel_1}
                        alt="Fifth slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <div className="carousel-inner-item">
                          <div className="d-flex justify-content-center">
                            <img
                              src={carousel_logo}
                              alt="Sarah"
                              className="img-fluid d-block"
                            />
                          </div>
                          <h6 className="text-capitalize">by sarah jenkins</h6>
                          <small>Photographer</small>
                          <h1 className="text-white">
                            Readers' Choice winners: Your wine country favorites
                          </h1>
                          <button className="btn blueBtn">
                            <img className="m-0" src={gallery} alt="gallery" />{" "}
                            Watch photos <span>26</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="careers-blog">
                <div className="row">
                  <div className="blog-item">
                    <div className="row">
                      <div className="col-6 px-0">
                        <div className="blog-text">
                          <span>careers</span>
                          <h4>
                            Had a Job Interview but No Callback? Here’s What to
                            Do
                          </h4>
                          <p>
                            Try to understand the culture of the company where
                            you want to work and be authentic in your interview,
                            experts emphasize
                          </p>
                          <button className="btn blueBtn">
                            Read more
                            <img src={arrow} alt="arrow" />
                          </button>
                        </div>
                      </div>
                      <div className="col-6 px-0">
                        <div className="blog-img">
                          <img src={blogImg} alt="blog image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="blog-list">
                    <div className="row">
                      <div className="col-6 pl-0">
                        <div className="list-item">
                          <div className="list">
                            <h6>Is Coffee Bad for Bones?</h6>
                            <p>
                              Coffee drinkers may excrete more calcium, but it
                              doesn’t appear to weaken bones
                            </p>
                            <span>Oct 15</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 pr-0">
                        <div className="list-item">
                          <div className="list">
                            <h6>What We Manufacture</h6>
                            <p>
                              A global history of the factory and the modern
                              world that all should read
                            </p>
                            <span>Oct 14</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe">
        <div className="container">
          <div className="row">
            <div className="subscibe-section text-center">
              <h1>Subscribe now and get 20% off</h1>
              <div className="d-flex align-items-center justify-content-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button className="btn blueBtn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
