import { Link } from "react-router-dom";
import LOGO from "../assets/logo.svg";
import LOGO_SM from "../assets/logoSmall.svg";
import { Drawer } from "antd";
import { useState } from "react";
import TG_LOGO from "../assets/Telegram_logo.svg";
import MAIL from "../assets/mail.svg";
import { useViewport } from "../hooks/use-viewport";

const Header = () => {
  const navItems = [
    { label: "Функции", path: "#func" },
    { label: "Как это работает", path: "#howItWork" },
    { label: "Тарифы", path: "#tarif" },
    { label: "FAQ", path: "#faq" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [_, width] = useViewport();

  return (
    <header className="pt-[20px] min-[768px]:pb-[43px]  min-[1600px]:py-[38px] flex items-center w-full justify-between gap-[56px] pb-[15px]">
      <div className="flex items-center gap-[56px]">
        <Link to="/">
          <img src={width < 768 ? LOGO_SM : LOGO} alt="Logo" />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center w-[388px] justify-between text-[16px] font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className="font-medium relative pb-1 text-[#5C6D86] text-sm hover:text-[#4C3AFF] transition-colors underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center min-[1600px]:gap-4 min-[768px]:gap-[29px]">
        <button className="hidden sm:flex relative min-[1600px]:w-[218px] min-[1600px]:h-[55px] min-[768px]:w-[198px] min-[768px]:h-[50px] min-[1600px]:rounded-[14.44px] rounded-[13.13px]  p-[2px] bg-gradient-to-r from-[#4C3AFF] to-[#49BCFF]">
          <div className="w-full h-full rounded-[12px] bg-white flex items-center justify-center gap-2">
            <p className="in-[1600px]:text-[12px] text-[10.91px] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#4C3AFF] to-[#49BCFF]">
              Попробовать бесплатно
            </p>
          </div>
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden flex flex-col justify-between w-[30px] h-[22px] pb-[1px] max-md:py-[3px] max-md:pl-[6px] max-md:pr-0"
        >
          <span className="block h-0.5 w-full bg-black rounded"></span>
          <span className="block h-0.5 w-full bg-black  rounded"></span>
          <span className="block h-0.5 w-full bg-black  rounded"></span>
        </button>
      </div>
      <Drawer
        open={isOpen}
        width={width < 768 ? "100%" : 350}
        onClose={() => setIsOpen(false)}
        headerStyle={{ display: "none" }}
        bodyStyle={{ padding: 0 }}
      >
        <div className="max-md:bg-[#F7F7F7] pt-[30px] max-md:pt-[20px] px-[30px] max-md:px-[20px]">
          <div className="flex justify-between items-center border-b border-[#E7E7E7] pb-[24px] max-md:pb-[17px]">
            <img src={width < 768 ? LOGO_SM : LOGO} alt="Logo" className="" />
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden flex flex-col justify-between w-[30px] h-[22px] pb-[1px] max-md:p-[3px]"
            >
              <span className="block h-0.5 w-full bg-black rounded"></span>
              <span className="block h-0.5 w-full bg-black  rounded"></span>
              <span className="block h-0.5 w-full bg-black  rounded"></span>
            </button>
          </div>

          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`block text-[21px] !text-[#5C6D86] pt-[15px] pb-[19px] font-medium tracking-[-0.4px] ${
                index !== navItems.length - 1 ? "border-b border-[#E7E7E7]" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="px-[30px] max-md:px-[20px] pb-[30px] max-md:pb-[20px]">
          <div className="flex flex-col pt-[27px] gap-2">
            <span className="text-black text-[14px] font-semibold">
              Поддержка:
            </span>
            <div className="text-[#35ACE1] font-semibold flex flex-col gap-1">
              <div className="flex gap-2 items-center tracking-[-0.3px]">
                <img src={TG_LOGO} className="size-[20.24px] shrink-0" />
                @mppulse_support
              </div>
              <div className="flex gap-2 items-center tracking-[-0.12px]">
                <img src={MAIL} className="size-[19px] shrink-0" />
                mppulse_support@mail.ru
              </div>
            </div>
          </div>

          <div className="flex flex-col text-[#5C6D86] text-[12px] font-medium pt-[20px] gap-1">
            <span className="tracking-[-0.4px] underline">
              Политика конфиденциальности
            </span>
            <span className="tracking-[-0.4px] underline">
              Согласие на обработку персональных данных
            </span>
          </div>

          <p className="text-[#5C6D86] font-medium text-[12px] leading-[145%] tracking-[-0.39px] pt-[19px] opacity-50">
            Все цены указанные на сайте носят исключительно информативный
            характер и не являются публично офертой, определяемой ст. 437 ГК РФ
          </p>

          <div className="text-[12px] text-[#5C6D86] pt-[20px] font-medium tracking-[-0.6px]">
            ИП Иванов И.И. ИНН 93939293
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
