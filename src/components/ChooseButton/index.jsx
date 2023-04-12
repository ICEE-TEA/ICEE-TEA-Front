/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "../Dialog/style";
import Dialog from "../Dialog";
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

function ChooseButton({ title, childs, PriceProps }) {
  const [selected, setSelected] = useState("");
  let price;

  const selectStyle = (value) => {
    return (
      value === selected &&
      css`
        background-color: #ff5c5c;
        color: white;
      `
    );
  };

  const Select = (child) => {
    setSelected(child);
    if (child === "300ml") {
      price = "500원";
      console.log("500원");
    } else if (child === "500ml") {
      price = "800원";
      console.log("800원");
    }
    title === "Size" && PriceProps(price);
  };

  return (
    <div className="chooseContent">
      <span>{title}</span>
      <div className="choose">
        {childs.map((child, id) => {
          const rand = Math.random();
          return (
            <React.Fragment key={rand}>
              <S.Child
                className="fruit"
                onClick={() => Select(child)}
                css={() => selectStyle(child)}
              >
                {child}
              </S.Child>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ChooseButton;
