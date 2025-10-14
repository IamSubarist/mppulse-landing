import React, { useState } from "react";
import { BigCard } from "../components/StepsAndRates/BigCard";
import { RateCard } from "../components/StepsAndRates/RateCard";
import { PeriodToggle } from "../components/StepsAndRates/PeriodToggle";
import { RateCard768 } from "../components/StepsAndRates/RateCard768";

export const StepsAndRates = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("1 месяц");

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="bg-blue-600 steps-and-rates-section px-[360px] relative h-[1349px]">
      <div className="absolute -top-[148px] left-1/2 -translate-x-1/2">
        <BigCard />
      </div>
      <div className="min-[768px]:pt-[324px] min-[1600px]:pt-[470px] flex flex-col items-center justify-center">
        <p className="text-[47.04px] font-bold leading-[115%] tracking-[-1.5px] min-[768px]:mb-[26px] min-[1600px]:mb-[38px] text-center text-white">
          Тарифы
        </p>
        <PeriodToggle onPeriodChange={handlePeriodChange} />
        <div className="hidden min-[1600px]:flex min-[768px]:flex-col min-[1600px]:flex-row items-center justify-center gap-[30px]">
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
        <div className="flex min-[1600px]:hidden min-[768px]:flex-col min-[1600px]:flex-row items-center justify-center gap-[38px]">
          <div className="flex gap-[26.89px]">
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
          </div>
          <RateCard768
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
