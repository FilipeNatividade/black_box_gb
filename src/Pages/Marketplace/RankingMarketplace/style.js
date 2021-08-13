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

export const Header = styled.div`
  align-items: center;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  padding: 0 35px;
  width: 100%;
  p {
    align-items: center;
    background-color: #fa821f;
    border-radius: 5px;
    display: flex;
    font-size: 22px;
    justify-content: space-between;
    padding: 3px;
    width: 160px;
  }
  span {
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    color: #737373;
    display: flex;
    height: px;
    justify-content: center;
    width: 50px;
  }
`;

export const MainContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AccumulatedHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 90%;
  h3 {
    background-color: #fa821f;
    border-radius: 5px;
    padding: 3px 10px;
  }
`;
