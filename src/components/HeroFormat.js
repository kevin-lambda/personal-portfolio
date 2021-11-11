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
          <p>Technical Creative</p>
        </div>
        <div className="hero-text-description">
          <p>
            I live in both spaces of creative expression and technical problem
            solving. My intention is to utilize my blend of skills and
            perspectives to create a positive impact.
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
