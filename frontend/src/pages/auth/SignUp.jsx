import React, { useState } from "react";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import BottomWarning from "../../components/BottomWarning";
import styles from "./authStyles.module.css";
import { signUp } from "../../services/apis";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [response, setResponse] = useState({});
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  return (
    <div className={styles.container}>
      <Heading label={"Sign Up"} />
      <SubHeading label={"Enter your information to create an account"} />
      <InputBox
        onChange={(e) => {
          setUser({
            ...user,
            firstName: e.target.value,
          });
        }}
        label="First Name"
        type="text"
        placeholder="John"
      />
      <InputBox
        onChange={(e) => {
          setUser({
            ...user,
            lastName: e.target.value,
          });
        }}
        label="Last Name"
        type="text"
        placeholder="Doe"
      />
      <InputBox
        onChange={(e) => {
          setUser({
            ...user,
            username: e.target.value,
          });
        }}
        label="Email"
        type="email"
        placeholder="johndoe@example.com"
      />
      <InputBox
        onChange={(e) => {
          setUser({
            ...user,
            password: e.target.value,
          });
        }}
        label="Password"
        type="password"
      />
      <Button
        label="Sign Up"
        onClick={() => {
          signUp(user).then(
            (res) => {
              setError(false);
              localStorage.setItem("token", res.data.token);
              navigate("/dashboard");
            },
            (err) => {
              setResponse(err);
              setError(true);
            }
          );
        }}
        classes={styles.btn}
      />
      {error && (
        <div style={{ color: "red" }}>{response.response.data.message}</div>
      )}
      <BottomWarning
        label="Already have an account?"
        buttonText={"Sign in"}
        to="/signin"
      />
    </div>
  );
};

export default SignUp;
