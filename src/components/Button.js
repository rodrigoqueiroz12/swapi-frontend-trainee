import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = ({ page }) => {
    const navigate = useNavigate();
    const routePage = "/" + page;
    return (
        <Buttons onClick={() => { navigate(routePage); }}>
            {page}
        </Buttons>
    )
}

export default Button;

// Styled

const Buttons = styled.button`
    cursor: pointer;
        border-radius: 7px;
        box-sizing: border-box;
        padding: 12px;
        width: 30%;
        font-size: 18px;
        font-weight: bold;
        border: none;
        background: #ffe300;
    
`;
