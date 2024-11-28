"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import "../styles/app.css";
import About from "@/components/About";
import Frame from "@/components/Frame";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Frame />
        <Why />
      </div>
    </>
  );
}
