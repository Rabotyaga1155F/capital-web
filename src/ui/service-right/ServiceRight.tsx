import React, {FC} from "react";
import styles from "@/ui/service-right/service-right.module.scss";
import ServiceButton from "@/ui/buttons/service-button/ServiceButton";
import Image from "next/image";
import service1 from "@/assets/images/podbormestaraboti.jpg";


interface IServiceRightProps{
    refer:any
}

const ServiceRight:FC<IServiceRightProps> = ({refer}) => {


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
        <Image className={styles.image} src={service1} alt={"Service1"} />
      </div>
        <div className={styles.right}>
            <h1 className={styles.headText}>Соискателям</h1>
            <h2 className={styles.smallText}>
                Карьерное консультирование
            </h2>
            <h2 className={styles.smallText}>
                Составление резюме
            </h2>
            <h2 className={styles.smallText}>
                Подбор места работы
            </h2>
            <div className={styles.buttondiv}><ServiceButton onClick={scrollToForm}>Заказать расчет стоимости</ServiceButton></div>


        </div>
    </div>
  );
};

export default ServiceRight;
