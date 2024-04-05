import React, { FC } from "react";
import styles from "./contact.module.scss";

interface IContactProps {
  refer: any;
}

const Contact: FC<IContactProps> = ({ refer }) => {
  return (
    <div ref={refer} className={styles.wrapper}>
      <div className={styles.secWrapper}>
        <h1 className={styles.headerText}>Контакты</h1>
        <div className={styles.flexContainer}>
          <div className={styles.left}>
            <div className={styles.firstItem}>
              <h1>Адрес</h1>
              <h2>г. Екатеринбург, ул.Толмачева 11, 3 этаж</h2>
            </div>

            <div className={styles.secondItem}>
              <h1>Телефоны</h1>
              <h2>+7 (343) 222-0-221, 222-0-224</h2>
            </div>

            <div className={styles.thirdItem}>
              <h1>E-mail</h1>
              <h2>metropolis@metropolis.ur.ru</h2>
            </div>

            <div className={styles.fourthItem}>
              <h1>WhatsApp</h1>
              <h2>+7 912 242-82-26</h2>
            </div>
          </div>
          <div className={styles.right}>MAP</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
