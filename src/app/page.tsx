"use client";
import Hero from "@/components/Hero";
import Project from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import AOS from "aos"
import About from "@/components/About";
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back", 
      duration: 1200,
      delay: 100, 
      mirror: true, 
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  } , [])
  return (
    <div  >
      <Hero/>
      <Project/>
      <Skills/>
      <Contact/>
      <About/>
    </div>
  );
}
