import React from "react";
import styles from "./styles.module.scss";
import loupePng from "./../../../images/loupe.png";
const InputCategory = () => {
  return (
    <div className={styles.inputCategory}>
      <div className={styles.inputBlock}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Поиск ..."
        />
        <img src={loupePng} alt="loupe" className={styles.loupe} />
      </div>
    </div>
  );
};

export default InputCategory;
