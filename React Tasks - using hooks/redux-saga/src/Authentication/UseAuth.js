import { useContext } from "react";
import { context } from "./AuthProvider";

export const UseAuth = () => {
  return useContext(context);
};
