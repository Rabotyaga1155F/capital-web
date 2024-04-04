import React, { FC } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import logo from "../../assets/images/images.jpg";

const Header: FC = () => {
  return (
    <header className={styles.head}>
      <Image src={""} alt={"Logo"} />
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li>
            <button>О нас</button>
          </li>
          <li>
            <button>Услуги</button>
          </li>
          <li>
            <button>Оставить заявку</button>
          </li>
          <li>
            <button>Контакты</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
