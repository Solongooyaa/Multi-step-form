"use client";
import { useState } from "react";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { StepFour } from "./components/StepFour";

const FormBody = ({ currentStep, setCurrentStep, onChange, form, error}) => {
  if (currentStep === 1) {
    return <StepOne setCurrentStep={setCurrentStep} onChange={onChange} form={form} error={error}/>;
  }

  if (currentStep === 2) {
    return <StepTwo setCurrentStep={setCurrentStep} onChange={onChange} form={form} error={error}/>;
  }

  if (currentStep === 3) {
    return <StepThree setCurrentStep={setCurrentStep} onChange={onChange} form={form} error={error}/>;
  }

  return  <StepFour/>
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    firstName:' ',
    lastName:' ',
    userName:' ',
    email:' ',
    phoneNumber:' ',
    password:' ',
    confirmPassword:' ',
    dateOfBirth:' ',
    image:' '

  })

  const [error, setError] = useState({
    firstName:' ',
    lastName:' ',
    userName:' ',
    email:' ',
    phoneNumber:' ',
    password:' ',
    confirmPassword:' ',
    dateOfBirth:' ',
    image:' '
  })
  const onChange = (e) =>{
    const field = e.target.id;
    const newValue = { ...form, [field]: e.target.value}
    setForm(newValue)
    console.log(newValue)
  }
  // if(e.target.value === '' && field === "firstName") {
  //   setError({...error, [field]: "it cannot be empty"});

  // }

  return (
    <>
      <div className="w-full h-screen bg-stone-300 flex justify-center items-center ">
        <FormBody currentStep={currentStep} setCurrentStep={setCurrentStep} onChange={onChange} form={form} error={error}/>
      </div>
      <div></div>
    </>
  );
}
