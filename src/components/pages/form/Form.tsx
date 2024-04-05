"use client";
import React, { FC, useState } from "react";
import styles from "./form.module.scss";
import FormButton from "@/ui/buttons/form-button/FormButton";

import { useForm } from "react-hook-form";
import { IUserForm } from "@/types/user-form.types";

interface IFormProps {
  refer: any;
}

const Form: FC<IFormProps> = ({ refer }) => {
  const [isFormSend, setIsFormSend] = useState<boolean>(false);
  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IUserForm>({ mode: "onBlur" });

  return (
    <div ref={refer} className={styles.wrapper}>
      <div className={styles.secWrapper}>
        <form className={styles.form} action="">
          <h1 className={styles.headText}>Отправить запрос</h1>

          <div className={styles.fields}>
            <input
              placeholder={"Полное имя*"}
              className={styles.formInput}
              type={"text"}
            />
            <input
              placeholder={"Ваш email*"}
              className={styles.formInput}
              type={"text"}
            />
            <input
              placeholder={"Телефон*"}
              className={styles.formInput}
              type={"text"}
            />
            <input
              placeholder={"Опишите запрос*"}
              className={styles.formInput}
              type={"text"}
            />
          </div>
          <FormButton>Отправить</FormButton>
          <p className={styles.footerText}>
            Нажимая на кнопку, вы даете согласие на обработку своих персональных
            данных и соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
