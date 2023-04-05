import React from "react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <S.backCenter>
      <S.WhiteBox>
        <div className="userContent">
          <FontAwesomeIcon className="imgIcon" icon={faUser} />
          <span>이정우 님</span>
        </div>
        <div className="iceTeaCenter">
          <S.iceTeaImg src="https://media.discordapp.net/attachments/956190154454876183/1092985075253125130/image.png?width=388&height=648" />
          <S.orderButton>주문하기</S.orderButton>
        </div>
      </S.WhiteBox>
    </S.backCenter>
  );
}

export default Main;