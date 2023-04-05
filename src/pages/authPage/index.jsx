import React from "react";
import * as S from "../../components/style";

function Auth() {
  return (
    <S.backCenter>
      <S.WhiteBox>
        <div className="allContainer">
          <div className="contentCenter">
            <span className="login">Welcome!</span>
          </div>
          <div className="content">
            <div>
              <S.emailInputAuth placeholder="이메일을 입력해주세요." />
              <S.authButton>인증</S.authButton>
            </div>
            <S.passwordInput
              type="password"
              placeholder="인증번호를 입력해주세요."
            />
            <S.confirmButton>확인</S.confirmButton>
            <div className="signUpContent"></div>
          </div>
        </div>
      </S.WhiteBox>
    </S.backCenter>
  );
}

export default Auth;
