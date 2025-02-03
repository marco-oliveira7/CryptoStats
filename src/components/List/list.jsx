import React, { useContext, useEffect, useState } from "react";
import styles from "./List.module.css";
import { CoinContext } from "../../context/CoinContext";

function list() {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  function showMoreCoins(e) {
    setLimit((l) => l + 10)
  }

  return (
    <div className={styles.table}>
      <div className={styles.tableLayout}>
        <p>#</p>
        <p className="ml-3">Coins</p>
        <p>Price</p>
        <p className="text-right">24H Change</p>
        <p>Market Cap</p>
      </div>
      {displayCoin.slice(0, limit).map((item, index) => (
        <div className={styles.tableLayout} key={index}>
          <p>{item.market_cap_rank}</p>

          <div className="flex pr-3">
            <img src={item.image} className="w-7 h-7" />
            <p className="self-center m-auto cursor-pointer">{item.name}</p>
          </div>

          <div className="flex justify-between ml-7">
            <p>{currency.symbol}</p>
            <p>{item.current_price.toLocaleString()}</p>
          </div>

          <p className={item.price_change_percentage_24h > 0 ? "text-right text-green-600" : "text-right text-red-500"}>{Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
          
          <p>
            <span>{currency.symbol}</span> {item.market_cap.toLocaleString()}
          </p>
        </div>
      ))}
      <button className={styles.showMoreCoins} onClick={showMoreCoins}>Show More Coins</button>
    </div>
  );
}

export default list;
