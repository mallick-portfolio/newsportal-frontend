'use client'
import React from "react";
import ReduxProvider from "../store/ReduxProvider";

const layout = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default layout;
