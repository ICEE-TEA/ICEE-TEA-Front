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
  width: 420px;
  height: 600px;
  background: white;
  border-radius: 2px;
  border-radius: 7px;

  .imgContent {
    margin-bottom: 80px;
  }

  .paymentContent {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .order {
    margin-bottom: 3px;
    font-size: 22px;
    font-weight: bolder;
  }

  .account {
    font-size: 11px;
    color: #999999;
    font-weight: 500;
  }
`;

export const iceImg = styled.img`
    width: :130px;
    height: 130px;

`;
