import * as S from "../../components/style";
import * as C from "./style";
import React from "react";
import { useNavigate } from "react-router";

function Signup() {
  const nameCheck = /^([가-힣]{2,3})$/;
  const pwCheck = /^[A-Za-z0-9]{8,20}$/;

  const navigate = useNavigate();

  const onClickConfirm = (page) => {
    navigate(page);
  };

  return (
    <S.backCenter>
      <C.WhiteBox2>
        <div className="allContainer">
          <div className="contentCenter">
            <span className="login">Sign Up</span>
          </div>
          <div className="content">
            <S.emailInput placeholder="이름을 입력해주세요." />
            <div className="errorContainer">
              <span className="errorName">이름을 확인해주세요.</span>
            </div>

            <S.passwordInput placeholder="비밀번호를 입력해주세요." />
            <div className="errorContainer">
              <span className="errorPasswordReg">
                비밀번호 형식을 확인해주세요.
              </span>
            </div>
            <C.checkPassword
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요."
            />
            <div className="errorContainer">
              <span className="errorPasswordCheck">
                비밀번호가 일치하지 않습니다.
              </span>
            </div>
            <div className="next">
              <S.confirmButton>확인</S.confirmButton>
              <span
                className="loginBack"
                onClick={() => {
                  onClickConfirm("/login");
                }}
              >
                LOGIN으로 돌아가기
              </span>
            </div>
          </div>
        </div>
      </C.WhiteBox2>
    </S.backCenter>
  );
}

export default Signup;
