import React from "react";
import styles from "./info.module.scss";

const Info = () => {
  return (
    <div className={styles.backImage}>
      <div className={styles.container}>
        <h1 className={styles.mainText}>
          Получите <br /> высококвалифицированный <br /> персонал для своей
          компании
        </h1>

        <h2 className={styles.smallText}>
          Мы помогаем привлекать и нанимать лучших
        </h2>
        <button className={styles.scrollButton}>Оставить заявку</button>
      </div>
    </div>
  );
};

export default Info;
