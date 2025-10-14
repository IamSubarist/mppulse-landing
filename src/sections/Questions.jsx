import React, { useState } from "react";
import { QuestionCard } from "../components/Questions/QuestionCard";
import BACK from "../assets/backCircle.svg";

export const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Как подключается кабинет к сервису?",
      answer:
        "Уменьшение или увеличение мощности двигателя Увеличение или ограничение скорости автомобиля Устранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей",
    },
    {
      id: 2,
      question: "Почему сервис такой недорогой?",
      answer:
        "Уменьшение или увеличение мощности двигателя Увеличение или ограничение скорости автомобиля Устранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей",
    },
    {
      id: 3,
      question: "Можно ли настроить что именно отслеживает сервис?",
      answer:
        "Уменьшение или увеличение мощности двигателя Увеличение или ограничение скорости автомобиля Устранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей",
    },
    {
      id: 4,
      question: "Можно ли настроить что именно отслеживает сервис?",
      answer:
        "Уменьшение или увеличение мощности двигателя Увеличение или ограничение скорости автомобиля Устранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей",
    },
    {
      id: 5,
      question: "Почему сервис такой недорогой?",
      answer:
        "Уменьшение или увеличение мощности двигателя Увеличение или ограничение скорости автомобиля Устранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей в автомобиле Удаление существующих ограничителейУстранение/удаление неисправностей",
    },
  ];

  const handleToggle = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <div className="questions-section min-[1600px]:px-[360px] px-0 relative pb-[130px] bg-[#F7F7F7]">
      <div
        className="absolute min-[1600px]:bottom-[125px] min-[768px]:bottom-[50px] bottom-[207px] left-1/2 -translate-x-1/2 w-full min-[1600px]:h-[1500px] min-[768px]:h-[1228px] h-[687px] bg-cover bg-no-repeat bg-center z-0 pointer-events-none"
        style={{ backgroundImage: `url(${BACK})` }}
      />
      <div className="pt-[40px] min-[768px]:pt-[138px] flex flex-col items-center justify-center">
        <p className="min-[1600px]:text-[47.04px] min-[768px]:text-[30px] text-[24px] font-bold leading-[115%] min-[1600px]:tracking-[-1.5px] tracking-[-0.9px] min-[1600px]:mb-[56px] min-[768px]:mb-[39px] mb-[20px] text-center z-10">
          <span className="text-[#4C51FF]">Ответы</span> на часто{" "}
          <br className="md:hidden" /> задаваемые вопросы
        </p>
        <div className="relative flex flex-col min-[1600px]:pb-[312px] min-[768px]:pb-[233px] pb-[124px] ">
          <div className="w-full flex flex-col min-[1600px]:gap-[18.5px] min-[768px]:gap-[14.56px] gap-[10px] max-[1600px]:items-center bg-cover bg-no-repeat bg-center z-10">
            {questions.map((q, index) => (
              <QuestionCard
                key={q.id}
                number={index + 1}
                question={q.question}
                answer={q.answer}
                isOpen={openQuestion === q.id}
                onToggle={() => handleToggle(q.id)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[10px] min-[1600px]:mb-[43px] min-[768px]:mb-[27px] mb-[29px] z-10">
          <p className="min-[1600px]:text-[47.04px] min-[768px]:text-[35px] text-[24px] font-bold leading-[115%] min-[1600px]:tracking-[-1.6px] tracking-[-1.2px] text-center">
            <span className="font-normal">Воспользуйтесь </span>{" "}
            <br className="md:hidden" />
            <span className="text-[#4A96FF]">бесплатным</span> периодом
          </p>
          <p className="text-black opacity-50 min-[1600px]:text-[20px] min-[768px]:text-[17px] text-[15px] leading-[135%] tracking-[-0.3px] text-center max-md:px-10">
            за который сервис оптимизирует вашу рекламу и оцифрует ваш кабинет
          </p>
        </div>
        <div className="flex items-center justify-center gap-[14.15px] bg-[linear-gradient(90deg,_#4C3AFF_-4.57%,_#49BCFF_93.01%)] min-[1600px]:w-[453px] min-[1600px]:h-[105px] min-[768px]:w-[333.71px] min-[768px]:h-[77.35px] w-[320.23px] h-[83.25px] min-[768px]:rounded-[17.57px] rounded-[13.87px] z-10">
          <svg
            viewBox="0 0 54 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-60 min-[1600px]:w-[54px] min-[1600px]:h-[39px] w-[35px] h-[27px] z-10"
          >
            <path
              d="M7.69751 19.6824L17.3405 19.767C18.567 19.8516 19.5821 20.6975 19.9205 21.9663C21.2739 26.7455 22.881 38.1649 24.8688 38.1226C27.3642 38.0803 29.9441 15.9183 31.3398 15.9183C32.3126 15.9183 33.3276 29.41 35.2309 29.41C37.1341 29.41 38.7413 20.4014 41.4481 20.4014C44.1549 20.4014 53.5864 19.5133 53.5864 18.7943C53.5864 18.1599 46.3965 16.8065 37.8954 16.4681C36.7111 16.4258 35.6961 15.5799 35.3577 14.3534C34.1312 10.0394 33.5814 0.269531 31.0438 0.269531C27.618 0.269531 25.6724 22.5584 24.9111 22.5584C23.8961 22.5584 22.6696 5.76774 19.3706 5.76774C16.6215 5.76774 16.4101 16.4258 12.5613 16.7642C3.6373 17.5255 3.55271 19.6824 7.69751 19.6824Z"
              fill="white"
            />
            <path
              d="M2.07255 20.4831C3.07695 20.4831 3.89118 19.7257 3.89118 18.7914C3.89118 17.857 3.07695 17.0996 2.07255 17.0996C1.06814 17.0996 0.253906 17.857 0.253906 18.7914C0.253906 19.7257 1.06814 20.4831 2.07255 20.4831Z"
              fill="white"
            />
          </svg>
          <div className="flex flex-col gap-[4px] text-white leading-[105%]">
            <p className="uppercase min-[1600px]:text-[19.67px] text-[14.49px] font-bold">
              получить 3 бесплатных дня
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
