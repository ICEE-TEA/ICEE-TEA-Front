import * as S from "./style";
import React from "react";

function Login() {
  return (
    <S.backCenter>
      <S.WhiteBox>
        <div className="contentCenter">
          <span className="login">LOGIN</span>
        </div>
        <div className="content">
          <div>
            <S.emailInput placeholder="이메일을 입력해주세요." />
            <S.passwordInput placeholder="비밀번호를 입력해주세요." />
          </div>
          <S.confirmButton />
        </div>
      </S.WhiteBox>
    </S.backCenter>
  );
}

export default Login;
