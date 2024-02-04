import React from "react";
import styles from "./Style.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.userContainer}>
      <div className={styles.userContainer}>
        <div className={styles.user}>{user.firstName[0].toUpperCase()}</div>
        <div>
          {user.firstName} {user.lastName}
        </div>
      </div>
      <Button
        label={"Send Money"}
        onClick={() => {
          navigate("/send?id=" + user._id + "&name=" + user.firstName);
        }}
        classes={styles.userbtn}
      />
    </div>
  );
};

export default User;
