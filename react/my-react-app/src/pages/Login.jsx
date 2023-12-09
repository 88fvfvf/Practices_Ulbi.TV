import React from "react";
import { useContext } from "react";
import MyButton from "../component/UI/button/MyButton";
import MyInput from "../component/UI/MyInput/MyInput";
import { AuthContext } from "../context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth','true')
  };

  return (
    <div>
      <h1>Page Login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter Your Login" />
        <MyInput type="password" placeholder="Enter Your Password}" />
        <MyButton>Enter</MyButton>
      </form>
    </div>
  );
};

export default Login;
