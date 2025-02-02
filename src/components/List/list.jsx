import React, { useContext } from "react";
import styles from "./List.module.css";
import { CoinContext } from "../../context/CoinContext";

function list() {
  // const allCoin = useContext(CoinContext);
  return (
    <div className={styles.table}>
      <div className={styles.tableLayout}>
        <p>#</p>
        <p>Name</p>
        <p>Price</p>
        <p>24H Change</p>
        <p>Market Cap</p>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default list;
