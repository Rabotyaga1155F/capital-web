import React from "react";
import styles from "@/ui/service-right/service-right.module.scss";
import ServiceButton from "@/ui/buttons/service-button/ServiceButton";
import Image from "next/image";
import service1 from "@/assets/images/service1.jpg";

const ServiceRight = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Image className={styles.image} src={service1} alt={"Service1"} />
      </div>
      <div className={styles.right}>
        <h1 className={styles.headText}>Для кандидатов</h1>
        <h2 className={styles.smallText}>
          Отправьте свое резюме на metropolis@metropolis.ur.ru и мы сообщим,
          есть ли у нас вакансии, соответствующие вашему профилю.
        </h2>
        <h2 className={styles.smallText}>
          Также вы можете посмотреть наши открытые вакансии.
        </h2>
        <ServiceButton>Посмотреть вакансии</ServiceButton>
      </div>
    </div>
  );
};

export default ServiceRight;
