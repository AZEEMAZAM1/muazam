import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "ACCOUNTANT ",
          "FINANCIAL ANALYST",
          "TAX CONSULTANT",
          "AUDITOR",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
