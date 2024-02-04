import React, { useState } from "react";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import BottomWarning from "../../components/BottomWarning";
import styles from "./authStyles.module.css";
import { signIn } from "../../services/apis";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [response, setResponse] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Heading label={"Sign In"} />
      <SubHeading label={"Enter your credentials to access your account"} />
      <InputBox
        label={"Email"}
        type={"email"}
        placeholder={"johndoe@example.com"}
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
      />
      <InputBox
        label={"Password"}
        type={"password"}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <Button
        label={"Sign In"}
        onClick={() => {
          const res = signIn(user)
            .then((res) => {
              setError(false);
              localStorage.setItem("token", res.data.token);
              navigate("/dashboard");
            })
            .catch((err) => {
              setResponse(err);
              setError(true);
            });
        }}
        classes={styles.btn}
      />
      {error && (
        <div style={{ color: "red" }}>{response?.response.data.message}</div>
      )}
      <BottomWarning
        label={"Don't have an account?"}
        buttonText={"Sign Up"}
        to={"/signup"}
      />
    </div>
  );
};

export default SignIn;
