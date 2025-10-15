import React, { useState, useEffect } from "react";
import { BigCard } from "../components/StepsAndRates/BigCard";
import { RateCard } from "../components/StepsAndRates/RateCard";
import { PeriodToggle } from "../components/StepsAndRates/PeriodToggle";
import { RateCard768 } from "../components/StepsAndRates/RateCard768";

export const StepsAndRates = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("1 месяц");
  const [isVisible, setIsVisible] = useState(false);
  const [cardStates, setCardStates] = useState([false, false, false]);
  const [titleAnimation, setTitleAnimation] = useState({
    show: false,
    assemble: false,
    magnetic: false,
  });

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  useEffect(() => {
    // Анимация появления секции
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Анимация заголовка с эффектом сборки
    const titleTimers = [
      setTimeout(
        () => setTitleAnimation((prev) => ({ ...prev, show: true })),
        400
      ),
      setTimeout(
        () => setTitleAnimation((prev) => ({ ...prev, assemble: true })),
        600
      ),
      setTimeout(
        () => setTitleAnimation((prev) => ({ ...prev, magnetic: true })),
        800
      ),
    ];

    // Анимация карточек с задержкой
    const cardDelays = [1000, 1200, 1400]; // Задержки для каждой карточки

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
      titleTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="bg-blue-600 steps-and-rates-section min-[360px]:px-[20px] min-[768px]:px-[4%] min-[1600px]:px-[18.7%] relative h-[1986px] min-[768px]:h-[1396px] min-[1600px]:h-[1370px]">
      <div className="max-[768px]:w-full absolute -top-[128px] min-[768px]:-top-[122px] min-[1600px]:-top-[128px] left-1/2 -translate-x-1/2">
        <BigCard />
      </div>
      <div
        className={`pt-[424px] min-[768px]:pt-[342px] min-[1600px]:pt-[490px] flex flex-col items-center justify-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p
          id="tarif"
          className={`text-[28px] min-[768px]:text-[47.04px] font-bold leading-[115%] tracking-[-1.5px] mb-[17px] min-[768px]:mb-[26px] min-[1600px]:mb-[38px] text-center text-white ${
            titleAnimation.show ? "opacity-100" : "opacity-0"
          } transition-all duration-1000 ease-out`}
        >
          <span
            className={`inline-block transition-all duration-700 ease-out ${
              titleAnimation.assemble
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 -translate-x-8 scale-75"
            } ${titleAnimation.magnetic ? "animate-pulse" : ""}`}
          >
            Тарифы
          </span>
        </p>
        <PeriodToggle onPeriodChange={handlePeriodChange} />
        <div
          className={`flex min-[768px]:hidden min-[1600px]:flex min-[360px]:flex-col min-[1600px]:flex-row items-center justify-center gap-[28px] min-[768px]:gap-[30px] transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className={`transition-all duration-700 hover:scale-105 hover:shadow-lg ${
              cardStates[0]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
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
          </div>
          <div
            className={`transition-all duration-700 hover:scale-105 hover:shadow-lg ${
              cardStates[1]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
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
          <div
            className={`transition-all duration-700 hover:scale-105 hover:shadow-lg ${
              cardStates[2]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
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
        <div
          className={`hidden min-[768px]:flex min-[1600px]:hidden min-[768px]:flex-col min-[1600px]:flex-row items-center justify-center gap-[38px] transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className={`flex gap-[26.89px] transition-all duration-700 ${
              cardStates[0]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div
              className={`transition-all duration-700 hover:scale-105 hover:shadow-lg ${
                cardStates[0]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
            >
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
            </div>
            <div
              className={`transition-all duration-700 hover:scale-105 hover:shadow-lg ${
                cardStates[1]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
            >
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
          </div>
          <div
            className={`transition-all duration-700 hover:scale-105 hover:shadow-lg ${
              cardStates[2]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
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
    </div>
  );
};
