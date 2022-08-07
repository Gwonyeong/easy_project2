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
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCrbZJv5eirNrmIUnjzkALyAZVS7OU3aRk";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCrbZJv5eirNrmIUnjzkALyAZVS7OU3aRk";
    }
    axios(url, {
      method: "post", // 다른 옵션도 가능합니다 (post, put, delete, etc.)
      headers: { "Content-Type": "application/json" },
      data: {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return null;
        } else {
          return (data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          };
        }
      })
      .then((data) => {
        dispatch(authActions.login(data.idToken));
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
