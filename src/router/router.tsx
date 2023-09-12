import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterName } from "./config";
import Homepage from "../Home";
import Overview from "../Overview";
import Tasks from "../Tasks";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterName.home} element={<Homepage />} />
        <Route path={RouterName.overview} element={<Overview />} />
        <Route path={RouterName.tasks} element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
};
