import React from "react";
import './mar.css'

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span>Order by 28 March for Eid Orders </span> 
        <span>Free Delivery on orders over 100£</span>
        <span>Delivering in Leicester</span>
      </div>
    </div>
  );
};

export default Marquee;