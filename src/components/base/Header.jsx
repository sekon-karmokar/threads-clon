import { Link } from "react-router-dom";
import Logo from "../icons/Logo";
import Home from "../icons/Home";
import User from "../icons/User";
import Heart from "../icons/Heart";
import Pen from "../icons/Pen";
import Search from "../icons/Search";

import { TbMenu } from "react-icons/tb";

const Header = () => {
  return (
    <>
      <header className="flex w-full h-[74px] justify-between items-center max-w-[1230px] mx-auto">
        <Link to="/" className="mx-[19px]">
          <Logo />
        </Link>
        <div className="flex px-[70px] h-[74px] items-center">
          <Link
            to="/"
            className="py-5 my-1 px-[25px] sm:px-[28px] md:px-[32px]  mx-[2px]">
            <Home />
          </Link>
          <Link
            to="/Search"
            className="py-5 my-1 px-[20px] sm:px-[25px] md:px-[32px]  mx-[2px]">
            <Search />
          </Link>
          <button className="py-5 my-1 px-[20px] sm:px-[25px] md:px-[32px]  mx-[2px]">
            <Pen />
          </button>
          <Link
            to="/activity"
            className="py-5 my-1 px-[20px] sm:px-[25px] md:px-[32px]  mx-[2px]">
            <Heart />
          </Link>
          <Link
            to="/profile"
            className="py-5 my-1 px-[20px] sm:px-[25px] md:px-[32px]  mx-[2px]">
            <User />
          </Link>
        </div>
        <div>
          <button className="mx-[19px]">
            <TbMenu />
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
