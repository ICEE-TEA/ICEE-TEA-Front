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
  width: 450px;
  height: 600px;
  background: white;
  border-radius: 2px;
  border-radius: 7px;

  .userContent {
    display: flex;
    justify-content: flex-end;
  }
  .imgIcon {
    margin-right: 5px;
    position: relative;
    top: 3px;
    color: #999999;
    font-size: 14px;
    cursor: pointer;
  }

  span {
    color: #999999;
    font-weight: 500;
    cursor: pointer;
  }

  .iceTeaCenter {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const iceTeaImg = styled.img`
  width: 240px;
  height: 400px;
  margin-top: 50px;
`;

export const orderButton = styled.button`
  margin-top: 20px;
  width: 130px;
  height: 45px;
  background-color: #ff5c5c;
  color: white;
  font-weight: bold;
  border: 0;
  font-size: 18px;
  border-radius: 7px;
  cursor: pointer;
`;
