import React, { useEffect, useState } from "react";
import AppBar from "../../components/Appbar";
import styles from "./signinedStyles.module.css";
import Balance from "../../components/Balance";
import Users from "../../components/Users";
import { getBalance } from "../../services/apis";

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    getBalance().then((res) => setBalance(res.data.balance));
  }, []);
  return (
    <div className={styles.container}>
      <AppBar />
      <div className={styles.subbar}>
        <Balance balance={balance} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
