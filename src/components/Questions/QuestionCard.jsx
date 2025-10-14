import React, { useState } from "react";

export const QuestionCard = ({
  number,
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="bg-white rounded-[25.71px] w-[1200px] px-[28px] py-[30px] shadow-sm">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3 pl-[18px] pt-[2px] text-[27.79px] leading-[130%] font-bold text-black">
          <h3>{number}.</h3>
          <h3>{question}</h3>
        </div>
        <button
          className="size-[50.62px] bg-[#4C51FF] rounded-full flex items-center justify-center flex-shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          <svg
            className={`w-7 h-7 text-white transition-transform duration-200 ${
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
        <div className="px-[46px] mt-7 pt-10 pb-[14px] border-t border-gray-100">
          <p className="text-[19.71px] text-black opacity-60 leading-[145%] tracking-[0.2px]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};
