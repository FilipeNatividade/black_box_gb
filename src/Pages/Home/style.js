import styled from "styled-components";

export const Container = styled.div`
  align-items:center;
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
  width: 100%;
`;
export const BackButton = styled.button`
  background-image: url("./images/back_button.svg");
  background-color: transparent;
  height: 64px;
  margin: 15px;
  width: 64px;
`;

