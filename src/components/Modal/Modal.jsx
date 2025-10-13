import { useEffect } from "react";
import { createPortal } from "react-dom";
import CLOSE_ICON from "../../assets/close.svg";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[30px] max-xl:rounded-[17.67px] max-md:rounded-[20px] w-full animate-fadeIn shadow-[0px_4px_14px_0px_#3F6BE840] relative max-w-[1202px] max-xl:max-w-[708px] max-md:max-w-[319px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end items-center px-[35px] pt-[35px] pb-[15px] max-xl:px-[20.62px] max-xl:pt-[20.62px] max-xl:pb-[9.82px] max-md:px-[21px] max-md:pb-0">
          <button
            className="cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out max-xl:size-[17.67px]"
            onClick={onClose}
          >
            <img src={CLOSE_ICON} alt="close" />
          </button>
        </div>
        {children}
        <div className="shadow-xl -z-10 absolute top-0 right-1/2 translate-x-1/2 w-[1106px] max-xl:w-[651.4542236328125px] max-md:w-[293px] h-[calc(100%+25px)] max-xl:h-[calc(100%+15px)] rounded-[25px] max-xl:rounded-[17.67px] max-md:rounded-[20px] bg-white opacity-50"></div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
