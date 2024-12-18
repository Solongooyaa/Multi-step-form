import { FormHeader } from "./FormHeader";

export const StepTwo = ({ setCurrentStep, onChange, form, type, }) => {
  return (
    <div className="w-[480px] h-[655px] bg-[#ffffff] rounded-[8px]">
        <div className="ml-[30px]">
        
        <FormHeader/>
     
      <label htmlFor="email">Email*</label>
          
          <input id="email"
            className="w-[416px] h-[44px] mt-[8px] rounded border border-solid border-[#0CA5E9] "
            type="email"
            placeholder=" Enter your Email"
            onChange={onChange}
            value={form.email}
          />
       
       <label htmlFor="phoneNumber">Phone number*</label>
          
          <input id="phoneNumber"
            className="w-[416px] h-[44px] mt-[8px] rounded border border-solid border-[#0CA5E9] "
            type="number"
            placeholder=" Enter your Number"
            onChange={onChange}
            value={form.phoneNumber}
          />
        
        <label htmlFor="password">Password*</label>
          
          <input id="password"
            className="w-[416px] h-[44px] mt-[8px] rounded border border-solid border-[#0CA5E9] "
            type="password"
            placeholder=" Enter your Password"
            onChange={onChange}
            value={form.password}
          />
        
        <label htmlFor="confirmPassword">Confirm password*</label>
          
          <input id="confirmPassword"
            className="w-[416px] h-[44px] mt-[8px] rounded border border-solid border-[#0CA5E9] "
            type="password"
            placeholder=" Enter your Password"
            onChange={onChange}
            value={form.confirmPassword}
          />
        </div>
 
      <div className="ml-[30px] gap-[8px] h-[44px]">
        <button
          className="w-[128px] h-[44px]  mt-[110px]  bg-[#ffffff] rounded border border-solid border-[#D6D8Db]"
          onClick={() => setCurrentStep(1)}
        >
          {"< Back"}
        </button>
        <button
          className="w-[280px] h-[44px] ml-[10px] mt-[50px]  bg-[#D6D8DB] rounded"
          onClick={() => setCurrentStep(3)}
        >
          {"Continue 2/3 >"}
        </button>
      </div>
    </div>
  );
};
