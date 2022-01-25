import React from "react";
import img1 from "../../assets/images/image-192.png";
import img2 from "../../assets/images/Image-256.png";
import img3 from "../../assets/images/Image-257.png";
import img4 from "../../assets/images/Image-258.png";
import img5 from "../../assets/images/Image-259.png";
import img6 from "../../assets/images/Image-260.png";
import img7 from "../../assets/images/image-178.png";
import img8 from "../../assets/images/image-179.png";
import img9 from "../../assets/images/image-180.png";
import img10 from "../../assets/images/image-181.png";
import img11 from "../../assets/images/image-182.png";
import img12 from "../../assets/images/image-183.png";
import img13 from "../../assets/images/image-184.png";
import bookmark from "../../assets/icons/Bookmark-1.png";
import comment from "../../assets/icons/Comment.png";
import heart from "../../assets/icons/Heart.png";

import './Recomendation.scss';

const Recomendation = () => {
  return (
    <div className="recomendation pt-5">
      <div className="container px-0">
        <div className="row">
          <div className="col-9">
            <div className="recom-left">
              <div className="recom-section row">
                <div className="col-md-5">
                  <div className="recom-img">
                    <img src={img1} alt="#" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="recom-content">
                    <div className="d-flex justify-content-between">
                      <span>FLIGHTS</span>
                      <img src={bookmark} alt="#" />
                    </div>
                    <div className="">
                      <h4>
                        Passengers Suffer as Crowded Field Puts Pressure on
                        Europe’s Airlines
                      </h4>
                      <p>
                        Weaker carriers have fallen by the wayside amid fierce
                        competition, while others have been hit by bad luck. The
                        result: thousands of canceled flights.
                      </p>
                    </div>
                    <div className="">
                      <ul className="list-unstyled">
                        <li>Aug 6</li>
                        <li>
                          <img src={comment} alt="#" /> 342
                        </li>
                        <li>
                          <img src={heart} alt="#" /> 830
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recom-section row">
                <div className="col-5">
                  <div className="recom-img">
                    <img src={img2} alt="#" />
                  </div>
                </div>
                <div className="col-7">
                  <div className="recom-content">
                    <div className="d-flex justify-content-between">
                      <span>food</span>
                      <img src={bookmark} alt="#" />
                    </div>
                    <div className="row">
                      <h4>
                        Three Courses, 20 Euros: The Affordable Dining
                        Renaissance in Paris
                      </h4>
                      <p>
                        The Los Angeles area, for all of its culinary diversity,
                        has not historically been thought of as a haven for
                        bread lovers. The area has a reputation as a place where
                        gluten fears to tread.
                      </p>
                    </div>
                    <div className="row">
                      <ul className="list-unstyled">
                        <li>Aug 6</li>
                        <li>
                          <img src={comment} alt="#" /> 342
                        </li>
                        <li>
                          <img src={heart} alt="#" /> 830
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recom-section row">
                <div className="col-5">
                  <div className="recom-img">
                    <img src={img3} alt="#" />
                  </div>
                </div>
                <div className="col-7">
                  <div className="recom-content">
                    <div className="d-flex justify-content-between">
                      <span>science</span>
                      <img src={bookmark} alt="#" />
                    </div>
                    <div className="row">
                      <h4>
                        Watch the High-Flying Physics of a Plant’s Exploding
                        Fruits
                      </h4>
                      <p>
                        Three undergradute physics majors and their professor
                        worked out how the hairyflower wild petunia shoots tiny
                        seeds more than 20 feet through the air
                      </p>
                    </div>
                    <div className="row">
                      <ul className="list-unstyled">
                        <li>Aug 6</li>
                        <li>
                          <img src={comment} alt="#" /> 342
                        </li>
                        <li>
                          <img src={heart} alt="#" /> 830
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recom-section row">
                <div className="col-5">
                  <div className="recom-img">
                    <img src={img4} alt="#" />
                  </div>
                </div>
                <div className="col-7">
                  <div className="recom-content">
                    <div className="d-flex justify-content-between">
                      <span>health</span>
                      <img src={bookmark} alt="#" />
                    </div>
                    <div className="row">
                      <h4>How the Shape of Your Ears Affects What You Hear</h4>
                      <p>
                        We’re able to locate sound because our brains grasp the
                        shape of our ears. When that shape changes, we need time
                        and practice to adapt. Ears are a peculiarly individual
                        piece of anatomy.
                      </p>
                    </div>
                    <div className="row">
                      <ul className="list-unstyled">
                        <li>Aug 6</li>
                        <li>
                          <img src={comment} alt="#" /> 342
                        </li>
                        <li>
                          <img src={heart} alt="#" /> 830
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recom-section row">
                <div className="col-5">
                  <div className="recom-img">
                    <img src={img5} alt="#" />
                  </div>
                </div>
                <div className="col-7">
                  <div className="recom-content">
                    <div className="d-flex justify-content-between">
                      <span>science</span>
                      <img src={bookmark} alt="#" />
                    </div>
                    <div className="row">
                      <h4>
                        Forests Protect the Climate. A Future With More Storms
                        Would Mean Trouble.
                      </h4>
                      <p>
                        With an increase in extreme weather expected in the
                        years to come, forests could be changed permanently as
                        the world continues to warm
                      </p>
                    </div>
                    <div className="row">
                      <ul className="list-unstyled">
                        <li>Aug 6</li>
                        <li>
                          <img src={comment} alt="#" /> 342
                        </li>
                        <li>
                          <img src={heart} alt="#" /> 830
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recom-section row">
                <div className="col-5">
                  <div className="recom-img">
                    <img src={img6} alt="#" />
                  </div>
                </div>
                <div className="col-7">
                  <div className="recom-content">
                    <div className="d-flex justify-content-between">
                      <span>Art & Design</span>
                      <img src={bookmark} alt="#" />
                    </div>
                    <div className="row">
                      <h4>
                        New Contemporary Institute Reverberates in Richmond’s
                        Historic Landscape
                      </h4>
                      <p>
                        The center, which will open in April, takes a bold look
                        at race and other social issues that still resonate in
                        the region as well as the nation. A new Institute for
                        Contemporary Art is set to open.
                      </p>
                    </div>
                    <div className="row">
                      <ul className="list-unstyled">
                        <li>Aug 6</li>
                        <li>
                          <img src={comment} alt="#" /> 342
                        </li>
                        <li>
                          <img src={heart} alt="#" /> 830
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="recom-right">
              <div className="recom-title">
                <h5>Recommended for you</h5>
              </div>
              <div className="recom-item">
                <ul className="list-unstyled">
                  <li>
                    <div className="d-flex">
                      <div>
                        <img src={img7} alt="#" />
                      </div>
                      <div>
                        <p>Office Meetings Leave the Office</p>
                        <small>15 minuts ago</small>
                      </div>
                    </div>
                  </li>
                  <li className="first">
                    <div className="d-flex">
                      <div>
                        <img src={img8} alt="#" />
                      </div>
                      <div>
                        <p>Experimental Vocal Music in Brooklyn</p>
                        <small>32 minuts ago</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <div>
                        <img src={img9} alt="#" />
                      </div>
                      <div>
                        <p>Google’s Influence Over Think Tanks</p>
                        <small>38 minuts ago</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <div>
                        <img src={img10} alt="#" />
                      </div>
                      <div>
                        <p>Homes for Sale in NYC and Connecticut</p>
                        <small>53 minuts ago</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <div>
                        <img src={img11} alt="#" />
                      </div>
                      <div>
                        <p>Are You There, Dad? It’s Me, Alice</p>
                        <small>1 hour ago</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <div>
                        <img src={img12} alt="#" />
                      </div>
                      <div>
                        <p>The New Punk Look: Lacy and Colorful</p>
                        <small>1 hour ago</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <div>
                        <img src={img13} alt="#" />
                      </div>
                      <div>
                        <p>Sunday Best in Harlem and Brooklyn</p>
                        <small>2 hours ago</small>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="recom-footer">
                <h6>Read more</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomendation;
