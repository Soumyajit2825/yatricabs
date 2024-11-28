"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import "../styles/app.css";

export default function Home() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
