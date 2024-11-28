"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import "../styles/app.css";
import About from "@/components/About";
import Frame from "@/components/Frame";
import Why from "@/components/Why";
import CardTable from "@/components/CardTable";
import Journey from "@/components/Journey";
import Cab from "@/components/Cab";
import Trip from "@/components/Trip";
import Rental from "@/components/Rental";
import Footer from "@/components/Footer";

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
