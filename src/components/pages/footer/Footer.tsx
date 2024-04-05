import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import vk from "@/assets/images/vk.png";
import whatsapp from "@/assets/images/whatsapp.png";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.secWrapper}>
        <Image
          className={styles.img}
          width={40}
          height={40}
          src={whatsapp}
          alt={"whatsapp"}
        />
        <Image
          className={styles.img}
          width={40}
          height={40}
          src={vk}
          alt={"vk"}
        />
      </div>
    </div>
  );
};

export default Footer;
