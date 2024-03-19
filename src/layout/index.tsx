import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";
import Cookies from "../components/Cookies";

const Layout = () => {
  return (
    <>
      <NavHeader />

      <Outlet />
      <Footer />
      <Cookies />
    </>
  );
};

export default Layout;
