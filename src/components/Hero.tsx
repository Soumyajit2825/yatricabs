"use client";

import "../styles/hero.css";
import HeroImg from "../../public/heroimg.svg";
import Image from "next/image";
import BookingForm from "./Booking";
import DownloadBanner from "./Download";

const Hero = () => (
  <div className="hero">
    <Image src={HeroImg} alt="hero" />
    <div className="hero-content">
      <div className="hero-left">
        <h1 className="hero-text">
          <span className="hero-text-white">India&apos;s</span>
          <span className="hero-text-green"> Leading One-Way Inter-City</span>
          <span className="hero-text-white"> Cab Service Provider</span>
        </h1>
      </div>
      <div className="hero-right">
        <BookingForm />
      </div>
    </div>
    <div className="download">
      <DownloadBanner />
    </div>
  </div>
);

export default Hero;
