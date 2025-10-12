import React from "react";
import { Hero } from "../../sections/Hero";
import { KeyFunctions } from "../../sections/KeyFunctions";
import { StepsAndRates } from "../../sections/StepsAndRates";

export const Home = () => {
  return (
    <div>
      <Hero />
      <KeyFunctions />
      <StepsAndRates />
    </div>
  );
};
