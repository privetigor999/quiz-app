import React from "react";
import InputCategory from "./InputCategory/InputCategory";
import styles from "./styles.module.scss";
import TestsList from "./TestsList/TestsList";
const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <InputCategory />
      <TestsList />
    </div>
  );
};

export default MainPage;
