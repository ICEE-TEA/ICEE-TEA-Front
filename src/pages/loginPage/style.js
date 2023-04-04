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
    width: 75%;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    span {
      cursor: pointer;
      font-size: 14px;
      color: #ff5c5c;
    }
  }
`;

export const emailInput = styled.input`
  width: 300px;
  height: 50px;
  background-color: #f1f1f5;
  border: 0;
  margin: 70px 0 20px 0;
  text-indent: 10px;
  border-radius: 7px;
`;

export const passwordInput = styled.input`
  width: 300px;
  height: 50px;
  background-color: #f1f1f5;
  border: 0;
  text-indent: 10px;
  border-radius: 7px;
`;

export const confirmButton = styled.button`
  margin-top: 60px;
  width: 300px;
  height: 50px;
  color: white;
  background-color: #ff5c5c;
  border: 0;
  font-weight: bold;
  font-size: 17px;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
