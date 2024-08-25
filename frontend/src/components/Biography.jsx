import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At Vasuki Veda Ayurvedic Foundation, we are a team of dedicated practitioners and wellness enthusiasts committed to reviving and sharing the ancient wisdom of Ayurveda. Our mission is to promote holistic health through natural healing methods that balance the mind, body, and spirit. By integrating time-honored Ayurvedic principles into modern living, we help individuals achieve optimal well-being, prevent illness, and lead a life of harmony and vitality. Through our personalized treatments and herbal remedies, we empower people to reconnect with their inner health and experience true wellness.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
