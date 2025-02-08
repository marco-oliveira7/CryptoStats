import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import styles from "./Coin.module.css";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  const { currency } = useContext(CoinContext);
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-YLkebLciVSmEzjjTaumfKDrT",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-YLkebLciVSmEzjjTaumfKDrT",
      },
    };
    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`,
      options
    )
      .then((res) => res.json())
      .then((res) => setHistoricalData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (coinData && historicalData) {
    return (
      <div className={styles.coin}>
        <div className={styles.coinName}>
          <img className="w-48" src={coinData.image.large} alt="" />
          <p className="text-2xl text-white">
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className={styles.coinChart}>
          <LineChart historicalData={historicalData} />
        </div>
        <div className={styles.coinDetails}>
          <p className={styles.details}>Market Rank: <span>{coinData.market_cap_rank}</span></p>
          <p className={styles.details}>Market Cap: <span>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</span></p>
          <p className={styles.details}>Current Price: <span>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</span></p>
          <p className={styles.details}>Highest Price 24H: <span>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</span></p>
          <p className={styles.details}>Lowest Price 24H: <span>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</span></p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.spinner}>
        <div className={styles.spin}></div>
      </div>
    );
  }
};

export default Coin;
