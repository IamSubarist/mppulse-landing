import { Link } from "react-router-dom";
import LOGO from "../assets/logo.svg";

const Header = () => {
  const navItems = [
    { label: "Функции", path: "/" },
    { label: "Как это работает", path: "/about" },
    { label: "Тарифы", path: "/tarif" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <header className="min-[768px]:py-[29.5px] min-[1600px]:py-[38px] flex items-center w-full justify-between gap-[56px]">
      <div className="flex items-center gap-[56px]">
        <Link to="/">
          <img src={LOGO} alt="Logo" className="" />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center w-[388px] justify-between text-[16px] font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="font-medium relative pb-1 text-[#5C6D86] text-sm hover:text-[#4C3AFF] transition-colors underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:flex relative w-[218px] h-[55px] rounded-[14.44px] p-[2px] bg-gradient-to-r from-[#4C3AFF] to-[#49BCFF]">
          <div className="w-full h-full rounded-[12px] bg-white flex items-center justify-center gap-2">
            <p className="text-[12px] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#4C3AFF] to-[#49BCFF]">
              Попробовать бесплатно
            </p>
          </div>
        </button>

        <button className="lg:hidden flex flex-col justify-between w-[30px] h-[22px] p-1">
          <span className="block h-0.5 w-full bg-black rounded"></span>
          <span className="block h-0.5 w-full bg-black  rounded"></span>
          <span className="block h-0.5 w-full bg-black  rounded"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
