import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterName } from "./config";
import Homepage from "../pages/Home";
import Overview from "../pages/Overview";
import Tasks from "../pages/Tasks";
import Projects from "../pages/Projects";
import Payments from "../pages/Payments";
import Users from "../pages/Users";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterName.home} element={<Homepage />} />
        <Route path={RouterName.overview} element={<Overview />} />
        <Route path={RouterName.tasks} element={<Tasks />} />
        <Route path={RouterName.projects} element={<Projects />} />
        <Route path={RouterName.payments} element={<Payments />} />
        <Route path={RouterName.users} element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};
