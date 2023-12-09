import React from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router"; // Update import statement
import { AuthContext } from "../context";
import Error from "../pages/Error";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext)
  console.log(isAuth);
  return (
    isAuth ? 
      <Routes>
        {privateRoutes.map(item => 
          <Route path={item?.path} element={item?.component} key={item.path} />
        )}
      </Routes>
    :
      <Routes>
        {publicRoutes.map(item => 
          <Route path={item?.path} element={item?.component} key={item.path} />
        )}
      </Routes>
    )
};

export default AppRouter;
