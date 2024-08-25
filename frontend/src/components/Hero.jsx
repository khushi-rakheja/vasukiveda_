import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Vasuki Veda Ayurvedic Foundation is dedicated to promoting holistic health and wellness through the ancient wisdom of Ayurveda. The foundation focuses on natural healing methods, emphasizing the balance of mind, body, and spirit. By offering traditional Ayurvedic treatments, herbal remedies, and wellness education, Vasuki Veda aims to restore harmony and well-being, helping individuals lead healthier, more balanced lives.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
