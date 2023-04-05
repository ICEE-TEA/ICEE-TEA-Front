import React from "react";
import * as S from "./style";

function Payment() {
  return (
    <S.backCenter>
      <S.WhiteBox>
        <div className="paymentContent">
          <div className="imgContent">
            <S.iceImg src="https://media.discordapp.net/attachments/956190154454876183/1093197514326413332/image.png?width=870&height=650" />
          </div>
          <span className="order">주문이 완료되었습니다!</span>
          <span className="account">계좌 : 7777-01-544-8431 김하온 </span>
        </div>
      </S.WhiteBox>
    </S.backCenter>
  );
}

export default Payment;
