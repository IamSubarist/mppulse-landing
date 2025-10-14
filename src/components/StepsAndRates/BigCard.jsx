import React from "react";
import StepOne from "../../assets/StepOne.png";
import StepTwo from "../../assets/StepTwo.png";
import StepThree from "../../assets/StepThree.png";

export const BigCard = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className=" shadow-xl min-[768px]:pt-[70px] min-[1600px]:pt-[120px] min-[768px]:rounded-[25px] bg-white flex flex-col items-center min-[768px]:px-[64px] min-[1600px]:px-[120px] py-[44px_44px] min-[768px]:py-[44px_20px] min-[1600px]:py-[44px_44px] gap-[10px]">
        <div className="text-[24px] min-[768px]:text-[30px] min-[1600px]:text-[47.04px] tracking-[-1.3px] text-center">
          <p className="text-[#1D1D1D] leading-[115%] tracking-[-1px]">
            <span className="text-[#000000] font-bold leading-[115%]">
              Шаги к получению{" "}
            </span>
            личного AI-аналитика
          </p>
        </div>
        <div className="flex flex-col gap-[19.5px]">
          <p className="text-black opacity-50 text-[15px] min-[768px]:text-[17.39px] min-[1600px]:text-[20px] leading-[135%] tracking-[-0.3px] text-center">
            Подключение за 3 шага — результат в тот же день
          </p>
        </div>
        <div className="z-[999] flex max-[768px]:flex-col items-center gap-[10px] min-[768px]:gap-[3px] min-[1600px]:gap-[36px] min-[768px]:mt-[6px] min-[1600px]:mt-[58px]">
          <div className="flex min-[768px]:flex-col min-[1600px]:flex-row items-center gap-[26.11px] min-[768px]:w-[171.66px] min-[1600px]:w-[297.58px]">
            <img className="max-[768px]:size-[80px]" src={StepOne} alt="" />
            <div className="flex flex-col gap-[5.42px] text-black">
              <p className="min-[768px]:text-[20px] min-[1600px]:text-[25.06px] leading-[110%] font-bold tracking-[-0.6px]">
                Подключение
              </p>
              <p className="max-[1600px]:max-w-[182px] min-[768px]:text-[15px] min-[1600px]:text-[18.8px] leading-[135%] opacity-50 tracking-[-0.3px]">
                через официальные API Wildberries
              </p>
            </div>
          </div>
          <div>
            <svg
              width="28"
              height="48"
              viewBox="0 0 28 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-[768px]:hidden"
            >
              <path
                d="M23 24L25.1724 26.069L27.1429 24L25.1724 21.931L23 24ZM5.17241 0.931034C4.02975 -0.268757 2.13082 -0.315071 0.931032 0.827587C-0.268759 1.97025 -0.315074 3.86918 0.827585 5.06897L3 3L5.17241 0.931034ZM3 45L5.17241 47.069L25.1724 26.069L23 24L20.8276 21.931L0.827586 42.931L3 45ZM23 24L25.1724 21.931L5.17241 0.931034L3 3L0.827585 5.06897L20.8276 26.069L23 24Z"
                fill="#DEE6F0"
              />
            </svg>
          </div>
          <div className="flex min-[768px]:flex-col min-[1600px]:flex-row items-center gap-[26.11px] min-[768px]:w-[171.66px] min-[1600px]:w-[343.57px]">
            <img className="max-[768px]:size-[80px]" src={StepTwo} alt="" />
            <div className="flex flex-col gap-[5.42px] text-black">
              <p className="min-[768px]:text-[20px] min-[1600px]:text-[25.06px] leading-[110%] font-bold tracking-[-0.6px]">
                Настройка
              </p>
              <p className="max-[1600px]:max-w-[182px] min-[768px]:text-[15px] min-[1600px]:text-[18.8px] leading-[135%] opacity-50 tracking-[-0.3px]">
                которая займет не более 10-20 минут времени
              </p>
            </div>
          </div>
          <div>
            <svg
              width="28"
              height="48"
              viewBox="0 0 28 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-[768px]:hidden"
            >
              <path
                d="M23 24L25.1724 26.069L27.1429 24L25.1724 21.931L23 24ZM5.17241 0.931034C4.02975 -0.268757 2.13082 -0.315071 0.931032 0.827587C-0.268759 1.97025 -0.315074 3.86918 0.827585 5.06897L3 3L5.17241 0.931034ZM3 45L5.17241 47.069L25.1724 26.069L23 24L20.8276 21.931L0.827586 42.931L3 45ZM23 24L25.1724 21.931L5.17241 0.931034L3 3L0.827585 5.06897L20.8276 26.069L23 24Z"
                fill="#DEE6F0"
              />
            </svg>
          </div>
          <div className="flex min-[768px]:flex-col min-[1600px]:flex-row items-center gap-[26.11px] min-[768px]:w-[171.66px] min-[1600px]:w-[357.14px]">
            <img className="max-[768px]:size-[80px]" src={StepThree} alt="" />
            <div className="flex flex-col gap-[5.42px] text-black">
              <p className="min-[768px]:text-[20px] min-[1600px]:text-[25.06px] leading-[110%] font-bold tracking-[-0.6px]">
                Делегирование
              </p>
              <p className="max-[1600px]:max-w-[182px] min-[768px]:text-[15px] min-[1600px]:text-[18.8px] leading-[135%] opacity-50 tracking-[-0.3px]">
                теперь у вас есть аналитик, который за всем следит
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden min-[768px]:block shadow-xl -z-10 absolute top-0 right-1/2 translate-x-1/2 w-[calc(100%-120px)] h-[calc(100%+25px)] rounded-[25px] bg-white opacity-50"></div>
    </div>
  );
};
