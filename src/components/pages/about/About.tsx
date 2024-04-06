import React, { FC } from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import user from "@/assets/images/director.jpg";

interface IAboutProps {
  refer: any;
}

const About: FC<IAboutProps> = ({ refer }) => {
  return (
      <>
        <div className={'h-12'} ref={refer} ></div>
        <div  className={styles.container}>
          <div className={styles.row}>
            <div className={styles.left}>
              <h2 className={styles.headText}>О нас</h2>
              <h4 className={styles.smallText}>
                <b>Кадровое агентство «КАПИТАЛ» </b> оказывает услуги по подбору персонала в Уральском регионе
                с 2006 г. С 2018 года мы начали работать по всей России.
              </h4>

              <h4 className={styles.smallText}>
                Наши штатные консультанты по подбору персонала имеют опыт работы от 5 до 18 лет
                и постоянно изучают новые технологии поиска и оценки кандидатов. Занимаются поиском
                как высококвалифицированного персонала, так и массовым подбором.
              </h4>
              <h4 className={styles.smallText}>
                Мы сотрудничаем с компаниями любого масштаба (от малого до крупного),
                нам важны все клиенты, ценящие профессионализм. Мы искренне рады, что
                наши постоянные клиенты обращаются к нам вновь и вновь на протяжении многих лет.
              </h4>
            </div>
            <div className={styles.right}>
              <Image className={styles.photo} src={user} alt={"UserImage"}/>
              <h2 className={styles.name}>
                Литвяк <br/> Регина Владимировна
              </h2>
              <h2 className={styles.jobTitle}> Директор</h2>
            </div>
          </div>
        </div>
      </>
  );
};

export default About;
