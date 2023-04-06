/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "../Dialog/style";
import Dialog from "../Dialog";
import ChooseText from "./text";
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

function ChooseButton({ title, childs }) {
  const [selected, setSelected] = useState("");

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
        {childs.map((child, id) => {
          return (
            <S.Child
              key={id}
              className="fruit"
              css={() => selectStyle(child)}
              onClick={() => {
                setSelected(child);
              }}
            >
              {child}
            </S.Child>
          );
        })}
      </div>
    </div>
  );
}

export default ChooseButton;
