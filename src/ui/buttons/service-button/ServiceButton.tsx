import React, { ButtonHTMLAttributes, FC } from "react";

interface IServiceButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ServiceButton: FC<IServiceButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        " rounded-[100px] py-2 px-5 text-[15px] font-light border-[2px] border-[#1DA838] block hover:bg-green-500"
      }
    >
      {children}
    </button>
  );
};

export default ServiceButton;
