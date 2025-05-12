import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MEDICAL LAB TECHNICIAN",
          "MEDICAL Billing",
          "REMOTE billing Assistant",
          "PROGRAM SUPPORT SPECIALIST",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
