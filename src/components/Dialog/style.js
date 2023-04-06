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
  width: 480px;
  height: 630px;
  background: #191919;
  background-color: rgba(0, 0, 0, 0.3); /* background 투명도 지정 */

  border-radius: 2px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Child = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c5c5c5;
  border-radius: 10px;
  width: 85px;

  height: 34px;
  color: #c5c5c5;
  font-size: 14px;
  font-weight: bolder;
  cursor: pointer;
`;

export const orderBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  width: 370px;
  height: 460px;
  background-color: white;
  border-radius: 10px;
`;

export const orderContent = styled.div`
  padding: 20px 20px 20px 40px;
  height: 45vh;

  .deleteContent {
    display: flex;
    justify-content: flex-end;

    .delete {
      color: black;
      cursor: pointer;
      font-size: 13px;
    }
  }

  .chooseContent {
    width: 100%;
    margin-top: 13px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    color: black;

    span {
      font-weight: 500;
      color: black;
    }

    .choose {
      display: flex;

      .fruit {
        margin-top: 10px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #c5c5c5;
        border-radius: 10px;
        width: 85px;

        height: 34px;

        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }

  .totalContent {
    border-top: 1.1px solid #c5c5c5;
    width: 90%;
    display: flex;
    justify-content: flex-end;
    margin: 80px 0 20px 0;

    span {
      margin-top: 5px;
      color: #c5c5c5;
      font-size: 13px;
    }
  }

  .orderButton {
    display: flex;
    justify-content: center;

    button {
      margin-top: 10px;
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ff5c5c;
      border-radius: 10px;
      background-color: white;
      width: 110px;
      height: 40px;
      color: #ff5c5c;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;

      &:hover {
        background-color: #ff5c5c;
        color: white;
      }
    }
  }
`;
