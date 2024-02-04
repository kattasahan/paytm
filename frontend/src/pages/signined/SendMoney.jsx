import React, { useState } from "react";
import styles from "./signinedStyles.module.css";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { useSearchParams } from "react-router-dom";
import { transferMoney } from "../../services/apis";

const SendMoney = () => {
  const [params] = useSearchParams();
  const id = params.get("id");
  const name = params.get("name");
  const [amount, setAmount] = useState();

  return (
    <div className={styles.moneyContainer}>
      <Heading label={"Send Money"} />
      <div className={styles.flex}>
        <div className={styles.user}>{name[0].toUpperCase()}</div>
        <div>{name}</div>
      </div>
      <div className={styles.amount}>Amount (in Rs)</div>
      <input
        className={styles.amountInput}
        type="text"
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button
        classes={styles.btn}
        onClick={() => {
          transferMoney({ to: id, amount });
        }}
        label={"Initiate Transfer"}
      />
    </div>
  );
};

export default SendMoney;
