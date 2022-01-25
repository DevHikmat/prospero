import React from "react";
import "./MenuSection.scss";
import car from "../../assets/images/image-188.png";
import jessica from "../../assets/images/image-189.png";
import person1 from "../../assets/images/image-192-1.png";
import person2 from "../../assets/images/image-193.png";
import person3 from "../../assets/images/image-194.png";
import cat from "../../assets/images/image-196.png";
import comment from "../../assets/icons/Comment.png";
import heart from "../../assets/icons/Heart.png";

const MenuSection = () => {
  return (
    <div className="menu-section">
      <div className="container px-0">
        <div className="flex-container">
          <div className="main-left">
            <div className="left-top">
              <div className="cars">
                <div data-aos='flip-left' data-aos-duration='2000'>
                <div className="cars-item">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <span className="text-uppercase">cars</span>
                          <h2>
                            The joy of replicas: A $ 5 million car for $ 50,000
                          </h2>
                          <p>
                            The 31-year-old self-taught engineer and former
                            amateur racer spends his days building artful
                            recreations of one of most iconic sports cars
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <img src={car} alt="car" />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <ul className="list-unstyled list-group list-group-horizontal">
                        <li>
                          <img src={jessica} alt="jess" />
                        </li>
                        <li>
                          <h5 className="text-capitalize">
                            jessica milner: <span>
                              Even as the ride-hailing service’s future remem…
                            </span>
                          </h5>
                        </li>
                        <li>
                          <img src={comment} alt="#" /> 342
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="popular">
                <div data-aos='flip-left' data-aos-duration='2500'>
                <div className="popular-item">
                  <div className="card">
                    <div className="card-header">
                      <a href="#" className="btn">
                        Popular
                      </a>
                    </div>
                    <div className="card-body">
                      <span>Art & Design</span>
                      <h1>
                        Invisible ink: the weird world of tattoo removal –
                        in pictures
                      </h1>
                    </div>
                    <div className="card-footer d-flex pb-0">
                      <div style={{width: '45px', height: '45px'}}>
                        <img className="" src={jessica} alt="#" />
                      </div>
                      <div>
                        <h6>By Sarah Jenkins</h6>
                        <ul className="list-unstyled list-group list-group-horizontal">
                          <li>Sept 26</li>
                          <li>
                            <img src={comment} alt="#" /> 16
                          </li>
                          <li>
                            <img src={heart} alt="#" /> 832
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="left-down">
              <div className="down-img">
                <div data-aos='fade-up'>
                <div className="down-img-item">
                  <div className="card">
                    <img src={cat} alt="cat" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">
                        200+ Doomed Cats Saved From Euthanization
                      </h5>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="down-lists">
                <div className="list-item">
                  <div data-aos='fade-up'>
                  <div className="list">
                    <h6>Is Coffee Bad for Bones?</h6>
                    <p>
                      Coffee drinkers may excrete more calcium, but it doesn’t
                      appear to weaken bones
                    </p>
                    <span>Oct 15</span>
                  </div>
                  </div>
                </div>
                <div className="list-item">
                  <div data-aos='fade-up'>
                  <div className="list">
                    <h6>What We Manufacture</h6>
                    <p>
                      A global history of the factory and the modern world that
                      all should read
                    </p>
                    <span>Oct 14</span>
                  </div>
                  </div>
                </div>
                <div className="list-item">
                  <div data-aos='fade-up'>
                  <div className="list">
                    <h6>It’s a Stressful World</h6>
                    <p>
                      Can a cruise skeptic enjoy four days on the seas with his
                      family and a bunch of princesses?
                    </p>
                    <span>Oct 15</span>
                  </div>
                  </div>
                </div>
                <div className="list-item">
                  <div data-aos='fade-up'>
                  <div className="list">
                    <h6>A Treat for Lemon Lovers</h6>
                    <p>
                      This tangerine, ginger and chocolate tart has verve, depth
                      and a hint of spice
                    </p>
                    <span>Oct 13</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-right">
            <div className="columns">
              <div data-aos="flip-left" data-aos-duration='3000'>
              <div className="columns-item">
                <div className="columns-heading text-uppercase">columns</div>
                <ul className="list-unstyled">
                  <li>
                    <h5>
                    Architecture is the thoughtful making of space
                    </h5>
                    <div className="d-flex">
                      <div>
                        <img src={person1} alt="#" />
                      </div>
                      <div>
                        <p>David Williams</p>
                        <small>Architect</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h5>
                    The details are not the details. They make the design.
                    </h5>
                    <div className="d-flex">
                      <div>
                        <img src={person2} alt="#" />
                      </div>
                      <div>
                        <p>Alexandra Green</p>
                        <small>Interior designer</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h5>
                    Live life to the fullest, and focus on the positive
                    </h5>
                    <div className="d-flex">
                      <div>
                        <img src={person3} alt="#" />
                      </div>
                      <div>
                        <p>Olivia Thompson</p>
                        <small>Coacher</small>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="columns-down">
                  Read more
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
