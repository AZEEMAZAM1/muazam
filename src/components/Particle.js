import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 100, // Fewer particles for a bubble-like effect
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#00d4ff", "#ff00ff", "#00ff00"], // Vibrant bubble colors
          },
          shape: {
            type: "circle", // Bubble shapes
          },
          opacity: {
            value: 0.6,
            random: true, // Random opacity for a natural look
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
            },
          },
          size: {
            value: 10, // Larger particles for bubbles
            random: true, // Random sizes for variety
            anim: {
              enable: true,
              speed: 3,
              size_min: 5,
            },
          },
          line_linked: {
            enable: false, // No lines for a clean bubble effect
          },
          move: {
            enable: true,
            speed: 2, // Faster movement for a hectic effect
            direction: "none", // Random movement
            random: true,
            straight: false,
            out_mode: "out", // Particles move out of the canvas
            bounce: false,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble", // Interactive bubble effect on hover
            },
            onclick: {
              enable: true,
              mode: "repulse", // Repulse effect on click
            },
          },
          modes: {
            bubble: {
              distance: 200,
              size: 20,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        retina_detect: true, // High-DPI support
      }}
    />
  );
}

export default Particle;