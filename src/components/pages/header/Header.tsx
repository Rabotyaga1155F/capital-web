"use client";
import React, { FC, useRef } from "react";
import styles from "./header.module.scss";
import Image from "next/image";

interface IHeaderProps {
  referAbout: any;
  referServices: any;
  referForm: any;
  referContacts: any;
}

const Header: FC<IHeaderProps> = ({
  referAbout,
  referServices,
  referForm,
  referContacts,
}) => {
  const scrollToAbout = () => {
    if (referAbout && referAbout.current) {
      referAbout.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToServices = () => {
    if (referServices && referServices.current) {
      referServices.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToForm = () => {
    if (referForm && referForm.current) {
      referForm.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToContacts = () => {
    if (referContacts && referContacts.current) {
      referContacts.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className={styles.head}>
      <Image src={""} alt={"Logo"} />
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li>
            <button onClick={scrollToAbout}>О нас</button>
          </li>
          <li>
            <button onClick={scrollToServices}>Услуги</button>
          </li>
          <li>
            <button onClick={scrollToForm}>Оставить заявку</button>
          </li>
          <li>
            <button onClick={scrollToContacts}>Контакты</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
