import * as S from "./style";
import React from "react";

function Login() {
  return (
    <S.backCenter>
      <S.WhiteBox>
        <div className="allContainer">
          <div className="contentCenter">
            <span className="login">LOGIN</span>
          </div>
          <div className="content">
            <S.emailInput placeholder="이메일을 입력해주세요." />
            <S.passwordInput placeholder="비밀번호를 입력해주세요." />
            <S.confirmButton>확인</S.confirmButton>
            <div>
              <span className="">Sign Up</span>
            </div>
          </div>
        </div>
      </S.WhiteBox>
    </S.backCenter>
  );
}

export default Login;
