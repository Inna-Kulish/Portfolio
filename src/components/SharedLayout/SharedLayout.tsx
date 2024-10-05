import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const SharedLayout: React.FC = () => (
  <>
    <Header />
    <div className="container">
      <Outlet />
    </div>
    <Footer />
  </>
);

export default SharedLayout;
