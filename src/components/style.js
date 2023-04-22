import styled from "styled-components";

export const backCenter = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f1f1f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WhiteBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 380px;
  height: 400px;
  background: white;
  border-radius: 2px;
  border-radius: 7px;

  .login {
    color: #fe5734;
    font-weight: bold;
    font-size: 45px;
    display: flex;
    justify-content: center;
  }

  .contentCenter {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .allContainer {
    margin-top: 10px;
  }

  .signUpContent {
    width: 100%;
    display: flex;
    margin-left: 60px;
    margin-top: 10px;

    span {
      cursor: pointer;
      font-size: 15px;
      color: #ff5c5c;
      font-weight: 500;
    }

    a {
      font-size: 14px;
      color: #ff5c5c;
      position: relative;
      bottom: 5px;
      left: 30px;
    }
  }

  .signUpContent {
    width: 60%;
    display: flex;
    justify-content: center;
  }

  .errorContainer {
    width: 78%;

    position: relative;
  }

  .errorEmail {
    color: #ff5c5c;
    font-size: 11px;
    font-weight: 500;
  }

  .hidden {
    visibility: hidden;
  }

  .errorPassword {
    color: #ff5c5c;
    font-size: 11px;

    position: relative;
    bottom: 2px;
    font-weight: 500;
  }

  .nextContainer {
    height: 100px;
  }
`;

export const fixEmail = styled.input`
  margin-top: 30px;
  width: 300px;
  height: 50px;
  background-color: #f1f1f5;
  border: 0;
  text-indent: 10px;
  border-radius: 7px;
  outline: none;
`;

export const emailInput = styled.input`
  width: 300px;
  height: 50px;
  background-color: #f1f1f5;
  border: 0;
  margin: 70px 0 0 0;
  text-indent: 10px;
  border-radius: 7px;
  outline: none;
`;

export const SignEmailInput = styled.input`
  width: 300px;
  height: 50px;
  background-color: #f1f1f5;
  border: 0;
  margin: 20px 0 0 0;
  text-indent: 10px;
  border-radius: 7px;
  outline: none;
`;

export const passwordInput = styled.input`
  width: 300px;
  height: 50px;
  background-color: #f1f1f5;
  border: 0;
  text-indent: 10px;
  border-radius: 7px;
  outline: none;
`;

export const confirmButton = styled.button`
  width: 300px;
  height: 50px;
  color: white;
  background-color: #ff5c5c;
  border: 0;
  font-weight: bold;
  font-size: 17px;
  border-radius: 7px;
  cursor: pointer;
  outline: none;
  margin-top: 20px;

  &:hover {
    color: black;
  }
`;

export const emailInputAuth = styled.input`
  width: 220px;
  height: 50px;
  background-color: #f1f1f5;
  border: 0;
  margin: 70px 0 20px 0;
  text-indent: 10px;
  border-radius: 7px;
  outline: none;
`;

export const authButton = styled.button`
  @import url(fonts.googleapis.com/earlyaccess/notosanskr.css);

  .notosanskr * {
    font-family: "Noto Sans KR", sans-serif;
  }

  width: 70px;
  height: 50px;
  border-radius: 7px;
  font-weight: 600;
  height: 50px;
  background-color: #ff5c5c;
  border: 0;
  color: white;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
`;
