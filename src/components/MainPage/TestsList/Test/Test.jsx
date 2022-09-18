import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIndexTest } from "../../../../redux/features/testSliсe";
import styles from "./styles.module.scss";
const Test = ({ header_image, name, id, color, questions }) => {
  const dispatch = useDispatch();
  const countOfQuestions = questions.length;

  const handleChangeIndex = (id) => {
    dispatch(setIndexTest(id));
  };

  let bcImage = {
    backgroundImage: "url(" + header_image + ")",
  };

  const fontColor =
    color === "white" ? styles.whiteWrapper : styles.blackWrapper;

  return (
    <div
      className={fontColor}
      style={bcImage}
      onClick={() => handleChangeIndex(id - 1)}
    >
      <b>{name}</b>
      <div>
        всего вопросов: <span>{countOfQuestions}</span>
      </div>
      <div>
        последний результат <b>4</b>/<span>{countOfQuestions}</span>
      </div>
    </div>
  );
};

export default Test;
