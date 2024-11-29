"use client";
import "./journey.css";
import Image from "next/image";
import Journey1 from "../../../public/journey.svg";

export default function Journey() {
  return (
    <div className="journey-container">
      <div className="journey-content">
        <div className="journey-title">
          <span>Why choose AC Bus or AC Train for your </span>
          <span className="journey-title-green">One-way Journey</span>
          <span>?</span>
        </div>
        <div className="journey-description">
          <p>
            Our oneway cab service is cheaper than AC bus and 2 tier AC train
            ticket fares, it reduces your travel time and you travel at your own
            private space also to enjoy your journey. Our one way taxi will come
            at your doorstep and take you to your desired destination. So book
            you oneway cab from Lucknow to Gorakhpur or Varanasi to Bareilly.
          </p>
          <p className="read-more">read More....</p>
        </div>
      </div>
      <Image 
        src={Journey1} 
        alt="journey" 
        width={665} 
        height={409} 
        className="journey-image"
      />
    </div>
  );
}