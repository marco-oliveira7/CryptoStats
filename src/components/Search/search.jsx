import React, { useState } from "react";
import styles from './search.module.css'

function search() {
  const [coin, setCoin] = useState('')

  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        className={styles.searchBox}
        value={coin}
        onChange={(e) => setCoin(e.target.value)}
      />
      <button className={styles.searchButton}>Search</button>
    </div>
  );
}

export default search;
