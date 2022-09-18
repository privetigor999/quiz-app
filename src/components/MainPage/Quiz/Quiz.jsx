import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIndexTest } from "../../../redux/features/testSliсe";
import styles from "./styles.module.scss";
import closeBtn from "./../../../images/close.png";

const Quiz = () => {
  const dispatch = useDispatch();
  const { tests, indexTest } = useSelector((state) => state.tests);
  const choosenTest = tests[indexTest].questions;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const answers = choosenTest[currentQuestion].answers;
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuesion = currentQuestion + 1;
    if (nextQuesion < choosenTest.length) {
      setCurrentQuestion(nextQuesion);
    }
    if (nextQuesion === choosenTest.length) {
      setShowScore(true);
    }
  };

  const handleCloseQuiz = () => {
    dispatch(setIndexTest(-1));
  };
  const colorResult =
    Math.round((100 / choosenTest.length) * score) >= 60
      ? styles.greenResult
      : styles.redResult;

  const changeWordQuestions = (num) => {
    num = String(num).slice(-1);
    switch (num) {
      case "1":
        return "вопрос";
      case "2":
      case "3":
      case "4":
        return "вопроса";
      default:
        return "вопросов";
    }
  };

  return (
    <div className={styles.mainWrapper}>
      {showScore ? (
        <div className={styles.resultBlock}>
          <p>
            Ваш результат
            <span className={colorResult}>
              {Math.round((100 / choosenTest.length) * score)} %
            </span>
          </p>
          <p>
            Вы ответили на {score} {changeWordQuestions(score)} из{" "}
            {choosenTest.length}{" "}
          </p>
          <button className={styles.backBtn} onClick={handleCloseQuiz}>
            Вернуться на главную
          </button>
        </div>
      ) : (
        <>
          <div className={styles.questionBlock}>
            <div className={styles.countQuestion}>
              Вопрос {currentQuestion + 1} / {choosenTest.length}
            </div>
            <h5>{choosenTest[currentQuestion].questionText}</h5>
            <img src={choosenTest[currentQuestion].answerImage} alt="img" />
          </div>
          <div className={styles.answerBlock}>
            {answers.map((ans) => (
              <button
                key={ans.answerText}
                onClick={() => handleAnswerClick(ans.isCorrect)}
              >
                {ans.answerText}
              </button>
            ))}
          </div>
          <div className={styles.closeButton} onClick={handleCloseQuiz}>
            <img src={closeBtn} alt="close" />
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
