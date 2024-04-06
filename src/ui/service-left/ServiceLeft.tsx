import React, {FC} from "react";
import styles from "./service-left.module.scss";
import ServiceButton from "@/ui/buttons/service-button/ServiceButton";
import Image from "next/image";
import service1 from "@/assets/images/sostavlenierezume.png";


interface IServiceLeftProps{
    refer:any
}

const ServiceLeft:FC<IServiceLeftProps> = ({refer}) => {

    const scrollToForm = () => {
        if (refer && refer.current) {
            refer.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1 className={styles.headText}>Услуги компаниям</h1>
        <h2 className={styles.smallText}>
          Подбор персонала
        </h2>
        <h2 className={styles.smallText}>
          Консультирование по подбору <br/> персонала в компании
        </h2>
        <div className={styles.buttondiv}>
            <ServiceButton onClick={scrollToForm}>Заказать расчет стоимости</ServiceButton>
        </div>
      </div>
      <div className={styles.right}>
        <Image className={styles.image} src={service1} alt={"Service1"} />
      </div>
    </div>
  );
};

export default ServiceLeft;
