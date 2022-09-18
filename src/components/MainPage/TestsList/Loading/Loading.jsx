import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from "./styles.module.scss";
const Loading = () => {
  return (
    <div className={styles.loading}>
      <p>Загрузка</p>
      <PropagateLoader color="#ffffff" width={5} />
    </div>
  );
};

export default Loading;
