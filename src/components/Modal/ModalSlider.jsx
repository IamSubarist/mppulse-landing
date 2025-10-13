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

  return (
    <div className="flex flex-col items-center text-center px-[40px] pb-[40px] max-md:px-[20px] relative">
      <div className="relative w-full max-w-[1000px] overflow-x-hidden flex justify-center items-center min-h-[520px]">
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
              className="w-full flex-shrink-0 flex flex-col items-center justify-center px-6"
            >
              <h2 className="text-[36px] max-xl:text-[26px] max-md:text-[20px] font-bold text-black mb-[8px]">
                {slide.title}
              </h2>
              <p className="text-[18px] max-xl:text-[14px] text-gray-700 mb-[20px] max-w-[600px]">
                {slide.description}
              </p>
              <div className="relative w-full flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-[20px] w-full max-w-[800px] object-contain"
                />
                <button className="absolute bottom-[30px] left-1/2 -translate-x-1/2 bg-[linear-gradient(90deg,_#4C3AFF_-4.57%,_#49BCFF_93.01%)] text-white font-semibold text-[16px] py-[14px] px-[26px] rounded-[12px] flex items-center shadow-lg hover:opacity-90 transition">
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
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-[-60px] max-md:left-0 transition z-1"
      >
        <img src={LEFT_ARROW} alt="prev" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-[-60px] max-md:right-0  transition z-1"
      >
        <img src={RIGHT_ARROW} alt="next" />
      </button>

      {/* Индикаторы */}
      <div className="flex gap-[8px] mt-[24px]">
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
    </div>
  );
};

export default ModalSlider;
