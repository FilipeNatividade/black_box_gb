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
  background-color: #eb6d03;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonsDiv = styled.div`
  align-items: center;
  background-color: #eb6d03;
  display: flex;
  justify-content: center;
  width: 80%;
`;

export const ButtonCompanies = styled.button`
  background-color: #fa821f;
  box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  font-size: 16px;
  font-weight: bold;
  height: 32px;
  margin: 15px;
  width: 200px;
`;

export const ButtonDeleteCompanies = styled.button`
  font-size: 20px;
  font-weight: bold;
`;

export const ButtonAddCompanies = styled(ButtonCompanies)`
  border-radius: 50px;
  font-size: 20px;
  width: 32px;
`;
export const RoundsNBlackout = styled.div`
  font-size: 12px;
  margin: 15px;
  span {
    background-color: #fff;
    border-radius: 3px;
    color: #737373;
    font-weight: bold;
    padding: 2px 5px;
  }
`;

export const InfoMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
`;

export const InfoDiv = styled.div`
  align-items: center;
  display: flex;
  font-weight: bold;
  font-size: 14px;
  justify-content: space-between;
  margin: 10px auto;
  width: 90%;
  span {
    align-items: center;
    background-color: #fff;
    border-radius: 50px;
    color: #2afaa5;
    display: flex;
    min-height: 35px;
    justify-content: center;
    width: 140px;
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
