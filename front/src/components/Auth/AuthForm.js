import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import classes from "./AuthForm.module.css";
import axios from "axios";
import { authActions } from "../../redux/modules/authContext";

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url = `http://localhost:8000/sign/in`;
    } else {
      url = `http://localhost:8000/sign/up`;
    }
    axios(url, {
      method: "POST",
      data: {
        id: enteredEmail,
        pw: enteredPassword,
        nickname: "asdasdasd",
        confirmPw: enteredPassword,
      },
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data.bool);
        console.log(res.data.token);

        setIsLoading(false);
        dispatch(authActions.login(res.data.token));
        navigate("/", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with  existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
