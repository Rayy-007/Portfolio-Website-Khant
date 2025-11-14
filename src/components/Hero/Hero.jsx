import { motion } from "framer-motion";
import React from "react";
import { minKhantImage, shadow } from "../Image";
import './hero.css';

export default function DeveloperIntro() {
  return (
    <section id="Hero" className="hero-con section-padding-1">
        <h1>Hero</h1>
        <img className="hero-img" src={minKhantImage}  alt="Photo of Min Khant" />

        <img className="shadow" src={shadow} alt="Shadow" />
    </section>
  );
}