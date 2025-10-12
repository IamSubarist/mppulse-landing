import React from "react";
import { BigCard } from "../components/StepsAndRates/BigCard";
import { RateCard } from "../components/StepsAndRates/RateCard";

export const StepsAndRates = () => {
  return (
    <div className="bg-blue-600 steps-and-rates-section px-[360px] relative h-[1890px]">
      <div className="absolute -top-[148px] left-1/2 -translate-x-1/2">
        <BigCard />
      </div>
      <div className="pt-[470px] flex flex-col items-center justify-center">
        <p className="text-[47.04px] font-bold leading-[115%] tracking-[-1.5px] mb-[38px] text-center text-white">
          Тарифы
        </p>
        <div className="flex items-center w-[380px] h-[70px] border-3 border-white rounded-[18.81px] uppercase mb-[36px]">
          <div className="h-full rounded-[14.81px] bg-white w-1/2 flex items-center justify-center text-[#467FFA] font-bold text-[24px] leading-[105%]">
            1 месяц
          </div>
          <div className="h-full w-1/2 flex items-center justify-center text-white font-bold text-[24px] leading-[105%] relative">
            6 месяцев
            <div className="rounded-[5.57px] absolute -top-3 right-[34px] w-[117px] h-[24.51px] bg-[#3DBB36] flex items-center justify-center">
              <p className="text-[16.71px] font-bold leading-[105%] text-white tracking-[-0.3px]">
                25% скидка
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[30px]">
          <RateCard
            discount
            title="Тариф «Поддержка»"
            description="Если оборот вашего кабинета составляет менее 1 млн руб/мес"
            data={[
              {
                title: "Оцифровка кабинета и ведение РНП",
                description: "без ограничений по кол-ву артикулов",
              },
              {
                title: "Мониторинг и анализ всех показателей",
                description: "до 50 артикулов",
              },
              {
                title: "Оптимизация рекламных кампаний",
                description: "до 50 артикулов",
              },
            ]}
            price={999}
          />
          <RateCard
            title="Тариф «Оптимум»"
            description="Без привязки к обороту кабинета составляет менее 800 тыс руб/мес"
            data={[
              {
                title: "Оцифровка кабинета и ведение РНП",
                description: "без ограничений по кол-ву артикулов",
              },
              {
                title: "Мониторинг и анализ всех показателей",
                description: "до 50 артикулов",
              },
              {
                title: "Оптимизация рекламных кампаний",
                description: "до 50 артикулов",
              },
            ]}
            price={1999}
          />
          <RateCard
            title="Тариф «Максимум»"
            description="AI-менеджер по рекламе оптимизирует все ваши . рекламные кампании и уменьшит ДРР"
            data={[
              {
                title: "Оцифровка кабинета и ведение РНП",
                description: "без ограничений по кол-ву артикулов",
              },
              {
                title: "Мониторинг и анализ всех показателей",
                description: "без ограничений по кол-ву артикулов",
              },
              {
                title: "Оптимизация рекламных кампаний",
                description: "без ограничений по кол-ву артикулов",
              },
            ]}
            price={2999}
          />
        </div>
      </div>
    </div>
  );
};
