import React from "react";

export const RateCard768 = ({
  title,
  description,
  data,
  price,
  discount,
  selectedPeriod,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {discount && (
        <div className="z-[3] rounded-[5.57px] absolute -top-3 left-[39px] w-[207px] h-[25px] bg-[linear-gradient(90deg,_#4C3AFF_-4.57%,_#49BCFF_93.01%)] flex items-center justify-center">
          <p className="text-[13.29px] font-bold leading-[105%] text-white tracking-[-0.3px] uppercase">
            для маленьких кабинетов
          </p>
        </div>
      )}
      <div className="z-[2] shadow-xl w-[708px] rounded-[25px] bg-white flex flex-col min-[768px]:px-[34px] min-[1600px]:px-[39px] py-[36px_36px] gap-[25px]">
        <div className="flex flex-col gap-[13px]">
          <p className="text-[#1D1D1D] min-[768px]:text-[21.51px] min-[1600px]:text-[24px] font-bold leading-[110%] tracking-[-0.6px]">
            {title}
          </p>
          <p className="text-black opacity-50 min-[768px]:text-[13.44px] min-[1600px]:text-[15px] leading-[135%] tracking-[-0.3px]">
            {description}
          </p>
        </div>
        <div className="flex gap-[32px]">
          <div className="flex flex-col gap-[17.5px] pr-5">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="size-[28px] rounded-[5px] bg-[#E9F4FD] flex items-center justify-center">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5.27273L6.6667 11L14 2"
                      stroke="url(#paint0_linear_126_1079)"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_126_1079"
                        x1="-5"
                        y1="20.5"
                        x2="14"
                        y2="5.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4C3AFF" />
                        <stop offset="1" stop-color="#49BCFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <p className="min-[768px]:text-[12.55px] min-[1600px]:text-[14px] font-bold leading-[135%] tracking-[-0.5px] text-[#1D1D1D]">
                    {item.title}
                  </p>
                  <p className="min-[768px]:text-[12.55px] min-[1600px]:text-[14px] leading-[135%] tracking-[-0.5px] text-[#1D1D1D]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[1px] h-[128px] border-l border-[#E4E8F2]"></div>
          <div className="flex flex-col items-center justify-center mt-2.5 ml-[20px] gap-[18px]">
            <p className="text-[#4C3AFF] min-[768px]:text-[28.68px] min-[1600px]:text-[32px] font-bold leading-[110%] tracking-[0.3px] text-center">
              {price} руб/мес
            </p>
            <div>
              <button className="cursor-pointer min-[768px]:w-[261.69px] min-[1600px]:w-[292px] min-[768px]:h-[68.03px] min-[1600px]:h-[75.91px] rounded-[12.65px] bg-gradient-to-r from-[#4C3AFF] to-[#49BCFF] flex items-center justify-center gap-2">
                <p className="min-[768px]:text-[16.13px] min-[1600px]:text-[18px] font-bold text-white leading-[105%] uppercase">
                  Подключить
                </p>
                <svg
                  width="33"
                  height="23"
                  viewBox="0 0 33 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.58924 11.6479L10.3751 11.6987C11.1111 11.7494 11.7201 12.257 11.9231 13.0183C12.7352 15.8859 13.6995 22.7376 14.8922 22.7122C16.3894 22.6868 17.9374 9.38941 18.7749 9.38941C19.3585 9.38941 19.9676 17.4846 21.1095 17.4846C22.2515 17.4846 23.2158 12.0793 24.8399 12.0793C26.464 12.0793 32.123 11.5464 32.123 11.115C32.123 10.7344 27.809 9.92232 22.7083 9.71931C21.9977 9.69393 21.3887 9.18639 21.1857 8.45047C20.4497 5.86204 20.1198 0 18.5972 0C16.5417 0 15.3744 13.3736 14.9176 13.3736C14.3085 13.3736 13.5726 3.29898 11.5932 3.29898C9.94374 3.29898 9.81685 9.69393 7.50757 9.89694C2.15307 10.3537 2.10231 11.6479 4.58924 11.6479Z"
                    fill="#fff"
                  />
                  <path
                    d="M1.0912 12.1298C1.69386 12.1298 2.1824 11.6753 2.1824 11.1147C2.1824 10.5541 1.69386 10.0996 1.0912 10.0996C0.488548 10.0996 0 10.5541 0 11.1147C0 11.6753 0.488548 12.1298 1.0912 12.1298Z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-xl z-[1] absolute top-0 right-1/2 translate-x-1/2 w-[calc(100%-38px)] h-[calc(100%+15px)] rounded-[25px] bg-white opacity-50"></div>
    </div>
  );
};
