import { Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import routes from "./routes";

export const Router = () => {
  console.log(routes);
  return (
    <Routes>
      {routes.map((route, i) => {
        return <Route key={i} path={route.path} element={<route.element />} />;
      })}

      <Route path={"*"} element={<Navigate to={"/"} />} />
    </Routes>
  );
};
