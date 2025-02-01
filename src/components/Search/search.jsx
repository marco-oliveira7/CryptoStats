import React, { useState } from "react";
import styles from './search.module.css'

function search() {
  const [coin, setCoin] = useState('')

  return (
    <>
      <input
        type="text"
        className={styles.searchBox}
        value={coin}
        onChange={(e) => setCoin(e.target.value)}
      />
    </>
  );
}

export default search;
