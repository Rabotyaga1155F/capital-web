import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import vk from "@/assets/images/vk.png";
import whatsapp from "@/assets/images/whatsapp.png";



const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.secWrapper}>
          <a target={'_blank'} href="https://api.whatsapp.com/send/?phone=79090091110&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%0A%0A&type=phone_number&app_absent=0">
              <Image

                  className={styles.img}
                  width={40}
                  height={40}
                  src={whatsapp}
                  alt={"whatsapp"}
              />
          </a>
          <a target={'_blank'} href="https://vk.com/kapital_hr">
              <Image
                  className={styles.img}
                  width={40}
                  height={40}
                  src={vk}
                  alt={"vk"}
              />
          </a>
      </div>
    </div>
  );
};

export default Footer;
