import React, { useState } from "react";

export const PeriodToggle = ({ onPeriodChange }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("1 месяц");

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    if (onPeriodChange) {
      onPeriodChange(period);
    }
  };

  return (
    <div className="flex items-center w-[250px] min-[768px]:w-[304.94px] min-[1600px]:w-[380px] h-[52px] min-[768px]:h-[56px] min-[1600px]:h-[70px] border-3 border-white rounded-[13.93px] min-[768px]:rounded-[15.09px] min-[1600px]:rounded-[18.81px] uppercase mb-[30px] min-[768px]:mb-[40px] min-[1600px]:mb-[36px]">
      <button
        onClick={() => handlePeriodChange("1 месяц")}
        className={`uppercase h-full w-1/2 flex items-center justify-center font-bold text-[14px] min-[768px]:text-[19.26px] min-[1600px]:text-[24px] leading-[105%] transition-all duration-200 ${
          selectedPeriod === "1 месяц"
            ? "bg-white text-[#467FFA] rounded-[10.93px] min-[768px]:rounded-[12px] min-[1600px]:rounded-[14.81px]"
            : "bg-transparent text-white hover:bg-white/20"
        }`}
      >
        1 месяц
      </button>
      <button
        onClick={() => handlePeriodChange("6 месяцев")}
        className={`uppercase h-full w-1/2 flex items-center justify-center font-bold text-[14px] min-[768px]:text-[19.26px] min-[1600px]:text-[24px] leading-[105%] relative transition-all duration-200 ${
          selectedPeriod === "6 месяцев"
            ? "bg-white text-[#467FFA] rounded-[10.93px] min-[768px]:rounded-[12px] min-[1600px]:rounded-[14.81px]"
            : "bg-transparent text-white hover:bg-white/20"
        }`}
      >
        6 месяцев
        <div className="rounded-[5.57px] absolute -top-2 min-[768px]:-top-3 min-[768px]:right-[26px] min-[1600px]:right-[34px] w-[69.49px] min-[768px]:w-[93.89px] min-[1600px]:w-[117px] h-[14.55px] min-[768px]:h-[19.67px] min-[1600px]:h-[24.51px] bg-[#3DBB36] flex items-center justify-center">
          <p className="text-[9.92px] min-[768px]:text-[13.41px] min-[1600px]:text-[16.71px] font-bold leading-[105%] text-white tracking-[-0.3px]">
            25% скидка
          </p>
        </div>
      </button>
    </div>
  );
};
