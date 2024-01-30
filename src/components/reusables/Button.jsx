import styled from "styled-components";

const Button = styled.button`
    background-color: black;
    color: white;
    border: 2px solid black;
    outline: none;
    padding: 12px 16px;
    font-size: 1rem;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
`

export default Button