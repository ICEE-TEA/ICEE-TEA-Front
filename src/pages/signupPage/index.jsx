import * as S from "../../components/style";
import * as C from "./style";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function Signup() {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [CheckPassword, setCheckPassword] = useState(""); //비동기 처리라 느림.

  let name, password, CheckPassword;

  const nameReg = /^([가-힣]{2,3})$/;
  // const pwCheck = /^[A-Za-z0-9]{8,20}$/;
  const pwCheck = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,20}$/;

  const navigate = useNavigate();

  const onClickConfirm = (page) => {
    navigate(page);
  };

  const nameCheck = (name) => {
    if (name.match(nameReg) === null) {
      console.log("이름의 형식을 확인해주세요");
      document.querySelector(".errorName").classList.remove("hidden");
    } else {
      console.log("이름의 형식이 맞습니다.");
      document.querySelector(".errorName").classList.add("hidden");
    }
  };

  const passwordCheck = (password) => {
    if (password.match(pwCheck) === null) {
      //형식에 맞지 않을 경우 아래 콘솔 출력
      console.log("비밀번호 형식을 확인해주세요");
      document.querySelector(".errorPasswordReg").classList.remove("hidden"); // hidden 클래스 삭제
    } else {
      // 맞을 경우 출력
      console.log("비밀번호 형식이 맞아요");
      document.querySelector(".errorPasswordReg").classList.add("hidden"); // hidden 클래스 추가
    }
  };

  const passwordConfirm = (Confirm) => {
    if (password === CheckPassword) {
      document.querySelector(".errorPasswordCheck").classList.add("hidden");
      console.log("맞았어요!");
    } else {
      document.querySelector(".errorPasswordCheck").classList.remove("hidden");
      console.log("비밀번호가 일치하지 않아요.");
    }
  };

  return (
    <S.backCenter>
      <C.WhiteBox2>
        <div className="allContainer">
          <div className="contentCenter">
            <span className="login">Sign Up</span>
          </div>
          <div className="content">
            <S.emailInput
              className="email"
              placeholder="이름을 입력해주세요."
              onChange={(e) => {
                name = e.target.value;
                nameCheck(e.target.value);
              }}
            />
            <div className="errorContainer">
              <span className="errorName hidden">
                이름을 확인해주세요. (2~3글자 한글)
              </span>
            </div>

            <S.passwordInput
              className="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={(e) => {
                password = e.target.value;
                passwordCheck(e.target.value);
              }}
            />
            <div className="errorContainer">
              <span className="errorPasswordReg hidden">
                (영소문자, 숫자, 특수문자 결합 8~20자 내)
              </span>
            </div>
            <C.checkPassword
              className="passwordConfirm"
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요."
              onChange={(e) => {
                CheckPassword = e.target.value;
                passwordConfirm(e.target.value);
              }}
            />
            <div className="errorContainer">
              <span className="errorPasswordCheck hidden">
                비밀번호가 일치하지 않습니다.
              </span>
            </div>
            <div className="next">
              <S.confirmButton
                onClick={(e) => {
                  const errorContainers =
                    document.querySelectorAll(".errorContainer");
                  let allHidden = true;

                  errorContainers.forEach((container) => {
                    if (!container.querySelector(".hidden")) {
                      allHidden = false;
                    }
                  });

                  // input 값이 null인지 체크
                  if (!name || !password || !CheckPassword) {
                    console.log("모든 항목을 입력해주세요.");
                    return;
                  }
                  //위 코드에서 if (!name || !password || !CheckPassword) 부분을 추가하여 input 값이 null인 경우 console.log()를 실행하고 함수를 종료.
                  //그렇지 않은 경우에만 navigate 함수가 실행.
                  if (allHidden) {
                    onClickConfirm("/login");
                  }
                }}
              >
                확인
              </S.confirmButton>
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
