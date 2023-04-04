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
  height: 450px;
  background: white;
  border-radius: 2px;
  border-radius: 7px;

  .welcome {
    color: #fe5734;
    font-weight: bold;
    font-size: 35px;
  }

  .contentCenter {
    display: flex;
    justify-content: center;
  }
`;
