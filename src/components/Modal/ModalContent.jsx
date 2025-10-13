import { useEffect, useState } from "react";
import PHONE1 from "../../assets/phone1.svg";
import PHONE2 from "../../assets/phone2.svg";
import ARROW_ICON from "../../assets/arrowDown.svg";

const ModalContent = ({ variant }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 767);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const shortText =
    variant === "monitoring"
      ? "Мониторинг и диагностика отклонений обеспечивает непрерывное наблюдение за ключевыми показателями: CTR, конверсией, позициями карточек, рекомендательными полками, динамикой цен и контента... "
      : "MPpulse проводит построчный анализ ключевых запросов с учётом 86 факторов и формирует рекомендации по конкретным действиям...";

  const fullText =
    variant === "monitoring" ? (
      <>
        Мониторинг и диагностика отклонений обеспечивает непрерывное наблюдение
        за ключевыми показателями: CTR, конверсией, позициями карточек,
        рекомендательными полками, динамикой <br className="max-xl:hidden" />{" "}
        цен и контента конкурентов, участием в акциях, уровнем СПП,{" "}
        <br className="max-xl:hidden" /> а также эффективностью{" "}
        <br className="lg:hidden max-md:hidden" /> рекламных кампаний.
      </>
    ) : (
      <>
        MPpulse проводит построчный анализ ключевых запросов с учётом <br className="max-xl:hidden" /> 86
        факторов и формирует рекомендации по конкретным действиям.
      </>
    );
  return (
    <div className="flex justify-center px-[115px] pb-[82px] max-xl:px-[40px] max-xl:pb-[40px] max-md:p-0 max-md:pb-[35px] overflow-y-auto">
      <div className="flex gap-[79px] max-xl:gap-[40px] max-md:flex-col-reverse max-md:items-center max-md:gap-[20px]">
        {variant === "monitoring" ? (
          <img
            className="max-xl:w-[272px] max-xl:h-[548px] max-md:w-[252px] max-md:h-[516px] max-md:order-2"
            src={PHONE1}
            alt="phone"
          />
        ) : (
          <img
            className="max-xl:w-[272px] max-xl:h-[548px] max-md:w-[252px] max-md:h-[516px] max-md:order-2"
            src={PHONE2}
            alt="phone"
          />
        )}
        <div className={`flex flex-col ${variant === "monitoring" ? "gap-[18px] max-xl:gap-[13px]" : "gap-[33px] max-xl:gap-[20px]"} relative max-md:order-3`}>
          <div className="flex flex-col gap-2.5 max-xl:gap-[3px]">
            <h2 className="text-black text-[47px] max-xl:text-[30px] max-md:text-[27px] max-md:text-center font-bold leading-[114%] max-xl:leading-[106.9%] tracking-[-1.5px] max-xl:tracking-[-1px]">
              {variant === "monitoring" ? (
                <>
                  Мониторинг <br /> показателей карточек
                </>
              ) : (
                <>
                  Оптимизация <br /> ключей в рекламе
                </>
              )}
            </h2>
            {variant === "monitoring" && (
              <span className="text-[24px] max-xl:text-[14px] font-medium bg-gradient-to-r from-[#4C3AFF] to-[#49BCFF] bg-clip-text text-transparent tracking-[-0.85px] max-xl:tracking-[-0.45px] max-md:text-center">
                Теперь у вас есть личный AI-аналитик!
              </span>
            )}
          </div>
          <div
            className={`flex flex-col gap-[22px] max-xl:gap-[20px] max-md:px-[22px] max-md:text-center transition-all duration-300 ${
              isMobile && !isExpanded ? "max-h-[90px] overflow-hidden" : ""
            }`}
          >
            <p
              className={`text-[18px] max-xl:text-[14px] text-black leading-[135%] tracking-[-0.35px]`}
            >
              {isMobile && !isExpanded ? shortText : fullText}
            </p>
            {variant === "monitoring" ? (
              <>
                <p className="text-[18px] max-xl:text-[14px] text-black leading-[135%] tracking-[-0.35px]">
                  При выявлении падения метрик AI-аналитик запускает
                  причинно-следственный анализ: определяет первопричину, отделяя
                  симптом <br /> от источника проблемы. Вывод формируется{" "}
                  <br className="lg:hidden" /> на основе данных,{" "}
                  <br className="max-xl:hidden" /> без экспертных допущений.
                </p>
                <p className="text-[18px] max-xl:text-[14px] text-black leading-[135%] tracking-[-0.35px]">
                  Селлер получает мгновенный структурированный отчёт{" "}
                  <br className="max-xl:hidden" /> с локализацией проблемы,
                  объяснением причин и рекомендациями. MPpulse беспрерывно
                  анализирует все показатели вместо вас{" "}
                  <br className="max-xl:hidden" /> и сообщает вам об отклонении,
                  если такое произойдет
                </p>
              </>
            ) : (
              <>
                <p className="text-[18px] max-xl:text-[14px] text-black leading-[135%] tracking-[-0.35px]">
                  Система чётко разделяет ключи: какие следует отправить в
                  минус-фразы, а какие — усилить <br className="lg:hidden" /> и поднять в выдаче. Для каждого
                  запроса рассчитываются текущая эффективность <br className="lg:hidden" /> и потенциал роста
                  с учётом показателей <br className="lg:hidden" /> карточки и ключа. 
                </p>
                <p className="text-[18px] max-xl:text-[14px] text-black leading-[135%] tracking-[-0.35px]">
                  Точность рекомендаций достигает 98%, <br className="lg:hidden" /> что обеспечивает
                  максимальную оптимизацию ваших рекламных кампаний.
                </p>
                <p className="text-[18px] max-xl:text-[14px] text-black leading-[135%] tracking-[-0.35px]">
                  Раз в неделю AI-аналитик MPpulse направляет структурированный
                  отчёт по всем ключевым <br className="lg:hidden" /> словам с приоритизацией и пошаговыми
                  рекомендациями по каждому из них
                </p>
              </>
            )}

            {isMobile && !isExpanded && (
              <div className={`absolute bottom-0 left-0 right-0 h-[80px] ${variant === "monitoring" ? "top-[110px]" : "top-[90px]"} bg-gradient-to-t from-white to-transparent pointer-events-none`}></div>
            )}
          </div>

          {isMobile && !isExpanded && (
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="flex gap-[6px] justify-center"
            >
              <span className="text-[#49BCFF] font-medium text-[14px] border-b border-[#49BCFF] pb-[1px]">
                Раскрыть полное описание
              </span>
              <img src={ARROW_ICON} alt="arrow" />
            </button>
          )}
          <button className={`flex items-center justify-center gap-2.5 bg-[linear-gradient(90deg,_#4C3AFF_-4.57%,_#49BCFF_93.01%)] w-[405.58px] max-xl:w-[238.89px] h-[105.44px] max-xl:h-[62.1px] rounded-[17.57px] max-xl:rounded-[10.35px] mt-[21px] absolute left-[-11px] ${variant === "monitoring" ? "bottom-[18px]" : "bottom-[73px]"} max-xl:left-[-3px] max-xl:bottom-[4px] max-md:hidden cursor-pointer`}>
            <svg
              viewBox="0 0 54 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60 w-[31px] h-[22px] lg:w-[54px] lg:h-[39px]"
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
            <div className="flex flex-col items-start">
              <span className="text-white text-[19.67px] font-bold uppercase max-xl:text-[11.59px]">
                Попробовать бесплатно
              </span>
              <span className="text-[14.54px] text-white opacity-60 max-xl:text-[8.56px]">
                Пробный период 3 дня{" "}
              </span>
            </div>
          </button>
        </div>
        <button className="flex items-center justify-center gap-2.5 bg-[linear-gradient(90deg,_#4C3AFF_-4.57%,_#49BCFF_93.01%)] w-[272px] h-[70.78px] rounded-[11.8px] max-md:order-1 md:hidden cursor-pointer">
          <svg
            viewBox="0 0 54 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-60 w-[31px] h-[22px] lg:w-[54px] lg:h-[39px]"
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
          <div className="flex flex-col items-start">
            <span className="text-white text-[19.67px] font-bold uppercase max-xl:text-[11.59px]">
              Попробовать бесплатно
            </span>
            <span className="text-[14.54px] text-white opacity-60 max-xl:text-[8.56px]">
              Пробный период 3 дня{" "}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
