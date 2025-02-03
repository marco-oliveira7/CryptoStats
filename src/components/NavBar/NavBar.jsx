import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { CoinContext } from "../../context/CoinContext";

function NavBar() {
  const {setCurrency} = useContext(CoinContext);

  function handlerCurrency(e) {
    if(e.target.value === 'usd'){
      setCurrency({name: 'usd', symbol: '$'})
    }else if(e.target.value === 'brl'){
      setCurrency({name: 'brl', symbol: 'R$'})
    }
  }

  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_#1f253d_0%,_#090a0f_100%)] w-full flex justify-center items-center py-6 font-semibold text-white">
      <ul className="flex justify-evenly w-1/2">
        <li className="">Home</li>
        <li className={styles.prices}>Prices</li>
        <li className={styles.features}>Features</li>
      </ul>
      <div className="w-1/2 flex justify-center">
        <select className="mr-10" onChange={handlerCurrency}>
          <option
            value="usd"
            className={styles.options}
          >
            USD
          </option>
          <option
            value="brl"
            className={styles.options}
          >
            BRL
          </option>
        </select>
        <button className={styles.singUp}>Sing Up</button>
      </div>
      <div className="animation"></div>
    </div>
  );
}

export default NavBar;
