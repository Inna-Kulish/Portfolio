import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import SharedLayout from "../components/SharedLayout/SharedLayout";

const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
