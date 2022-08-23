import React from "react";
import { BrowserRouter } from "react-router-dom";
import Marketing from "./components/Marketing";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <>
          <Header />
          <Marketing />
        </>
      </BrowserRouter>
    </StylesProvider>
  );
};
