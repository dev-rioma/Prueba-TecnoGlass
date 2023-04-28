import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { ApiContext } from "../context/Apicontext";

const Layout = () => {
  const { handleSearch } = useContext(ApiContext);
  return (
    <>
      <Header handleSearch={handleSearch} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
