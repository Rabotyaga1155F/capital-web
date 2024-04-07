import React, { FC, useState } from "react";
import styles from "./form.module.scss";
import FormButton from "@/ui/buttons/form-button/FormButton";

import { SubmitHandler, useForm } from "react-hook-form";
import { IUserForm } from "@/types/user-form.types";
import { sendMessageToEmail } from "@/utils/send-message/serverActions";

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

  const onSubmit: SubmitHandler<IUserForm> = (data) => {
    try {
      sendMessageToEmail(
        `Имя - ${data.name} \nНомер телефона - ${data.phone} \nПочта - ${data.email} \nСообщение - ${data.text}`,
      );
      setIsFormSend(true);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div ref={refer} className={styles.wrapper}>
      <div className={styles.secWrapper}>
        {!isFormSend ? (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.headText}>Отправить запрос</h1>

            <div className={styles.fields}>
              <div>
                <input
                  placeholder={"Полное имя*"}
                  className={styles.formInput}
                  type={"text"}
                  {...register("name", { required: true })}
                />
                <p className={styles.errorText}>
                  {errors.name && <span>Поле обязательно для заполнения</span>}
                </p>
              </div>
              <div>
                <input
                  placeholder={"Ваш email"}
                  className={styles.formInput}
                  type={"text"}
                  {...register("email", {
                    pattern: {
                      value:
                        /^$|^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)$/,
                      message: "Неверный формат email",
                    },
                  })}
                />
                <p className={styles.errorText}>
                  {errors?.email && <span>{errors?.email.message}</span>}
                </p>
              </div>
              <div>
                <input
                  placeholder={"Телефон*"}
                  className={styles.formInput}
                  type={"text"}
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Поле обязательно для заполнения",
                    },
                    pattern: {
                      value: /^(?:\+7|8)\d{10}$/,
                      message: "Неверный номер",
                    },
                  })}
                />
                <p className={styles.errorText}>
                  {errors?.phone && <span>{errors?.phone.message}</span>}
                </p>
              </div>
              <div>
                <input
                  placeholder={"Опишите запрос*"}
                  className={styles.formInput}
                  type={"text"}
                  {...register("text", { required: true })}
                />
                <p className={styles.errorText}>
                  {errors.text && <span>Поле обязательно для заполнения</span>}
                </p>
              </div>
            </div>
            <FormButton>Отправить</FormButton>
            <p className={styles.footerText}>
              Нажимая на кнопку, вы даете согласие на обработку своих
              персональных данных и соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        ) : (
          <h1
            className={
              "py-40 px-60 box-border text-center font-medium text-white text-[30px]"
            }
          >
            Ожидайте звонка!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Form;
