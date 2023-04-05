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
  background-size: cover;
  border-radius: 2px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
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
      font-size: 15px;
    }
  }

  .flavorContent {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    span {
      font-weight: 500;
    }

    .fruitFlavor {
      display: flex;

      .fruit {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #c5c5c5;
        border-radius: 10px;
        width: 85px;
        height: 34px;
        color: #c5c5c5;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
      }

      .lemon {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
`;
