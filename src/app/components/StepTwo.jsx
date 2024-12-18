export const StepTwo = ({ setCurrentStep }) => {
  return (
    <div className="w-[480px] h-[655px] bg-[#ffffff] rounded-[8px]">
      <div className="w-[416px] ml-[30px] mt-[30px] ">
        <div className="w-[416px] h-[129px]  justify-center items-center">
          <img src="/Logo.png" alt="Logo" />
          <b className="size-[26px]">Join Us!😎</b>
          <div className="w-[416px] text-[#8E8E8E] size-[18px]">
            Please provide all current information accurately.
          </div>
        </div>
      </div>

      <div className="ml-[30px] gap-[28px]">
        <div className="h-[86px]">
          {" "}
          First name*
          <input
            className="w-[416px] h-[44px] mt-[8px] rounded border-solid-[1px] "
            type="text"
            placeholder=" Placeholder..."
          />
        </div>
        <div className="h-[86px]">
          {" "}
          Last name*
          <input
            className="w-[416px] h-[44px] mt-[8px] rounded border-solid-[1px] "
            type="text"
            placeholder=" Placeholder..."
          />
        </div>
        <div className="h-[86px]">
          {" "}
          Username*
          <input
            className="w-[416px] h-[44px] mt-[8px] rounded border-solid-[1px] "
            type="text"
            placeholder=" Placeholder..."
          />
        </div>
      </div>

      <div className="ml-[30px] gap-[8px]">
        <button
          className="w-[128px] h-[44px]  mt-[100px]  bg-[#D6D8DB] rounded"
          onClick={() => setCurrentStep(1)}
        >
          Back
        </button>
        <button
          className="w-[280px] h-[44px] ml-[10px] mt-[100px]  bg-[#D6D8DB] rounded"
          onClick={() => setCurrentStep(3)}
        >
          Continue 2/3{" "}
        </button>
      </div>
    </div>
  );
};
