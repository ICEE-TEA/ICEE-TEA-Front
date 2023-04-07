/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "../Dialog/style";
import Dialog from "../Dialog";
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
              onClick={() => {
                setSelected(child);
              }}
              css={() => selectStyle(child)}
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
