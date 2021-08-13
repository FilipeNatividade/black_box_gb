import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    box-sizing:border-box;
    border:none;
    /* color: #fff; */
    font-family: 'Roboto', sans-serif ;
    margin: 0;
    outline:none;
    padding:0;
}
p{
    color: #fff;
}
button{
    background-color: transparent;
    cursor: pointer;
    color: #fff;
} 
`;
