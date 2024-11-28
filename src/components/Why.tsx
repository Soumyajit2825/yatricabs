"use client";
import "../styles/why.css";
import Image from "next/image";
import Car from "../../public/car.svg";
import Vector from "../../public/Vector.svg";
import People from "../../public/people.svg";
import Order from "../../public/Order.svg";
import Paid from "../../public/paid.svg";

export default function Why() {
  return (
    <div className="why-container">
      <Image
        className="why-image"
        src={Car}
        alt="car rental"
        width={580}
        height={388}
      />
      <div className="why-content">
        <div className="why-title">
          <span>Why </span>
          <span className="why-title-green"> Yatri</span>
          <span className="question"> ?</span>
        </div>

        <div className="feature-container">
          <Image className="img" src={Vector} alt="fast response" width={41} height={72} />
          <div className="feature-content">
            <div className="feature-title">Fast response time</div>
            <div className="feature-description">
              Experience the Best Car Rental Service with Driver for Local or
              Outstation Trips. Enjoy prompt response times and seamless car
              hire service, ensuring you get on the road quickly
            </div>
          </div>
        </div>

        <div className="feature-container">
          <Image src={People} alt="vast fleet" width={66} height={62} />
          <div className="feature-content">
            <div className="feature-title">Vast fleet</div>
            <div className="feature-description">
              We offer a wide range of rental cars including Sedans, SUVs, MUVs,
              premium Sedans, and Tempo Travellers to meet all your needs.
            </div>
          </div>
        </div>

        <div className="feature-container">
          <Image src={Order} alt="easy to order" width={59} height={68} />
          <div className="feature-content">
            <div className="feature-title">Easy to order</div>
            <div className="feature-description">
              Easily Book a Cab Online through our user-friendly website, mobile
              application, or by calling our customer support team.
            </div>
          </div>
        </div>

        <div className="feature-container">
          <Image src={Paid} alt="great tariffs" width={60} height={60} />
          <div className="feature-content">
            <div className="feature-title">Great tariffs</div>
            <div className="feature-description">
              Rent a Car at the Lowest Rates! Our car hire tariffs are highly
              competitive compared to other operators. Book online cabs at the
              best prices with Yatri Car Rental.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
