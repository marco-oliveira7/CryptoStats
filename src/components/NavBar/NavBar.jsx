import React from "react";
import styles from './Navbar.module.css'

const NavBar = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_#1f253d_0%,_#090a0f_100%)] w-screen flex justify-center items-center py-6 font-semibold text-white nav">
      <ul className="flex justify-evenly w-1/2">
        <li className="">Home</li>
        <li className="">Prices</li>
        <li className="">Features</li>
      </ul>
      <div className="w-1/2 flex justify-center">
        <select className="mr-10">
            <option value="use" className={styles.options}>USD</option>
            <option value="use" className={styles.options}>BRL</option>
        </select>
        <button className={styles.singUp}>Sing Up</button>
      </div>
      <div className="animation"></div>
    </div>
  );
};

export default NavBar;
