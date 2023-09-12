import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterName } from "./config";
import Homepage from "../home";
import Overview from "../overview";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterName.home} element={<Homepage />} />
        <Route path={RouterName.overview} element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
};
