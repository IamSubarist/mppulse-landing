import React from "react";

export const FuncCard = ({ title, description, data }) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="max-[768px]:w-[320px] min-h-[384px] min-[768px]:min-h-[425px] z-20 shadow-xl rounded-[25px] bg-white flex flex-col px-[37px] min-[768px]:px-[38px] min-[1600px]:px-[44px] py-[37px] min-[768px]:py-[44px_36px] min-[1600px]:py-[44px_44px]">
        <div className="flex flex-col gap-[10.84px] min-[768px]:gap-[9.95px] min-[1600px]:gap-[13px] mb-[26.11px] min-[768px]:mb-[26.84px] min-[1600px]:mb-[30px]">
          <p className="text-[20px] text-[#1D1D1D] min-[768px]:text-[21.51px] min-[1600px]:text-[24px] font-bold leading-[110%] tracking-[-0.6px]">
            {title}
          </p>
          <p className="text-[11.79px] text-black opacity-50 min-[768px]:text-[12.55px] min-[1600px]:text-[14px] leading-[135%] tracking-[-0.3px]">
            {description}
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-[17px] min-[768px]:gap-[17.46px] min-[1600px]:gap-[19.5px]">
          {data.map((item) => (
            <div className="flex items-start gap-2 relative pl-1">
              <div className="absolute top-2 -left-[10px] !size-[6px] rounded-full bg-[#4C3AFF]"></div>
              <p className="font-medium text-[12.63px] min-[768px]:text-[13.44px] min-[1600px]:text-[15px] leading-[135%] text-[#1D1D1D]">
                {item}
              </p>
            </div>
          ))}
        </div>
        <button className="max-[768px]:mt-[22px] min-[1600px]:mt-[30px] min-[768px]:px-[40px] min-[1600px]:px-[40px] h-[59px] min-[768px]:h-[62px] min-[1600px]:h-[70px] rounded-[15.84px] min-[768px]:rounded-[18.81px] border border-[#4C3AFF] flex items-center justify-center gap-[6px] min-[768px]:gap-[7.51px] min-[1600px]:gap-2">
          <p className="text[13.16px] min-w-[142px] min-[768px]:text-[14.01px] min-[1600px]:text-[15.63px] font-bold text-blue-500 leading-[105%] uppercase">
            Посмотреть демо
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
              fill="#49BCFF"
            />
            <path
              d="M1.0912 12.1298C1.69386 12.1298 2.1824 11.6753 2.1824 11.1147C2.1824 10.5541 1.69386 10.0996 1.0912 10.0996C0.488548 10.0996 0 10.5541 0 11.1147C0 11.6753 0.488548 12.1298 1.0912 12.1298Z"
              fill="#49BCFF"
            />
          </svg>
        </button>
      </div>
      <div className="max-[768px]:hidden shadow-xl z-10 absolute top-0 right-1/2 translate-x-1/2 w-[calc(100%-38px)] h-[calc(100%+15px)] rounded-[25px] bg-white opacity-50"></div>
    </div>
  );
};
