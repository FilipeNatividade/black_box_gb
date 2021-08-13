import styled from "styled-components";

export const Container = styled.table`
  align-items: center;
  background-color: #fa821f;
  display: flex;
flex-direction: column;
  justify-content: center;
  margin: 25px auto;
  width: 100%;
  tr {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .nameRow{
    color: #fff;
    width: 60%;
  }
  td {
    align-items: center;
    border: 1px solid #fff;
    color: #2AFAA5;
    display: flex;
    font-size: 14px;
    font-weight: bold;
    justify-content: center;
    padding: 3px;
    width:100%;
  }
`;
