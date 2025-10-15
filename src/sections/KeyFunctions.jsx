import React, { useState, useEffect } from "react";
import { FuncCard } from "../components/KeyFunctions/FuncCard";
import { MonitoringCard } from "../components/KeyFunctions/MonitoringCard";
import { BigCard } from "../components/KeyFunctions/BigCard";

export const KeyFunctions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardStates, setCardStates] = useState([false, false, false]);
  const [titleAnimation, setTitleAnimation] = useState({
    show: false,
    assemble: false,
    magnetic: false,
  });

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
        1000
      ),
    ];

    // Анимация карточек с задержкой
    const cardDelays = [1000, 1400, 1600]; // Задержки для каждой карточки

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
    <div className="keyfunc-section min-[360px]:px-[2.605%] min-[768px]:px-[4%] min-[1600px]:px-[18.7%] relative h-[2618px] min-[768px]:h-[2192px] min-[1600px]:h-[1870px]">
      <div className="absolute top-[80px] min-[1600px]:-top-[161px] min-[768px]:top-[264px] left-1/2 -translate-x-1/2">
        <BigCard icon="light"/>
      </div>
      <div className="pt-[724px] min-[768px]:pt-[970px] min-[1600px]:pt-[624px]">
        <p
          id="func"
          className={`text-[24px] min-[768px]:text-[35px] min-[1600px]:text-[47.04px] font-bold leading-[115%] tracking-[-0.6px] min-[768px]:tracking-[-1.5px] mb-[55px] min-[768px]:mb-[76px] min-[1600px]:mb-[92px] text-center ${
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
            Три
          </span>{" "}
          <span
            className={`text-[#4C51FF] inline-block transition-all duration-700 ease-out delay-200 ${
              titleAnimation.assemble
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-8 scale-75"
            } ${
              titleAnimation.magnetic
                ? "drop-shadow-[0_0_15px_rgba(76,81,255,0.8)]"
                : ""
            }`}
          >
            ключевые
          </span>{" "}
          <span
            className={`inline-block transition-all duration-700 ease-out delay-400 ${
              titleAnimation.assemble
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-8 scale-75"
            } ${titleAnimation.magnetic ? "animate-pulse" : ""}`}
          >
            функции
          </span>
        </p>
        <div
          className={`min-[360px]:flex min-[768px]:hidden min-[1600px]:flex min-[1600px]:flex-row flex-col items-center min-[768px]:items-start justify-center gap-[57px] min-[768px]:gap-[30px] transition-all duration-1000 delay-900 ${
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
            <FuncCard
            numb="01"
              title="Оцифровка + РНП"
              description="Инструменты, показывающие точное состояние вашего бизнеса на Вайлдберриз"
              data={[
                "Оцифровка кабинета с максимальной точностью данных",
                "РНП  —  рука на пульсе",
                "АВС-анализ ассортимента и рекомендации по оптимизации продуктовой матрицы",
              ]}
            />
          </div>
          <div
            className={`transition-all duration-700 hover:scale-105 hover:shadow-lg ${
              cardStates[1]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <FuncCard
              numb="02"
              title="Мониторинг и анализ"
              description="Постоянный анализ всех показателей карточек и информирование о причинах изменений"
              data={[
                "Мониторинг СTR и выявление причин в случае его падения",
                "Мониторинг СTR и выявление причин в случае его падения",
                "Мониторинг конкурентов и информирование об изменении их цены или контента",
                "Мониторинг позиций карточек и выявление причин в случае их падения",
                "Мониторинг рекомендательных полок и информирование о демпинге и конкурентах",
                "Мониторинг  акций, информирование о них и расчет юнит-экономики при участии",
                "Мониторинг СПП и информирование о его изменении",
                "Мониторинг рекламных кампаний и информирование о перерасходе и пополнении",
              ]}
            />
          </div>
          <div
            className={`transition-all duration-700 hover:scale-105 hover:shadow-lg ${
              cardStates[2]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <FuncCard
            numb="03"
              title="Оптимизация ключей"
              description="Ai-менеджер по рекламе оптимизирует все ваши рекламные кампании и уменьшит ДРР"
              data={[
                "Постоянный анализ всех ключевых запросов и анализ показателей",
                "Точечная оптимизация рекламных кампаний нашим AI-менеджером по оптимизации",
                "Рекомендации по продвижению и минусации ключевых запросов",
              ]}
            />
          </div>
        </div>
        <div
          className={`hidden min-[768px]:flex min-[1600px]:hidden min-[1600px]:flex-row flex-col items-start justify-center gap-[30px] transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className={`flex gap-[26.22px] transition-all duration-700 ${
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
              <FuncCard
                numb="01"
                title="Оцифровка + РНП"
                description="Инструменты, показывающие точное состояние вашего бизнеса на Вайлдберриз"
                data={[
                  "Оцифровка кабинета с максимальной точностью данных",
                  "РНП  —  рука на пульсе",
                  "АВС-анализ ассортимента и рекомендации по оптимизации продуктовой матрицы",
                ]}
              />
            </div>
            <div
              className={`transition-all duration-700 hover:scale-105 hover:shadow-lg ${
                cardStates[2]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
            >
              <FuncCard
                numb="02"
                title="Оптимизация ключей"
                description="Ai-менеджер по рекламе оптимизирует все ваши рекламные кампании и уменьшит ДРР"
                data={[
                  "Постоянный анализ всех ключевых запросов и анализ показателей",
                  "Точечная оптимизация рекламных кампаний нашим AI-менеджером по оптимизации",
                  "Рекомендации по продвижению и минусации ключевых запросов",
                ]}
              />
            </div>
          </div>
          <div
            className={`transition-all duration-700 hover:scale-105 hover:shadow-lg ${
              cardStates[1]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <MonitoringCard
              numb="03"
              title="Мониторинг и анализ"
              description="Постоянный анализ всех показателей карточек и информирование о причинах изменений"
              data={[
                "Мониторинг СTR и выявление причин в случае его падения",
                "Мониторинг СTR и выявление причин в случае его падения",
                "Мониторинг конкурентов и информирование об изменении их цены или контента",
                "Мониторинг позиций карточек и выявление причин в случае их падения",
                "Мониторинг рекомендательных полок и информирование о демпинге и конкурентах",
                "Мониторинг  акций, информирование о них и расчет юнит-экономики при участии",
                "Мониторинг СПП и информирование о его изменении",
                "Мониторинг рекламных кампаний и информирование о перерасходе и пополнении",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
