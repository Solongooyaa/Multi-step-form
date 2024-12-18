import { FormHeader } from "./FormHeader";

export const StepThree = ({ setCurrentStep, onChange, form }) => {
  return (
    <div className="w-[480px] h-[655px] bg-[#ffffff] rounded-[8px]">
      <div className=" ml-[30px] ">
        
        <FormHeader/>
   
      <label htmlFor="dateOfBirth">Date of birth*</label>
          
          <input id="dateOfBirth"
            className="w-[416px] h-[44px] mt-[8px] rounded border border-solid border-[#0CA5E9] "
            type="date"
            placeholder=" --/--/--"
            onChange={onChange}
            value={form.dateOfBirth}
          />
    
    <label htmlFor="image">Profile image*</label>
          
          <input id="image"
            className="w-[416px] h-[208px] mt-[8px] bg-[#7F7F800D] opacity-5% rounded border border-solid border-[#0CA5E9] "
            type="url"
            placeholder="  Add image"
            onChange={onChange}
            value={form.image}
          />
        
      </div>

      <div className="ml-[30px] gap-[8px] ">
        <button
          className="w-[128px] h-[44px] mt-[100px]  bg-[#ffffff] border rounded border-solid border-[#D6D8Db]"
          onClick={() => setCurrentStep(2) }
        >
         {"< Back"}
        </button>
        <button
          className="w-[280px] h-[44px] ml-[10px] mt-[100px]  bg-[#D6D8DB] rounded"
          onClick={() => setCurrentStep(4)}
        >
         {" Continue 3/3 >"}
        </button>
      </div>
    </div>
  );
};
