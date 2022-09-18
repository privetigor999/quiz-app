import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { setIndexTest } from "../../redux/features/testSliсe";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const handleClickMainBtn = () => {
    dispatch(setIndexTest(-1));
  };
  return (
    <nav>
      <Link to="/" className={styles.listItem} onClick={handleClickMainBtn}>
        Главная
      </Link>
      <div className={styles.rigthSideBlock}>
        <Link to="/record" className={styles.listItem}>
          Рекорды
        </Link>
        <Link to="/about" className={styles.listItem}>
          О нас
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
