import React, { ButtonHTMLAttributes } from "react";

export interface IFormButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
