import * as S from "../../components/style";
import * as C from "./style";
import React from "react";

function Signup() {
  return (
    <S.backCenter>
      <C.WhiteBox2>
        <div className="allContainer">
          <div className="contentCenter">
            <span className="login">Sign Up</span>
          </div>
          <div className="content">
            <S.emailInput placeholder="이름을 입력해주세요." />
            <S.passwordInput placeholder="비밀번호를 입력해주세요." />
            <C.checkPassword
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요."
            />
            <S.confirmButton>확인</S.confirmButton>
            <span className="loginBack">LOGIN으로 돌아가기</span>
          </div>
        </div>
      </C.WhiteBox2>
    </S.backCenter>
  );
}

export default Signup;
