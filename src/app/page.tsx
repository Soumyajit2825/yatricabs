"use client"

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import "../styles/app.css";
import About from "@/components/About/About";
import Frame from "@/components/Frame/Frame";
import Why from "@/components/Why/Why";
import CardTable from "@/components/Car/CardTable";
import Journey from "@/components/Journey/Journey";
import Cab from "@/components/Cab/Cab";
import Trip from "@/components/Trip/Trip";
import Rental from "@/components/Rental/Rental";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Frame />
        <Why />
        <CardTable />
        <Journey />
        <Cab />
        <Trip />
        <Rental />
        <Footer />
      </div>
    </>
  );
}
