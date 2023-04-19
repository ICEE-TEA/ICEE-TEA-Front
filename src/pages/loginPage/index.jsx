import * as S from "../../components/style";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const reg_id = /[s][0-9][0-9][0][0-9][0-9][@][g][s][m][.][h][s][.][k][r]/; //학교 이메일

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const idCheck = /[s][0-9][0-9][0][0-9][0-9][@][g][s][m][.][h][s][.][k][r]/; //학교 이메일
  const pwCheck = /^[A-Za-z0-9]{8,20}$/;

  const navigate = useNavigate();

  const onClickConfirm = (page) => {
    navigate(page);
  };

  const emailCheck = (email) => {
    // return idCheck.test(email);
    if (email.match(idCheck) === null) {
      //형식에 맞지 않을 경우 아래 콘솔 출력
      console.log("학교 이메일 형식을 확인해주세요");
      document.querySelector(".errorEmail").classList.remove("hidden"); // hidden 클래스 삭제
    } else {
      // 맞을 경우 출력
      console.log("학교 이메일이 맞습니다!");
      document.querySelector(".errorEmail").classList.add("hidden"); // hidden 클래스 추가
    }
  };

  const passwordCheck = (password) => {
    if (password.match(pwCheck) === null) {
      //형식에 맞지 않을 경우 아래 콘솔 출력
      console.log("비밀번호 형식을 확인해주세요");
      document.querySelector(".errorPassword").classList.remove("hidden"); // hidden 클래스 삭제
    } else {
      // 맞을 경우 출력
      console.log("비밀번호 형식이 맞아요");
      document.querySelector(".errorPassword").classList.add("hidden"); // hidden 클래스 추가
    }
  };

  return (
    <S.backCenter>
      <S.WhiteBox>
        <div className="allContainer">
          <div className="contentCenter">
            <span className="login">LOGIN</span>
          </div>
          <div className="content">
            <S.emailInput
              placeholder="이메일을 입력해주세요."
              onChange={(e) => {
                setEmail(e.target.value);
                emailCheck(e.target.value);
              }}
            />
            <div className="errorContainer">
              <span className="errorEmail hidden">
                학교 이메일을 다시 확인하세요.
              </span>
            </div>
            <S.passwordInput
              onChange={(e) => {
                setPassword(e.target.value);
                passwordCheck(e.target.value);
              }}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
            <div className="errorContainer pwError">
              <span className="errorPassword hidden">
                비밀번호를 다시 확인해주세요.
              </span>
            </div>
            <div className="nextContainer">
              <S.confirmButton>확인</S.confirmButton>
              <div className="signUpContent">
                <span
                  onClick={() => {
                    onClickConfirm("/auth");
                  }}
                >
                  Sign Up
                </span>
              </div>
            </div>
          </div>
        </div>
      </S.WhiteBox>
    </S.backCenter>
  );
}

export default Login;
