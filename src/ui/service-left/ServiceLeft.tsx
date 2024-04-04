import React from "react";
import styles from "./service-left.module.scss";
import ServiceButton from "@/ui/buttons/service-button/ServiceButton";
import Image from "next/image";
import service1 from "@/assets/images/service1.jpg";

const ServiceLeft = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1 className={styles.headText}>Для компаний</h1>
        <h2 className={styles.smallText}>
          Подбор специалистов среднего и высшего звена в г. Екатеринбурге и
          Свердловской области.
        </h2>
        <h2 className={styles.smallText}>
          Подбор персонала в других городах РФ и Республики Беларусь.
        </h2>
        <ServiceButton>Подробнее</ServiceButton>
      </div>
      <div className={styles.right}>
        <Image className={styles.image} src={service1} alt={"Service1"} />
      </div>
    </div>
  );
};

export default ServiceLeft;
