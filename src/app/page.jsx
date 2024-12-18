"use client";
import { useState } from "react";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";

const FormBody = ({ currentStep, setCurrentStep }) => {
  if (currentStep === 1) {
    return <StepOne setCurrentStep={setCurrentStep} />;
  }

  if (currentStep === 2) {
    return <StepTwo setCurrentStep={setCurrentStep} />;
  }

  if (currentStep === 3) {
    return <StepThree setCurrentStep={setCurrentStep} />;
  }

  return (
    <div>
      {StepOne}{" "}
      <button onClick={() => setCurrentStep(1)}>{" <StepOne /> "}</button>
    </div>
  );
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center ">
        <FormBody currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
      <div></div>
    </>
  );
}
