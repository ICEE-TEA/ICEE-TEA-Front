import styled from "styled-components";

export const WhiteBox2 = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 380px;
  height: 500px;
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

  .errorName {
    color: #ff5c5c;
    font-size: 11px;
    position: relative;
    font-weight: 500;
    bottom: 2px;
  }

  .errorPasswordCheck {
    color: #ff5c5c;
    font-size: 11px;
    position: relative;
    bottom: 2px;
    font-weight: 500;
  }

  .errorPasswordReg {
    color: #ff5c5c;
    font-size: 11px;
    position: relative;
    bottom: 2px;
    font-weight: 500;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .allContainer {
    margin-top: 10px;
  }

  .loginBack {
    cursor: pointer;
    margin-top: 10px;
    font-weight: 500;
    color: #ff5c5c;
    font-size: 14px;
    display: flex;
    justify-content: center;
  }

  .errorContainer {
    width: 78%;
    position: relative;
    margin-top: 2px;
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

  .next {
    display: flex;
    flex-direction: column;
  }
`;

export const checkPassword = styled.input`
  width: 300px;
  height: 50px;
  background-color: #f1f1f5;
  border: 0;
  text-indent: 10px;
  border-radius: 7px;
  outline: none;
`;
