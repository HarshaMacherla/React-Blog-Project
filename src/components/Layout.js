import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { DataProvider } from "../context/DataContext";

const Layout = ({ title }) => {
  return (
    <div className="App">
      <Header title={title} />
      <Nav />
      <DataProvider>
        <Outlet />
      </DataProvider>
      <Footer />
    </div>
  );
};

export default Layout;
