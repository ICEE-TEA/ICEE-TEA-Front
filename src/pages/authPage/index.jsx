import React from "react";
import * as S from "../../components/style";
import { useState } from "react";
import axios from "axios";

function Auth() {
  const [email, setEmail] = useState("");
  const idCheck = /^[s][0-9]{2}[0][0-9]{2}@[g][s][m][.][h][s][.][k][r]$/;

  const sendEmail = () => {
    if (idCheck.test(email)) {
      axios
        .post(
          "https://port-0-icee-tea-server-duzu222alg58k27h.sel3.cloudtype.app/",
          {
            header: {},
            body: {
              email: email,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("이메일 형식을 다시 확인해주세요. ex) s2x0xx@gsm.hs.kr");
    }
  };

  return (
    <S.backCenter>
      <S.WhiteBox>
        <div className="allContainer">
          <div className="contentCenter">
            <span className="login">Welcome!</span>
          </div>
          <div className="content">
            <div>
              <S.emailInputAuth
                placeholder="이메일을 입력해주세요. "
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <S.authButton onClick={sendEmail}>인증</S.authButton>
            </div>
            <S.passwordInput
              type="password"
              placeholder="인증번호를 입력해주세요."
            />
            <div className="authConfirm"></div>
            <div className="signUpContent">
              <a>인증번호가 일치하지 않습니다.</a>
            </div>
            <S.confirmButton>확인</S.confirmButton>
          </div>
        </div>
      </S.WhiteBox>
    </S.backCenter>
  );
}

export default Auth;
