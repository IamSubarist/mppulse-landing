import { Switch } from "antd";
import React, { useState } from "react";
import HeroImg from "../assets/hero-img.png";
import HeroImg768 from "../assets/hero-img-768.png";
import HeroImg360 from "../assets/hero-img-360.png";
import Header from "../components/Header";
import Modal from "../components/Modal/Modal";
import ModalContent from "../components/Modal/ModalContent";
import ModalSlider from "../components/Modal/ModalSlider";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hero-section min-[360px]:px-[20px] min-[768px]:px-[4%] min-[1600px]:px-[18.7%] relative pb-[274.4px]">
      <Header />
      <div className="flex flex-col max-w-[780.93px] mt-1">
        <p className="text-[30.06px] min-[768px]:text-[47.04px] leading-[114%] mb-[15px] min-[768px]:mb-[24.15px] tracking-[-0.6px]">
          Ваш личный{" "}
          <span className="font-semibold">AI менеджер-аналитик,</span> который
          работает 24/7
        </p>
        <div className="flex items-start gap-[10px] min-[768px]:gap-[17.57px] mb-[18px] min-[768px]:mb-[32.71px]">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-[12px] min-[768px]:size-[15px] mt-[5px]"
          >
            <path
              opacity="0.2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.7253 12.5906L11.0103 9.87558C11.8511 8.63487 12.1991 7.12528 11.9865 5.64169C11.7738 4.15809 11.0157 2.80705 9.86029 1.85248C8.70484 0.897898 7.23503 0.408345 5.73796 0.479443C4.24089 0.550541 2.82409 1.17718 1.76431 2.23696C0.704525 3.29675 0.0778844 4.71355 0.00678667 6.21062C-0.0643111 7.70769 0.425241 9.1775 1.37982 10.3329C2.3344 11.4884 3.68543 12.2465 5.16903 12.4591C6.65263 12.6718 8.16221 12.3237 9.40292 11.4829L12.1179 14.1979C12.331 14.4111 12.6201 14.5308 12.9216 14.5308C13.223 14.5308 13.5121 14.4111 13.7253 14.1979C13.9384 13.9848 14.0582 13.6957 14.0582 13.3942C14.0582 13.0928 13.9384 12.8037 13.7253 12.5906ZM6.02213 10.5148C5.22661 10.5151 4.44887 10.2794 3.78729 9.83767C3.12571 9.39589 2.61001 8.76783 2.30544 8.03292C2.00086 7.29802 1.92109 6.48929 2.07621 5.70904C2.23133 4.92879 2.61438 4.21207 3.1769 3.64955C3.73942 3.08704 4.45613 2.70399 5.23638 2.54887C6.01663 2.39374 6.82536 2.47352 7.56027 2.77809C8.29517 3.08267 8.92323 3.59836 9.36501 4.25994C9.80678 4.92152 10.0424 5.69926 10.0421 6.49478C10.0421 7.56095 9.61858 8.58345 8.86469 9.33734C8.11079 10.0912 7.08829 10.5148 6.02213 10.5148Z"
              fill="black"
            />
          </svg>
          <p className="max-[768px]:w-[254px] text-[15px] min-[768px]:text-[19.67px] leading-[135%] opacity-50 tracking-[-0.4px]">
            Он сам анализирует карточки, рекламу и конкурентов, показывает какие{" "}
            <br className="max-[768px]:hidden" />
            показатели просели и где теряется прибыль — и подсказывает, что
            делать
          </p>
        </div>
        <div className="flex flex-wrap max-w-[651.6px] gap-[7px] min-[768px]:gap-[13.27px] mb-[21px] min-[768px]:mb-[35.28px]">
          <div className="bg-white flex items-center pl-[13.6px] min-[768px]:pl-[17.92px] gap-[9.38px] min-[768px]:gap-[13.27px] rounded-[16.59px] w-[156.12px] min-[768px]:w-[311.2px] h-[55.27px] min-[768px]:h-[60.38px]">
            <Switch checked={true} />
            <p className="text-[13.58px] min-[768px]:text-[19.67px] font-semibold tracking-[-0.6px] max-[768px]:leading-[110%]">
              Оцифровка кабинета
            </p>
          </div>
          <div className="bg-white flex items-center pl-[13.6px] min-[768px]:pl-[17.92px] gap-[9.38px] min-[768px]:gap-[13.27px] rounded-[16.59px] w-[156.12px] min-[768px]:w-[327.12px] h-[55.27px] min-[768px]:h-[60.38px]">
            <Switch checked={true} />
            <p className="text-[13.58px] min-[768px]:text-[19.67px] font-semibold tracking-[-0.6px] max-[768px]:leading-[110%]">
              Анализ всех конверсий
            </p>
          </div>
          <div className="bg-white flex items-center pl-[13.6px] min-[768px]:pl-[17.92px] gap-[9.38px] min-[768px]:gap-[13.27px] rounded-[16.59px] w-[156.12px] min-[768px]:w-[311.2px] h-[55.27px] min-[768px]:h-[60.38px]">
            <Switch checked={true} />
            <p className="text-[13.58px] min-[768px]:text-[19.67px] font-semibold tracking-[-0.6px] max-[768px]:leading-[110%]">
              Оптимизация рекламы
            </p>
          </div>
          <div className="bg-white flex items-center pl-[13.6px] min-[768px]:pl-[17.92px] gap-[9.38px] min-[768px]:gap-[13.27px] rounded-[16.59px] w-[156.12px] min-[768px]:w-[327.12px] h-[55.27px] min-[768px]:h-[60.38px]">
            <Switch checked={true} />
            <p className="text-[13.58px] min-[768px]:text-[19.67px] font-semibold tracking-[-0.6px] max-[768px]:leading-[110%]">
              Поиск причин и решений
            </p>
          </div>
        </div>
        <div className="relative min-[768px]:ml-[5px]">
          <div className="relative z-20 flex items-center justify-center gap-[14.15px] bg-[linear-gradient(90deg,_#4C3AFF_-4.57%,_#49BCFF_93.01%)] w-[320px] min-[768px]:w-[405.58px] h-[83px] min-[768px]:h-[105.44px] rounded-[17.57px]">
            <svg
              width="54"
              height="39"
              viewBox="0 0 54 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60 "
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
              <p className="uppercase text-[15.53px] min-[768px]:text-[19.67px] font-bold">
                Попробовать бесплатно
              </p>
              <p className="text-[11.48px] min-[768px]:text-[14.54px] opacity-60 tracking-[-0.1px]">
                Получите 3 дня бесплатного пользования
              </p>
            </div>
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className="hidden min-[768px]:flex ml-[10px] z-10 absolute items-center justify-end top-1/2 -translate-y-1/2 left-0 min-[1600px]:w-[561.96px] w-[636px] h-[91.52px] rounded-[17.57px] border border-[#4ABCFF]"
          >
            <p className="min-[1600px]:max-w-[140.28px] max-w-[220px] text-[#335873] text-[12px] font-medium min-[1600px]:pr-[7.7px] pr-[20px] leading-[125%] tracking-[-0.3px]">
              За 3 дня ассистент оптимизирует все ваши рекламные кампании и
              оцифрует кабинет
            </p>
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className="flex min-[768px]:hidden z-10 absolute items-end justify-center top-0 left-1/2 -translate-x-1/2 w-[calc(100%-38px)] h-[calc(100%+61px)] rounded-[17.57px] border border-[#4ABCFF]"
          >
            <p className="max-w-[247px] text-center text-[#335873] text-[12px] font-medium pb-[18px] leading-[125%] tracking-[-0.3px]">
              За 3 дня ассистент оптимизирует все ваши рекламные кампании и
              оцифрует кабинет
            </p>
          </div>
        </div>
      </div>
      <img
        className="z-[30] w-[43%] absolute top-[105px] right-25 max-[1600px]:hidden"
        src={HeroImg}
        alt="hero"
      />
      <img
        className=" min-[360px]:hidden min-[768px]:block min-[1600px]:hidden z-[30] w-[100%] absolute top-10 min-[768px]:-top-8 left-5"
        src={HeroImg768}
        alt="hero"
      />
      <img
        className=" min-[360px]:block min-[768px]:hidden z-[30] w-[100%] absolute top-131 left-0"
        src={HeroImg360}
        alt="hero"
      />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {/* <ModalContent variant={"monitoring"} /> */}
        <ModalSlider />
      </Modal>
    </div>
  );
};
