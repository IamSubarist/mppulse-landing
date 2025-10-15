import React, { useState, useEffect } from "react";
import { BigCardItemsCardMobile } from "./BigCardItemsCardMobile";
import light from "../../assets/light.svg";

export const BigCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardStates, setCardStates] = useState([false, false, false, false]);
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

    // Анимация карточек времени с задержкой
    const cardDelays = [800, 1000, 1200, 1400]; // Задержки для каждой карточки

    cardDelays.forEach((delay, index) => {
      setTimeout(() => {
        setCardStates((prev) => {
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
      <div className=" text-blue-500 rounded-full w-[75px] h-[55px] absolute top-[-20px] min-[1600px]:left-[47.6%] min-[768px]:left-[45.2%] left-[40%] z-30">
          <img src={light} alt="icon" className="w-[70px] h-[52px]"/>
      </div>
      <div className="z-20 min-[768px]:pt-[70px] min-[1600px]:pt-[120px] shadow-xl min-[768px]:h-[605px] min-[768px]:rounded-[25px] bg-white flex flex-col items-center min-[768px]:px-[34px] min-[1600px]:px-[120px] py-[44px] gap-2 min-[768px]:gap-[10px] min-[1600px]:gap-[20px]"
      style={{
        maskImage: 'radial-gradient(ellipse 50px 50px at 50% 0%, transparent 100%, black 100%)',
        maskSize: '100% 100%',
        maskRepeat: 'no-repeat'
      }}
      >
        <div
          className={`text-[21px] min-[768px]:text-[35px] min-[1600px]:text-[47.04px] min-[360px]:w-[360px] min-[768px]:w-[500px] min-[1600px]:w-[677px] w-[677px] tracking-[-1.3px] text-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p
            className={`text-[#1D1D1D] leading-[115%] max-[768px]:w-[260px] mx-auto ${
              titleAnimation.magnetic ? "animate-pulse" : ""
            }`}
          >
            Сервис, который
            <span className="text-[#4A96FF] font-bold leading-[115%]">
              {" "}
              заменит
            </span>{" "}
            <span className="text-[#000000] font-bold leading-[115%]">
              целого менеджера-аналитика
            </span>
          </p>
        </div>
        <div
          className={`flex flex-col gap-[19.5px] transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-black opacity-50 text-[15px] max-[768px]:max-w-[290px] min-[768px]:text-[17.39px] min-[1600px]:text-[20px] leading-[135%] tracking-[-0.3px] text-center">
            Для селлеров — новый сотрудник, для менеджеров — личный помощник!{" "}
            <br />
            AI-аналитик MPpulse экономит до 6 часов в день вашего времени
          </p>
        </div>
        <div
          className={`hidden min-[768px]:flex min-[360px]:flex-col min-[1600px]:flex-row min-[768px]:gap-[10px] min-[1600px]:gap-0 items-center min-[768px]:mt-[29px] min-[1600px]:mt-[16px] transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="min-[768px]:mr-[104px] min-[1600px]:mr-0 flex min-[360px]:flex-col min-[768px]:flex-row gap-3 min-[1600px]:gap-0">
            <div
              style={{
                background:
                  "linear-gradient(90deg, #4C3AFF 0%, #49BCFF 499.17%)",
              }}
              className={`relative flex flex-col min-[768px]:gap-2 min-[1600px]:gap-[10px] min-[768px]:p-[22px] min-[1600px]:p-[26px] rounded-[20px] w-[154.45px] min-[768px]:w-[210px] min-[1600px]:w-[241px] text-white transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                cardStates[0]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
            >
              <div className="flex items-center gap-[15px] pl-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9996 0C7.17758 0 0 7.17721 0 15.9996C0 24.8221 7.17721 31.9996 15.9996 31.9996C24.8224 31.9996 32 24.8224 32 15.9996C32 7.17758 24.8224 0 15.9996 0ZM15.9996 29.7703C8.40666 29.7703 2.22929 23.593 2.22929 15.9996C2.22929 8.56234 8.15698 2.48752 15.5352 2.24118V15.9996C15.5352 16.2096 15.676 16.3938 15.8789 16.4481C15.919 16.4589 15.9595 16.4641 15.9996 16.4641C16.1624 16.4641 16.3169 16.3786 16.4016 16.2326L23.3009 4.33226C27.1829 6.77036 29.7707 11.0874 29.7707 15.9996C29.7707 23.593 23.593 29.7703 15.9996 29.7703Z"
                    fill="#4C42FF"
                  />
                  <path
                    d="M15.9996 0C7.17758 0 0 7.17721 0 15.9996C0 24.8221 7.17721 31.9996 15.9996 31.9996C24.8224 31.9996 32 24.8224 32 15.9996C32 7.17758 24.8224 0 15.9996 0ZM15.9996 29.7703C8.40666 29.7703 2.22929 23.593 2.22929 15.9996C2.22929 8.56234 8.15698 2.48752 15.5352 2.24118V15.9996C15.5352 16.2096 15.676 16.3938 15.8789 16.4481C15.919 16.4589 15.9595 16.4641 15.9996 16.4641C16.1624 16.4641 16.3169 16.3786 16.4016 16.2326L23.3009 4.33226C27.1829 6.77036 29.7707 11.0874 29.7707 15.9996C29.7707 23.593 23.593 29.7703 15.9996 29.7703Z"
                    fill="white"
                  />
                </svg>

                <p className="min-[768px]:text-[28.55px] min-[1600px]:text-[32.83px] font-bold leading-[115%]">
                  -1 час
                </p>
              </div>
              <hr />
              <div>
                <p className="min-[768px]:text-[14.78px] min-[1600px]:text-[17px] text-[17px] font-semibold leading-[115%] tracking-[-0.3px]">
                  на оцифровке, отчётах и ведении РНП
                </p>
              </div>
              <div className="rounded-[100px] h-[62px] w-[4px] bg-[#d2dbff] absolute top-1/2 -translate-y-1/2 -left-[2px]"></div>
              <div className="z-10 rounded-[100px] h-[62px] w-[4px] bg-[#d2dbff] absolute top-1/2 -translate-y-1/2 -right-[2px]"></div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(90deg, #4C3AFF -229.58%, #49BCFF 104.86%)",
              }}
              className={`relative flex flex-col min-[768px]:gap-2 min-[1600px]:gap-[10px] min-[768px]:p-[22px] min-[1600px]:p-[26px] rounded-[20px] w-[230px] min-[768px]:w-[313px] min-[1600px]:w-[360px] text-white transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                cardStates[1]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
            >
              <div className="flex items-center gap-[15px] pl-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9996 0C7.17758 0 0 7.17721 0 15.9996C0 24.8221 7.17721 31.9996 15.9996 31.9996C24.8224 31.9996 32 24.8224 32 15.9996C32 7.17758 24.8224 0 15.9996 0ZM15.9996 29.7703C8.40666 29.7703 2.22929 23.593 2.22929 15.9996C2.22929 8.56234 8.15698 2.48752 15.5352 2.24118V15.9996C15.5352 16.2096 15.676 16.3938 15.8789 16.4481C15.919 16.4589 15.9595 16.4641 15.9996 16.4641C16.1624 16.4641 16.3169 16.3786 16.4016 16.2326L23.3009 4.33226C27.1829 6.77036 29.7707 11.0874 29.7707 15.9996C29.7707 23.593 23.593 29.7703 15.9996 29.7703Z"
                    fill="#49BCFF"
                  />
                  <path
                    d="M15.9996 0C7.17758 0 0 7.17721 0 15.9996C0 24.8221 7.17721 31.9996 15.9996 31.9996C24.8224 31.9996 32 24.8224 32 15.9996C32 7.17758 24.8224 0 15.9996 0ZM15.9996 29.7703C8.40666 29.7703 2.22929 23.593 2.22929 15.9996C2.22929 8.56234 8.15698 2.48752 15.5352 2.24118V15.9996C15.5352 16.2096 15.676 16.3938 15.8789 16.4481C15.919 16.4589 15.9595 16.4641 15.9996 16.4641C16.1624 16.4641 16.3169 16.3786 16.4016 16.2326L23.3009 4.33226C27.1829 6.77036 29.7707 11.0874 29.7707 15.9996C29.7707 23.593 23.593 29.7703 15.9996 29.7703Z"
                    fill="white"
                  />
                </svg>

                <p className="min-[768px]:text-[28.55px] min-[1600px]:text-[32.83px] font-bold leading-[115%]">
                  -2 часа
                </p>
              </div>
              <hr />
              <div>
                <p className="min-[768px]:text-[14.78px] min-[1600px]:text-[17px] text-[17px] font-semibold leading-[115%] tracking-[-0.3px]">
                  на анализе всех показателей карточек товаров и анализ
                  конкурентов
                </p>
              </div>
              <div className="min-[1600px]:hidden z-10 rounded-[100px] h-[62px] w-[4px] bg-[#d2dbff] absolute top-1/2 -translate-y-1/2 -left-[2px]"></div>
              <div className="z-10 rounded-[100px] h-[62px] w-[4px] bg-[#d2dbff] absolute top-1/2 -translate-y-1/2 -right-[2px]"></div>
            </div>
          </div>
          <div className="min-[768px]:ml-[104px] min-[1600px]:ml-0 flex min-[360px]:flex-col min-[768px]:flex-row gap-3 min-[1600px]:gap-0">
            <div
              style={{
                background:
                  "linear-gradient(90deg, #4C3AFF 0%, #49BCFF 499.17%)",
              }}
              className={`relative flex flex-col min-[768px]:gap-2 min-[1600px]:gap-[10px] min-[768px]:p-[22px] min-[1600px]:p-[26px] rounded-[20px] w-[154.45px] min-[768px]:w-[210px] min-[1600px]:w-[241px] text-white transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                cardStates[2]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
            >
              <div className="flex items-center gap-[15px] pl-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9996 0C7.17758 0 0 7.17721 0 15.9996C0 24.8221 7.17721 31.9996 15.9996 31.9996C24.8224 31.9996 32 24.8224 32 15.9996C32 7.17758 24.8224 0 15.9996 0ZM15.9996 29.7703C8.40666 29.7703 2.22929 23.593 2.22929 15.9996C2.22929 8.56234 8.15698 2.48752 15.5352 2.24118V15.9996C15.5352 16.2096 15.676 16.3938 15.8789 16.4481C15.919 16.4589 15.9595 16.4641 15.9996 16.4641C16.1624 16.4641 16.3169 16.3786 16.4016 16.2326L23.3009 4.33226C27.1829 6.77036 29.7707 11.0874 29.7707 15.9996C29.7707 23.593 23.593 29.7703 15.9996 29.7703Z"
                    fill="#4C42FF"
                  />
                  <path
                    d="M15.9996 0C7.17758 0 0 7.17721 0 15.9996C0 24.8221 7.17721 31.9996 15.9996 31.9996C24.8224 31.9996 32 24.8224 32 15.9996C32 7.17758 24.8224 0 15.9996 0ZM15.9996 29.7703C8.40666 29.7703 2.22929 23.593 2.22929 15.9996C2.22929 8.56234 8.15698 2.48752 15.5352 2.24118V15.9996C15.5352 16.2096 15.676 16.3938 15.8789 16.4481C15.919 16.4589 15.9595 16.4641 15.9996 16.4641C16.1624 16.4641 16.3169 16.3786 16.4016 16.2326L23.3009 4.33226C27.1829 6.77036 29.7707 11.0874 29.7707 15.9996C29.7707 23.593 23.593 29.7703 15.9996 29.7703Z"
                    fill="white"
                  />
                </svg>

                <p className="min-[768px]:text-[28.55px] min-[1600px]:text-[32.83px] font-bold leading-[115%]">
                  -1 час
                </p>
              </div>
              <hr />
              <div>
                <p className="min-[768px]:text-[14.78px] min-[1600px]:text-[17px] text-[17px] font-semibold leading-[115%] tracking-[-0.3px]">
                  на выявление причин падения показателей
                </p>
              </div>
              <div className="min-[1600px]:hidden z-10 rounded-[100px] h-[62px] w-[4px] bg-[#d2dbff] absolute top-1/2 -translate-y-1/2 -left-[2px]"></div>
              <div className="z-10 rounded-[100px] h-[62px] w-[4px] bg-[#d2dbff] absolute top-1/2 -translate-y-1/2 -right-[2px]"></div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(90deg, #4C3AFF -229.58%, #49BCFF 104.86%)",
              }}
              className={`relative flex flex-col min-[768px]:gap-2 min-[1600px]:gap-[10px] min-[768px]:p-[22px] min-[1600px]:p-[26px] rounded-[20px] w-[230px] min-[768px]:w-[313px] min-[1600px]:w-[360px] text-white transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                cardStates[3]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
            >
              <div className="flex items-center gap-[15px] pl-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9996 0C7.17758 0 0 7.17721 0 15.9996C0 24.8221 7.17721 31.9996 15.9996 31.9996C24.8224 31.9996 32 24.8224 32 15.9996C32 7.17758 24.8224 0 15.9996 0ZM15.9996 29.7703C8.40666 29.7703 2.22929 23.593 2.22929 15.9996C2.22929 8.56234 8.15698 2.48752 15.5352 2.24118V15.9996C15.5352 16.2096 15.676 16.3938 15.8789 16.4481C15.919 16.4589 15.9595 16.4641 15.9996 16.4641C16.1624 16.4641 16.3169 16.3786 16.4016 16.2326L23.3009 4.33226C27.1829 6.77036 29.7707 11.0874 29.7707 15.9996C29.7707 23.593 23.593 29.7703 15.9996 29.7703Z"
                    fill="#49BCFF"
                  />
                  <path
                    d="M15.9996 0C7.17758 0 0 7.17721 0 15.9996C0 24.8221 7.17721 31.9996 15.9996 31.9996C24.8224 31.9996 32 24.8224 32 15.9996C32 7.17758 24.8224 0 15.9996 0ZM15.9996 29.7703C8.40666 29.7703 2.22929 23.593 2.22929 15.9996C2.22929 8.56234 8.15698 2.48752 15.5352 2.24118V15.9996C15.5352 16.2096 15.676 16.3938 15.8789 16.4481C15.919 16.4589 15.9595 16.4641 15.9996 16.4641C16.1624 16.4641 16.3169 16.3786 16.4016 16.2326L23.3009 4.33226C27.1829 6.77036 29.7707 11.0874 29.7707 15.9996C29.7707 23.593 23.593 29.7703 15.9996 29.7703Z"
                    fill="white"
                  />
                </svg>

                <p className="min-[768px]:text-[28.55px] min-[1600px]:text-[32.83px] font-bold leading-[115%]">
                  -2 часа
                </p>
              </div>
              <hr />
              <div>
                <p className="min-[768px]:text-[14.78px] min-[1600px]:text-[17px] text-[17px] font-semibold leading-[115%] tracking-[-0.3px]">
                  на анализе всех ключей в рекламе и выборе стратегии по ним
                </p>
              </div>
              <div className="min-[1600px]:hidden z-10 rounded-[100px] h-[62px] w-[4px] bg-[#d2dbff] absolute top-1/2 -translate-y-1/2 -left-[2px]"></div>
              <div className="z-10 rounded-[100px] h-[62px] w-[4px] bg-[#d2dbff] absolute top-1/2 -translate-y-1/2 -right-[2px]"></div>
            </div>
          </div>
        </div>
        <BigCardItemsCardMobile cardStates={cardStates} />
      </div>
      <div className="max-[768px]:hidden shadow-xl z-10 absolute top-0 right-1/2 translate-x-1/2 w-[calc(100%-120px)] h-[calc(100%-25px)] rounded-[25px] bg-white opacity-50 mt-[50px]"></div>
    </div>
  );
};
