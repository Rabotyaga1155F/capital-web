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
              <h2>г. Екатеринбург, ул.Большакова 153б, оф.301</h2>
            </div>

            <div className={styles.secondItem}>
              <h1>Телефон</h1>
              <h2><a href="tel:+79221771222">+7 (922) 177-12-22</a></h2>
            </div>

            <div className={styles.thirdItem}>
              <h1>E-mail</h1>
              <h2><a href="mailto:r911m@yandex.ru">r911m@yandex.ru</a></h2>
            </div>

            <div className={styles.fourthItem}>
            <h1>WhatsApp</h1>
              <h2><a
                  target={'_blank'}
                  href="https://api.whatsapp.com/send/?phone=79090091110&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%0A%0A&type=phone_number&app_absent=0">+7 90 900 911 10</a></h2>
            </div>
          </div>
          <div className={styles.right}>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A47f15e8251caae66ec9ed4a3eb708024dbc7b80360e8a99825c3dfdd99287ffd&amp;source=constructor"
                width="100%" height="400" frameBorder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
