import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 104px;
    div {
        display: flex;
        gap: 10px;
        width: 230px;
        span {
            font-family: 'Roboto' sans-serif;
            border-radius: 6px;
            font-size: 14px;
            background: ${props => props.theme['purple-light']};
            color: ${props => props.theme['purple-dark']};
            width: auto;
            padding: 10px;
            display: flex;
            align-items: center;
        }
    }

`