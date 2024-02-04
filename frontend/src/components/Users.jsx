import React, { useEffect, useState } from "react";
import styles from "./Style.module.css";
import User from "./User";
import { getUsers } from "../services/apis";

const Users = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    getUsers("").then((res) => {
      setUsers(res.data.users);
    });
  }, []);
  return (
    <div className={styles.users}>
      <div className={styles.bold}>Users</div>
      <input
        className={styles.search}
        type="text"
        placeholder="Search users..."
        onChange={(e) => {
          getUsers(e.target.value).then((res) => {
            setUsers(res.data.users);
          });
        }}
      />

      {users?.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
};

export default Users;
