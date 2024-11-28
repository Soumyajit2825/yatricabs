"use client";
import "../styles/about.css";
import Image from "next/image";
import Location from "../../public/location.svg";
import Driving from "../../public/driving.svg";
import Hand from "../../public/hand.svg";

export default function About() {
  return (
    <div className="frame-container">
      <div className="frame-section">
        <Image className="frame-img" alt="" src={Hand} />
        <div className="frame-section-content">
          <div className="frame-title">Return Fare, Not Fair!</div>
          <div className="frame-description">
            Why Pay for Return Journey when you are travelling one-way? Now get
            discounted AC Taxi at just half of the round trip cost for your
            oneway travel.
          </div>
        </div>
      </div>
      <div className="frame-divider" />
      <div className="frame-center">
        <Image className="frame-img" alt="" src={Location} />
        <div className="frame-section-content">
          <div className="frame-center-title">GPS Based Billing System</div>
          <div className="frame-center-description">
            Since the GPS data captures the actual distance and time traveled,
            it reduce the chance of Kilometer tampering or discrepancies in
            billing.
          </div>
        </div>
      </div>
      <div className="frame-divider" />
      <div className="frame-right">
        <Image className="frame-img" alt="" src={Driving} />
        <div className="frame-section-content">
          <div className="frame-right-title">Now available routes are!</div>
          <div className="frame-right-description">
            Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly
          </div>
        </div>
      </div>
    </div>
  );
}
