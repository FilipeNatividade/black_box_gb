import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    box-sizing:border-box;
    border:none;
    color: #fff;
    font-family: 'Roboto', sans-serif ;
    margin: 0;
    outline:none;
    padding:0;
}
/* html, body, #root{
    height:100% auto;
}
button, input {
    border:0;
    font-family: 'Roboto', sans-serif ;
    outline:none;
}
*/
button{
    background-color: transparent;
    cursor: pointer;
} 
`;
