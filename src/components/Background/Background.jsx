import React from "react";
import styles from './Background.module.css'

const Background = () => {
  const cryptoImgs = [
    "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=040",
    "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=040",
    "https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=040",
    "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=040",
    "https://cryptologos.cc/logos/solana-sol-logo.svg?v=040",
    "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=040",
    "https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=040",
    "https://cryptologos.cc/logos/pepe-pepe-logo.svg?v=040",
  ];
  return (
    <div className={styles.background}>
      <img src={cryptoImgs[0]} />
      <img src={cryptoImgs[1]} />
      <img src={cryptoImgs[2]} />
      <img src={cryptoImgs[3]} />
      <img src={cryptoImgs[4]} />
      <img src={cryptoImgs[5]} />
      <img src={cryptoImgs[6]} />
      <img src={cryptoImgs[7]} />
    </div>
  );
};

export default Background;
