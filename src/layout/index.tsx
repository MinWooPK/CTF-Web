import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";

const Layout = () => {
  return (
    <>
      <NavHeader />

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
