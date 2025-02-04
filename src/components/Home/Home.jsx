import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import { CoinContext } from "../../context/CoinContext";

function Home() {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [limit, setLimit] = useState(10);
  const [coin, setCoin] = useState("");
  const [names, setNames] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  function showMoreCoins(e) {
    setLimit((l) => l + 10);
  }

  function searchCoin() {
    displayCoin.slice(0, limit).map((item) => {
      if(coin.includes(item.name)){
        console.log(item.name)
      }else{
        console.log('na')
      }
    });
  }

  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.searchBox}
          value={coin}
          onChange={(e) => setCoin(e.target.value)}
        />
        <button className={styles.searchButton} onClick={searchCoin}>
          Search
        </button>
      </div>

      <div className={styles.table}>
        <div className={styles.tableLayout}>
          <p>#</p>
          <p className="ml-3">Coins</p>
          <p>Price</p>
          <p className="text-right">24H Change</p>
          <p className={styles.marketCap}>Market Cap</p>
        </div>
        {displayCoin.slice(0, limit).map((item, index) => (
          <div
            className={styles.tableLayout}
            key={index}
            // onClick={setCoin()}
          >
            <p>{item.market_cap_rank}</p>

            <div className="flex pr-3">
              <img src={item.image} className={styles.image} />
              <p className="self-center m-auto">{item.name}</p>
            </div>

            <div className={styles.prices}>
              <p>{currency.symbol}</p>
              <p>{item.current_price.toLocaleString()}</p>
            </div>

            <p
              className={
                item.price_change_percentage_24h > 0
                  ? "text-right text-green-600"
                  : "text-right text-red-500"
              }
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
            </p>

            <p className={styles.marketCap}>
              <span>{currency.symbol}</span> {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
        <button className={styles.showMoreCoins} onClick={showMoreCoins}>
          Show More Coins
        </button>
      </div>
    </>
  );
}

export default Home;
