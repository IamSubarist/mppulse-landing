import React, { useState, useEffect } from "react";
import StepOne from "../../assets/StepOne.png";
import StepTwo from "../../assets/StepTwo.png";
import StepThree from "../../assets/StepThree.png";
import steam from "../../assets/staem.svg"
export const BigCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stepStates, setStepStates] = useState([false, false, false]);
  const [arrowStates, setArrowStates] = useState([false, false]);
  const [titleAnimation, setTitleAnimation] = useState({
    magnetic: false,
  });

  useEffect(() => {
    // Анимация появления основного контейнера
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    // Анимация мерцания заголовка
    const titleTimer = setTimeout(() => {
      setTitleAnimation((prev) => ({ ...prev, magnetic: true }));
    }, 1000);

    // Анимация шагов с задержкой
    const stepDelays = [600, 900, 1200]; // Задержки для каждого шага
    const arrowDelays = [750, 1050]; // Задержки для стрелок

    stepDelays.forEach((delay, index) => {
      setTimeout(() => {
        setStepStates((prev) => {
          const newStates = [...prev];
          newStates[index] = true;
          return newStates;
        });
      }, delay);
    });

    arrowDelays.forEach((delay, index) => {
      setTimeout(() => {
        setArrowStates((prev) => {
          const newStates = [...prev];
          newStates[index] = true;
          return newStates;
        });
      }, delay);
    });

    return () => {
      clearTimeout(timer);
      clearTimeout(titleTimer);
    };
  }, []);
  return (
    <div
      className={`relative flex flex-col items-center justify-center transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
    >
        <div className=" text-blue-500 rounded-full w-[75px] h-[55px] absolute top-[-30px] min-[1600px]:left-[48%] min-[768px]:left-[46%] left-[46%] z-30">
          <img src={steam} alt="icon" className="w-[58px] h-[58px]"/>
        </div>
      <div
        id="howItWork"
        className="shadow-xl min-[768px]:pt-[62px] min-[1600px]:pt-[120px] min-[768px]:rounded-[25px] bg-white flex flex-col items-center min-[768px]:px-[40px] min-[1600px]:px-[120px] py-[44px_44px] min-[768px]:py-[44px_42px] min-[1600px]:py-[44px_118px] gap-[10px] min-[768px]:gap-[8px] min-[1600px]:gap-[10px]"
        style={{
          maskImage: 'radial-gradient(ellipse 50px 50px at 50% 0%, transparent 100%, black 100%)',
          maskSize: '100% 100%',
          maskRepeat: 'no-repeat'
        }}
      >
        <div
          className={`text-[24px] min-[768px]:text-[30px] min-[1600px]:text-[47.04px] tracking-[-1.3px] text-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p
            className={`text-[#1D1D1D] leading-[115%] tracking-[-1px] max-[768px]:px-10 max-[768px]:pt-[6px] ${
              titleAnimation.magnetic ? "animate-pulse" : ""
            }`}
          >
            <span
              className={`text-[#000000] font-bold leading-[115%] transition-all duration-500 delay-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Шаги к получению{" "}
            </span>
            <span
              className={`transition-all duration-500 delay-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              личного AI-аналитика
            </span>
          </p>
        </div>
        <div
          className={`flex flex-col gap-[19.5px] transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="max-[768px]:px-20 text-black opacity-50 text-[15px] min-[768px]:text-[17.39px] min-[1600px]:text-[20px] leading-[135%] tracking-[-0.3px] text-center">
            Подключение за 3 шага — результат в тот же день
          </p>
        </div>
        <div
          className={`hidden min-[1600px]:flex z-[999] max-[768px]:flex-col items-center gap-[10px] min-[768px]:gap-[3px] min-[1600px]:gap-[36px] min-[768px]:mt-[6px] min-[1600px]:mt-[58px] transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div
            className={`flex min-[768px]:flex-col min-[1600px]:flex-row items-center gap-[26.11px] min-[768px]:w-[171.66px] min-[1600px]:w-[297.58px] transition-all duration-700 hover:scale-105 hover:shadow-lg ${
              stepStates[0]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <img
              className="max-[768px]:size-[80px] transition-all duration-500"
              src={StepOne}
              alt=""
            />
            <div className="flex flex-col gap-[5.42px] text-black">
              <p className="min-[768px]:text-[20px] min-[1600px]:text-[25.06px] leading-[110%] font-bold tracking-[-0.6px]">
                Подключение
              </p>
              <p className="max-[1600px]:max-w-[182px] min-[768px]:text-[15px] min-[1600px]:text-[18.8px] leading-[135%] opacity-50 tracking-[-0.3px]">
                через официальные API Wildberries
              </p>
            </div>
          </div>
          <div
            className={`transition-all duration-500 ${
              arrowStates[0] ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
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
          <div
            className={`flex min-[768px]:flex-col min-[1600px]:flex-row items-center gap-[26.11px] min-[768px]:w-[171.66px] min-[1600px]:w-[343.57px] transition-all duration-700 hover:scale-105 hover:shadow-lg ${
              stepStates[1]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <img
              className="max-[768px]:size-[80px] transition-all duration-500"
              src={StepTwo}
              alt=""
            />
            <div className="flex flex-col gap-[5.42px] text-black">
              <p className="min-[768px]:text-[20px] min-[1600px]:text-[25.06px] leading-[110%] font-bold tracking-[-0.6px]">
                Настройка
              </p>
              <p className="max-[1600px]:max-w-[182px] min-[768px]:text-[15px] min-[1600px]:text-[18.8px] leading-[135%] opacity-50 tracking-[-0.3px]">
                которая займет не более 10-20 минут времени
              </p>
            </div>
          </div>
          <div
            className={`transition-all duration-500 ${
              arrowStates[1] ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
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
          <div
            className={`flex min-[768px]:flex-col min-[1600px]:flex-row items-center gap-[26.11px] min-[768px]:w-[171.66px] min-[1600px]:w-[357.14px] transition-all duration-700 hover:scale-105 hover:shadow-lg ${
              stepStates[2]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <img
              className="max-[768px]:size-[80px] transition-all duration-500"
              src={StepThree}
              alt=""
            />
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
        <div
          className={`z-[999] max-[1600px]:flex hidden max-[768px]:flex-col items-center min-[768px]:items-start min-[1600px]:items-center gap-[10px] min-[768px]:gap-[21px] min-[1600px]:gap-[36px] max-[768px]:pl-6 mt-[20px] min-[768px]:mt-[20px] min-[1600px]:mt-[58px] transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div
            className={`flex min-[768px]:flex-col min-[1600px]:flex-row items-center gap-[26.11px] min-[768px]:w-[134px] min-[1600px]:w-[297.58px] transition-all duration-700 hover:scale-105 hover:shadow-lg ${
              stepStates[0]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <img
              className="max-[768px]:size-[80px] max-[1600px]:size-[96.85px] transition-all duration-500"
              src={StepOne}
              alt=""
            />
            <div className="flex flex-col gap-[5.42px] text-black min-[768px]:text-center min-[1600px]:text-left">
              <p className="text-[19.16px] min-[768px]:text-[20px] min-[1600px]:text-[25.06px] leading-[110%] font-bold tracking-[-0.6px]">
                Подключение
              </p>
              <p className="max-[1600px]:max-w-[182px] text-[14.3px] min-[768px]:text-[15px] min-[1600px]:text-[18.8px] leading-[135%] opacity-50 tracking-[-0.3px]">
                через официальные API Wildberries
              </p>
            </div>
          </div>
          <div
            className={`transition-all duration-500 ${
              arrowStates[0] ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <svg
              width="28"
              height="48"
              viewBox="0 0 28 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-[768px]:hidden max-[1600px]:h-[44px] max-[1600px]:mt-[28px]"
            >
              <path
                d="M23 24L25.1724 26.069L27.1429 24L25.1724 21.931L23 24ZM5.17241 0.931034C4.02975 -0.268757 2.13082 -0.315071 0.931032 0.827587C-0.268759 1.97025 -0.315074 3.86918 0.827585 5.06897L3 3L5.17241 0.931034ZM3 45L5.17241 47.069L25.1724 26.069L23 24L20.8276 21.931L0.827586 42.931L3 45ZM23 24L25.1724 21.931L5.17241 0.931034L3 3L0.827585 5.06897L20.8276 26.069L23 24Z"
                fill="#DEE6F0"
              />
            </svg>
          </div>
          <div
            className={`flex min-[768px]:flex-col min-[1600px]:flex-row items-center gap-[26.11px] min-[768px]:w-[171.66px] min-[1600px]:w-[343.57px] transition-all duration-700 hover:scale-105 hover:shadow-lg ${
              stepStates[1]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <img
              className="max-[768px]:size-[80px] max-[1600px]:size-[96.85px] transition-all duration-500"
              src={StepTwo}
              alt=""
            />
            <div className="flex flex-col gap-[5.42px] text-black min-[768px]:text-center min-[1600px]:text-left">
              <p className="text-[19.16px] min-[768px]:text-[20px] min-[1600px]:text-[25.06px] leading-[110%] font-bold tracking-[-0.6px]">
                Настройка
              </p>
              <p className="max-[1600px]:max-w-[182px] text-[14.3px] min-[768px]:text-[15px] min-[1600px]:text-[18.8px] leading-[135%] opacity-50 tracking-[-0.3px]">
                которая займет не более 10-20 минут времени
              </p>
            </div>
          </div>
          <div
            className={`transition-all duration-500 ${
              arrowStates[1] ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <svg
              width="28"
              height="48"
              viewBox="0 0 28 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-[768px]:hidden max-[1600px]:h-[44px] max-[1600px]:mt-[28px]"
            >
              <path
                d="M23 24L25.1724 26.069L27.1429 24L25.1724 21.931L23 24ZM5.17241 0.931034C4.02975 -0.268757 2.13082 -0.315071 0.931032 0.827587C-0.268759 1.97025 -0.315074 3.86918 0.827585 5.06897L3 3L5.17241 0.931034ZM3 45L5.17241 47.069L25.1724 26.069L23 24L20.8276 21.931L0.827586 42.931L3 45ZM23 24L25.1724 21.931L5.17241 0.931034L3 3L0.827585 5.06897L20.8276 26.069L23 24Z"
                fill="#DEE6F0"
              />
            </svg>
          </div>
          <div
            className={`flex min-[768px]:flex-col min-[1600px]:flex-row items-center gap-[26.11px] min-[768px]:w-[182.66px] min-[1600px]:w-[357.14px] transition-all duration-700 hover:scale-105 hover:shadow-lg ${
              stepStates[2]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <img
              className="max-[768px]:size-[80px] max-[1600px]:size-[96.85px] transition-all duration-500"
              src={StepThree}
              alt=""
            />
            <div className="flex flex-col gap-[5.42px] text-black min-[768px]:text-center min-[1600px]:text-left">
              <p className="text-[19.16px] min-[768px]:text-[20px] min-[1600px]:text-[25.06px] leading-[110%] font-bold tracking-[-0.6px]">
                Делегирование
              </p>
              <p className="max-[1600px]:max-w-[182px] text-[14.3px] min-[768px]:text-[15px] min-[1600px]:text-[18.8px] leading-[135%] opacity-50 tracking-[-0.3px]">
                теперь у вас есть аналитик, который за всем следит
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden min-[768px]:block shadow-xl -z-10 absolute top-0 right-1/2 translate-x-1/2 w-[calc(100%-120px)] h-[calc(100%-25px)] rounded-[25px] bg-white opacity-50 mt-[50px]"></div>
    </div>
  );
};
