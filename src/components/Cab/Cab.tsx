"use client";
import "./cab.css";
import Image from "next/image";
import CabImage from "../../../public/red.svg";

export default function Cab() {
  return (
    <div className="cab-container">
      <div className="cab-title">Why Choose One way Cab?</div>
      
      <div className="features-container">
        <div className="features-list">
          <div className="features-box" />
          <div className="feature-item feature-1">
            <ul>
              <li>Instant Booking & Confirmation</li>
            </ul>
          </div>
          <div className="feature-item feature-2">
            <ul>
              <li>Confirmed Booking Immediately</li>
            </ul>
          </div>
          <div className="feature-item feature-3">
            <ul>
              <li>No Return Fare for One-Way Trip</li>
            </ul>
          </div>
          <div className="feature-item feature-4">
            <ul>
              <li>Clean & Professional Cab Services</li>
            </ul>
          </div>
          <div className="feature-item feature-5">
            <ul>
              <li>Transparent Billing with GPS based billing system</li>
            </ul>
          </div>
        </div>

        <Image className="cab-image" src={CabImage} alt="cab service" />

        <div className="features-list">
          <div className="features-box" />
          <div className="feature-item feature-1">
            <ul>
              <li>Pick-up from your house</li>
            </ul>
          </div>
          <div className="feature-item feature-2">
            <ul>
              <li>Dedicated Cab just for you</li>
            </ul>
          </div>
          <div className="feature-item feature-3">
            <ul>
              <li>Drop to your desired destination</li>
            </ul>
          </div>
          <div className="feature-item feature-4">
            <ul>
              <li>Completed more than 20,000+ Oneway Trips</li>
            </ul>
          </div>
          <div className="feature-item feature-5">
            <ul>
              <li>Multiple Payment Option including Credit Card.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="description">
        <span>Discover affordable travel with our seamless </span>
        <span className="description-highlight">intercity car rentals</span>
        <span> in India – where excellence meets affordability with standardized rates in every city. Unleash your journey!</span>
      </div>
    </div>
  );
}