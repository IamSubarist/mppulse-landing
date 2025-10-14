import React, { useState } from "react";

export const QuestionCard = ({
  number,
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className={`bg-white min-[1600px]:rounded-[25.71px] rounded-[18.94px] min-[1600px]:w-[1200px] min-[768px]:w-[708px] w-[319px] min-[1600px]:px-[28px] min-[768px]:px-[21px] px-[18px] min-[1600px]:py-[30px] min-[768px]:pt-[21px] pt-[19px] ${isOpen ? "min-[768px]:pb-[13px]" : "pb-[21px]"} shadow-sm`}>
      <div
        className="flex items-center justify-between cursor-pointer max-md:gap-5"
        onClick={onToggle}
      >
        <div className="flex min-[768px]:items-center items-start min-[1600px]:gap-3 gap-[9px] min-[1600px]:pl-[18px] min-[768px]:pl-[12px] pl-[6px] pt-[2px] min-[1600px]:text-[27.79px] min-[768px]:text-[20.47px] text-[18px] leading-[130%] max-md:leading-[105%] max-md:tracking-[-0.6px] font-bold text-black">
          <h3>{number}.</h3>
          <h3>{question}</h3>
        </div>
        <button
          className="min-[1600px]:size-[50.62px] min-[768px]:size-[37.29px] size-[34px] rounded-full flex items-center justify-center flex-shrink-0 bg-[linear-gradient(52.52deg,#4C3AFF_-35.56%,#49BCFF_138.84%)]"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          <svg
            className={`min-[1600px]:size-7 size-5 text-white transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="min-[1600px]:px-[46px] min-[768px]:pl-[20px] pl-[10px] pr-[7px] min-[1600px]:mt-7 min-[768px]:mt-[22px] mt-[19px] min-[1600px]:pt-10 min-[768px]:pt-[28px] pt-[20px] min-[1600px]:pb-[14px] min-[768px]:pb-0 pb-[44px] border-t border-gray-100">
          <p className="min-[1600px]:text-[19.71px] min-[768px]:text-[14.52px] text-[14px] text-black opacity-60 leading-[145%] tracking-[0.2px]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};
