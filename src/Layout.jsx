import { Outlet, Link } from "react-router-dom";
import Header from "./components/base/Header";
const Layout = () => {
  return (
    <>
      <Header />
      <div className="max-w-[620px] px-6 mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
