import React, { FC } from "react";
import styles from "./services.module.scss";
import ServiceLeft from "@/ui/service-left/ServiceLeft";
import ServiceRight from "@/ui/service-right/ServiceRight";

interface IServicesProps {
  refer: any;
}

const Services: FC<IServicesProps> = ({ refer }) => {
  return (
    <div ref={refer} className={styles.wrapper}>
      <div className={styles.secWrapper}>
        <h1 className={styles.headerText}>Услуги</h1>
        <ServiceLeft />
        <div className={"h-10"}></div>

        <ServiceRight />
      </div>
    </div>
  );
};

export default Services;
