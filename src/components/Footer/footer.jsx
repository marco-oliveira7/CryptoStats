import React, { useEffect } from "react";
import styles from "./footer.module.css";

function footer() {
  let body = document.body,
    html = document.documentElement;

  let docHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  let winHeight = window.innerHeight;
  
  useEffect(() => {
    

    if (docHeight > winHeight) {
      const footer = document.querySelector('footer')
      footer.classList.remove('scroll')
    } else {
      const footer = document.querySelector('footer')
      footer.classList.add('scroll')
      const main = document.querySelector('.main')
      main.style.marginBottom = 'calc(1/7 * 100vh)'
    }
  }, [body]);

  return (
    <footer className={styles.footer}>
      <p>Copyright @ 2024 CryptoStats - All Right Reserved</p>
    </footer>
  );
}

export default footer;
