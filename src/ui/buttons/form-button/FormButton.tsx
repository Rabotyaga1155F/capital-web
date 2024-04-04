import React, { ButtonHTMLAttributes, FC } from "react";
import {IFormButtonProps} from "@/ui/buttons/form-button/form-button.types";

const FormButton: FC<IFormButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        " rounded-[100px] text-white py-2 px-5 text-[15px] font-light border-[2px] border-gray-300 block hover:bg-green-500 mt-6"
      }
    >
      {children}
    </button>
  );
};

export default FormButton;
