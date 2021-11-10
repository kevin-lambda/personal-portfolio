import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "normalize.css"
import "../assets/css/main.css"

const HeroFormat = () => {
  return (
    <main>
      <div>
        <div className="hero-text-name">
          <h1>Kevin Lam</h1>
          <p>technical creative</p>
        </div>
        <div className="hero-text-description">
          <p>
            description text here long stuff I'm baby direct trade vape
            listicle, williamsburg occupy waistcoat man bun chambray literally
            ennui thundercats blue bottle aesthetic. Hexagon everyday carry
            irony polaroid shabby chic woke kale chips. Yr food truck
            intelligentsia direct trade, seitan beard vaporware keytar 8-bit.
            Meggings trust fund hot chicken pitchfork, yuccie kale chips photo
            booth crucifix green juice cred intelligentsia cornhole shaman
            gochujang drinking vinegar. Pinterest vaporware activated charcoal
            tote bag, tofu fanny pack iPhone heirloom vice cornhole glossier
            chartreuse.
          </p>
        </div>
      </div>

      <StaticImage
        src="../assets/images/hero_main.jpg"
        alt="hero"
        loading="eager"
        placeholder="blurred"
        layout="constrained"
        className="hero-image"
      />
    </main>
  )
}

export default HeroFormat
