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

  function showMoreCoins() {
    
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
            <p className="self-center m-auto">{item.name}</p>
          </div>

          <div className="flex justify-between ml-7">
            <p>{currency.symbol}</p>
            <p>{item.current_price.toLocaleString()}</p>
          </div>

          <p className="text-right">{Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
          
          <p>
            {currency.symbol} {item.market_cap.toLocaleString()}
          </p>
        </div>
      ))}
      <button className="px-2 py-1 bg-amber-500" onClick={() => setLimit((l) => l + 10)}>Show More Coins</button>
    </div>
  );
}

export default list;
