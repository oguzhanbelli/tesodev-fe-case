import { Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import routes from "./routes";

export const Router = () => {
  return (
    <Routes>
      {routes.map((route, i) => {
        return <Route key={i} path={route.path} element={<route.element />} />;
      })}

      <Route path={"*"} element={<Navigate to={"/"} />} />
    </Routes>
  );
};
