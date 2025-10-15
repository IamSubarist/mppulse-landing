import React from "react";
import LOGO from "../assets/logo.svg";
import TG_LOGO from "../assets/Telegram_logo.svg";
import MAIL from "../assets/mail.svg";

export const Footer = () => {
  return (
    <footer
      className="min-h-[50px] flex flex-col md:flex-row py-8 justify-between w-full
                 pl-[30px] pr-[30px] 2xl:pl-[360px] 2xl:pr-[327px] gap-6 md:gap-0"
    >
      <div className="flex pt-1 flex-col justify-between pr-0 md:pr-12 order-1 ">
        <img src={LOGO} className="w-[155px] md:min-w-[174px]" />
        <p className="text-[12px] text-[#5C6D86] font-medium hidden md:block">
          ИП Иванов И.И. ИНН 93939293
        </p>
      </div>

      <div className="flex flex-col justify-between md:text-[14px] lg:text-[16px] tracking-tight pr-0  order-2 md:order-3 gap-4 md:gap-0">
        <p className="text-[#000000] font-semibold leading-5 max-[768px]:text-[14px]">
          Поддержка:
        </p>
        <div className="text-[#35ACE1] font-semibold flex flex-col gap-2">
          <div className="flex gap-2 max-[768px]:text-[14px]">
            <img src={TG_LOGO} className="w-[23px] h-[23px]" />
            @mppulse_support
          </div>
          <div className="flex gap-2 max-[768px]:text-[14px]">
            <img src={MAIL} className="w-[21px] h-[15px]" />
            mppulse_support@mail.ru
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 md:gap-3 lg:gap-5.5 pr-0 md:pr-6 order-3 md:order-2 ">
        <div className="text-[12px] md:text-[12px] lg:text-[14px] text-[#5C6D86] font-medium underline leading-5 tracking-tight">
          <p>Политика конфиденциальности</p>
          <p>Согласие на обработку персональных данных</p>
        </div>

        <div className="text-[12px] md:text-[10px] lg:text-[12px] text-[#5C6D86] font-medium opacity-50 lg:w-[397px] tracking-tight">
          Все цены указанные на сайте носят исключительно информативный характер
          и не являются публично офертой, определяемой ст. 437 ГК РФ
        </div>
      </div>

      <p className="text-[12px] text-[#5C6D86] font-medium  md:hidden order-4">
        ИП Иванов И.И. ИНН 93939293
      </p>
    </footer>
  );
};
