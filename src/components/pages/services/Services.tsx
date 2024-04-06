import React, { FC } from "react";
import styles from "./services.module.scss";
import ServiceLeft from "@/ui/service-left/ServiceLeft";
import ServiceRight from "@/ui/service-right/ServiceRight";

interface IServicesProps {
  refer: any;
    formRef:any;
}

const Services: FC<IServicesProps> = ({ refer,formRef }) => {
  return (
      <>
        <div ref={refer} className={'h-20'}></div>
        <div className={styles.wrapper}>
          <div className={styles.secWrapper}>
            <h1  className={styles.headerText}>Услуги</h1>
            <ServiceLeft refer={formRef}/>
            <div className={"h-10"}></div>
            <ServiceRight refer={formRef}/>
          </div>
        </div>
      </>
  );
};

export default Services;
