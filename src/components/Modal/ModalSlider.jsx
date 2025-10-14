import { useState, useEffect } from "react";
import LEFT_ARROW from "../../assets/slideArrowL.svg";
import RIGHT_ARROW from "../../assets/slideArrowR.svg";
import SLIDE1 from "../../assets/slide1.png";
import SLIDE2 from "../../assets/slide2.png";
import SLIDE3 from "../../assets/slide3.png";

const slides = [
  {
    title: "Оцифровка кабинета",
    description:
      "Точная оцифровка вашего кабинета покажет все цифры вашего бизнеса как на ладони",
    image: SLIDE1,
  },
  {
    title: "РНП",
    description:
      "Отчет рука на пульсе покажет все показатели ваших карточек в удобном формате",
    image: SLIDE2,
  },
  {
    title: "Реклама",
    description:
      "Отчет по рекламе покажет чистую прибыль по каждому ключевому запросу в ваших кампаниях",
    image: SLIDE3,
  },
];

const ModalSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  // Навигация по клавишам ← и →
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 767);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="flex flex-col items-center text-center pb-[45px] max-xl:pb-[60px] max-md:pb-[120px] max-md:px-[20px] relative">
      <div className="relative w-full max-w-[1300px] max-md:max-w-[350px] max-md:w-[306px] overflow-x-hidden flex justify-center items-center min-h-[556px] max-xl:min-h-[376px] max-md:min-h-[182px] max-xl:items-start">
        {/* Слайдер контейнер */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col items-center justify-center gap-[45px] max-xl:gap-[30px] max-xl:justify-start max-md:gap-[22px]"
            >
              <div className="flex flex-col gap-[18px] max-xl:gap-[7px] max-md:max-w-[282px] max-md:pt-[11px] max-md:gap-[9px]">
                <h2 className="text-[47px] max-xl:text-[30px] max-md:text-[25px] font-bold text-black leading-[114.9%] tracking-[-1.4px] max-xl:tracking-[-0.85px]">
                  {slide.title}
                </h2>
                <p className="text-[18px] max-xl:text-[14px] text-black tracking-[-0.69px] max-xl:tracking-[-0.3px] leading-[135%]">
                  {slide.description}
                </p>
              </div>
              <div className="relative w-full flex justify-center -mx-[45px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-[1292px] max-w-none max-xl:w-[896px] max-md:w-[420px]"
                />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-[100px] bottom-[40%] transition z-1 max-xl:size-[42px] max-md:size-[31px] max-xl:left-[31px] max-xl:bottom-[44%] max-md:bottom-[32%] max-md:left-[8px]"
        >
          <img src={LEFT_ARROW} alt="prev" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-[100px] bottom-[40%] transition z-1 max-xl:size-[42px] max-md:size-[31px] max-xl:right-[31px] max-xl:bottom-[44%] max-md:bottom-[32%] max-md:right-[8px]"
        >
          <img src={RIGHT_ARROW} alt="next" />
        </button>
      </div>
      {/* Индикаторы */}
      {isMobile && (
        <div className="flex gap-[8px]">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-all ${
                current === index ? "bg-[#4C3AFF]" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      )}

      <button className="flex justify-center absolute bottom-[28px] max-xl:bottom-[62px] max-md:bottom-[37px] left-1/2 -translate-x-1/2 bg-[linear-gradient(90deg,_#4C3AFF_-4.57%,_#49BCFF_93.01%)] text-white font-semibold text-[16px] w-[405px] h-[105px] max-xl:w-[274.99px] max-xl:h-[71.49px] max-md:w-[272.86px] max-md:h-[70.78px] rounded-[12px] items-center shadow-lg hover:opacity-90 transition">
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
  );
};

export default ModalSlider;
