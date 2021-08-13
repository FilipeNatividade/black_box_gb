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
  flex-direction: column;
  width: 100%;
  p {
    align-items: center;
    background-color: #fa821f;
    border-radius: 10px;
    display: flex;
    font-size: 22px;
    font-weight: bold;
    justify-content: space-between;
    margin: 15px 0;
    padding: 10px ;
    padding-right: 10%;
    width:70%;
  }
  span {
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    color: #737373;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 100px;
  }
`;

export const ContainerReport = styled.div`
background-color: #fff;
  margin: 0 auto;
  padding: 10px;
  width: 90%;
`;

export const ParagraphValue = styled.p`
  color: #666;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  justify-content: space-between;
  margin: 15px 0;
  width: 100%;
  img {
    margin-right: 8px;
  }
`;

export const ParagraphValuePositive = styled(ParagraphValue)`
  color: #14e891;
`;

// export const AccumulatedHeader = styled.div`
//   align-items: center;
//   display: flex;
//   justify-content: flex-end;
//   width: 90%;
//   h3 {
//     background-color: #fa821f;
//     border-radius: 5px;
//     padding: 3px 10px;
//   }
// `;
