/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "../Dialog/style";
import Dialog from "../Dialog";
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

function ChooseButton({ title, childs }) {
  const [selected, setSelected] = useState("");
  const [price, setPrice] = useState("");

  const Pricing = (value) => {
    const data = price;
  };

  const selectStyle = (value) => {
    return (
      value === selected &&
      css`
        background-color: #ff5c5c;
        color: white;
      `
    );
  };

  return (
    <div className="chooseContent">
      <span>{title}</span>
      <div className="choose">
        {childs.map((child) => {
          return (
            <>
              <S.Child
                key={child.id}
                className="fruit"
                onClick={() => {
                  setSelected(child);
                  if (child === "300ml") {
                    Pricing(setPrice("500원"));
                    console.log("5");
                  } else {
                    Pricing(setPrice("800원"));
                    console.log("8");
                  }
                }}
                css={() => selectStyle(child)}
              >
                {child}
              </S.Child>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ChooseButton;
