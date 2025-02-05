import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

function Home() {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [limit, setLimit] = useState(10);
  const [input, setInput] = useState("");
  const [names, setNames] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  function handlerInput(e) {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(allCoin);
    }
  }

  async function searchCoin(e) {
    e.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });

    setDisplayCoin(coins);
  }

  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.searchBox}
          value={input}
          onChange={handlerInput}
          list="coinlist"
        />
        <datalist id="coinlist">
          {allCoin.map((item, index) => (
            <option key={index} value={item.name} />
          ))}
        </datalist>
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
          <Link
            className={styles.tableLayout}
            key={index}
            to={`/coin/${item.id}`}
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
          </Link>
        ))}
        <div className="flex justify-around items-center">
          <button
            className={styles.showMoreCoins}
            onClick={() => setLimit((l) => l + 10)}
          >
            Show More Coins
          </button>
          {limit > 10 ? (
            <button
              className={styles.hideCoins}
              onClick={() => setLimit((l) => l - 10)}
            >
              Hide Coins
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Home;
