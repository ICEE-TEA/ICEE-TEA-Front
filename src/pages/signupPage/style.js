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
  }
`;

export const checkPassword = styled.input`
  margin-top: 20px;
  width: 300px;
  height: 50px;
  background-color: #f1f1f5;
  border: 0;
  text-indent: 10px;
  border-radius: 7px;
`;
