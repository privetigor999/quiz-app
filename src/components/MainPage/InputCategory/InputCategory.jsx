import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInputValue } from "../../../redux/features/testSliсe";
import styles from "./styles.module.scss";
import loupePng from "./../../../images/loupe.png";
import clearPng from "./../../../images/close.png";
const InputCategory = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.tests.inputValue);

  const handleChangeInputValue = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  const handleClearInputValue = () => {
    dispatch(setInputValue(""));
  };

  const parag = !inputValue
    ? "Список всех викторин"
    : "Поиск по запросу: " + inputValue;
  return (
    <div className={styles.inputCategory}>
      <p>{parag}</p>
      <div className={styles.inputBlock}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Поиск ..."
          value={inputValue}
          onChange={(event) => handleChangeInputValue(event)}
        />
        {inputValue ? (
          <img
            src={clearPng}
            alt="clear"
            className={styles.clear}
            onClick={handleClearInputValue}
          />
        ) : (
          <img src={loupePng} alt="loupe" className={styles.loupe} />
        )}
      </div>
    </div>
  );
};

export default InputCategory;
