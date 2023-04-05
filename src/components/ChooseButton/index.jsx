import React from "react";
import * as S from "../Dialog/style";

function ChooseButton({ title, childs }) {
  return (
    <div className="flavorContent">
      <span>{title}</span>
      <div className="fruitFlavor">
        {childs.map((child) => {
          return <div className="fruit">{child}</div>;
        })}
      </div>
    </div>
  );
}

export default ChooseButton;
