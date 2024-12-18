import { FormHeader } from "./FormHeader";

export const StepOne = ({ setCurrentStep, onChange, form, type }) => {

    const validateFirstName = () => {
        return form.firstName === ''
    }
    const validateLastName = () => {
        return form.lastName === ''
    }
    const validate = validateFirstName() && validateLastName()
  return (
    <div className="w-[480px] h-[655px]  bg-[#ffffff] rounded-[8px] ">
        <div className="ml-[30px]">
        
<FormHeader/>

      <form className="flex flex-col">
      <label htmlFor="firstName">First name*</label>
          <input id="firstName"
            className="w-[416px] h-[44px] mt-[8px] rounded border-solid border border-[#0CA5E9]  "
            type="text"
            placeholder=" Enter your Firstname"
            onChange={onChange}
            value={form.firstName}
          />
       {form.firstName === '' && <p className="text-red-500">First name cannot contain special characters or numbers</p>}
       <label htmlFor="lastName">Last name*</label>
          <input id="lastName"
            className="w-[416px] h-[44px] mt-[8px] rounded border border-solid border-[#0CA5E9] "
            type="text"
            placeholder=" Enter your Lastname"
            onChange={onChange}
            value={form.lastName}

          />
     {form.lastName === '' && <p className="text-red-500">Last name cannot contain special characters or numbers</p>}
     <label htmlFor="userName">Username*</label>
          <input id="userName"
            className="w-[416px] h-[44px] mt-[8px] rounded border border-solid border-[#0CA5E9] "
            type="text"
            placeholder=" Enter your Username"
            onChange={onChange}
            value={form.userName}
          />
      </form>
        
      </div> 

      <button
        className="w-[416px] h-[44px]  ml-[30px] mt-[180px] gap-[8px] bg-[#D6D8DB] rounded"
        disabled={validate}
        onClick={() => setCurrentStep(2)}
      >
        {"Continue 1/3 >"}
      </button>
    </div>
  );
};
