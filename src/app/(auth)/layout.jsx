
import React from "react";
import { montserrat } from "../layout";
import Navbar from "@/components/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;