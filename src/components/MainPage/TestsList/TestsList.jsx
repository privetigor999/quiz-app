import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTests } from "../../../redux/features/testSliсe";
import styles from "./styles.module.scss";
import Test from "./Test/Test";
import Loading from "./Loading/Loading";
import Error from "./Error/Error";
import Quiz from "../Quiz/Quiz";

const TestsList = () => {
  const dispatch = useDispatch();
  const { tests, loading, error, indexTest, inputValue } = useSelector(
    (state) => state.tests
  );
  React.useEffect(() => {
    dispatch(getTests());
  }, []);
  return (
    <div className={styles.testLists}>
      {loading && <Loading />}
      {error && <Error />}
      {indexTest < 0 ? (
        tests
          ?.filter((test) =>
            test.name.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((test) => <Test key={test.id} {...test} />)
      ) : (
        <Quiz />
      )}
    </div>
  );
};

export default TestsList;
