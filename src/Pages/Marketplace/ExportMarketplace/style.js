import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-image: url("./images/backGroud_login.svg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`;
export const SizeContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 500px;
  padding-bottom: 50px;
  width: 100%;
`;

export const Title = styled.h3`
  align-items: center;
  background-color: #fa821f;
  box-shadow: 0 5px 5px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  font-size: 22px;
  font-weight: bold;
  height: 60px;
  justify-content: space-between;
  padding: 0 35px;
  width: 100%;
  span {
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    color: #737373;
    display: flex;
    height: 45px;
    justify-content: center;
    width: 50px;
  }
`;

export const MainContainer = styled.main`
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoDiv = styled.div`
  align-items: center;
  border-bottom: 2px solid #fa821f;
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
  width: 100%;
  div {
    align-items: center;
    background-color: #fa821f;
    border-radius: 50%;
    display: flex;
    font-weight: bold;
    font-size: 14px;
    height: 40px;
    justify-content: center;
    margin: 0 10px 0 5px;
    width: 40px;
  }
`;

export const ButtonRequest = styled.button`
  background-color: #fa821f;
  box-shadow: 0 -2px 8px 1px rgba(0, 0, 0, 0.3);
  font-size: 22px;
  font-weight: bold;
  height: 60px;
  width: 100%;
`;
