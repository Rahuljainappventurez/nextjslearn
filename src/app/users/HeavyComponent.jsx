"use client"
import React from "react";

const HeavyComponent = () => {
  for (let i = 0; i < 3000; i++) {
    console.log("heavy component");
  }

  return (
    <div>
      <h1>I am heavy component</h1>
      <p>i am very heavy please give me some time for load</p>
    </div>
  );
};

export default HeavyComponent;
