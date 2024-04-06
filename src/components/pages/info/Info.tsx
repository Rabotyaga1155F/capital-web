import React, { FC } from "react";
import styles from "./info.module.scss";

interface IAboutProps {
  refer: any;
}

const Info: FC<IAboutProps> = ({ refer }) => {
  const scrollToForm = () => {
    if (refer && refer.current) {
      refer.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className={styles.backImage}>
      <div className={styles.container}>
        <h1 className={styles.mainText}>
          Мы помогаем привлекать <br/> и нанимать лучших
        </h1>

        <h2 className={styles.smallText}>

        </h2>
        <button onClick={scrollToForm} className={styles.scrollButton}>
          Оставить заявку
        </button>
      </div>
    </div>
  );
};

export default Info;
