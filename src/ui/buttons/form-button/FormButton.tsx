import React, { ButtonHTMLAttributes, FC } from "react";
import { IFormButtonProps } from "@/ui/buttons/form-button/form-button.types";
import styles from "./form-button.module.scss";

const FormButton: FC<IFormButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.wrapper}>
      {children}
    </button>
  );
};

export default FormButton;
