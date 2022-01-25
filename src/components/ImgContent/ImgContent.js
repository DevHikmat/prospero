import React from "react";
import arrow from '../../assets/icons/Arrow.png';
import flowerBg from '../../assets/images/image-216.png';

const ImgContent = () => {
  return (
    <div style={{background: `url(${flowerBg})`, padding: '40px 350px'}} className="img-content text-center">
      <h1 style={{fontFamily: 'var(--roboto)'}} className="text-white mb-4">
        The Big Bloom or «How Flowering Plants Changed the World»
      </h1>
      <button className="btn blueBtn">
          Read more <img src={arrow} alt="#" />
      </button>
    </div>
  );
};

export default ImgContent;
