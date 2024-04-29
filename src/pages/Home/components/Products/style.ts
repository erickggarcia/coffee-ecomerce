import styled from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        margin: 10px 0;
        display: flex;
        gap: 10px;
    }
    .tag {
        font-weight: bold;
        font-family: 'Roboto' sans-serif;
        font-size: 10px;
        color: ${props => props.theme['yellow-dark']};
        background-color: ${props => props.theme['yellow-light']};
        padding: 5px;
        border-radius: 100px;
    }

    h3 {
        font-weight: bold;
        font-size: 20px;
        color: ${props => props.theme['base-subtitle']};
    }

    .description {
        margin: 10px 0;
        font-size: 14px;
        color: ${props => props.theme['base-label']};
        text-align: center;
    }

    .priceMenu {
        width: 240px;
        display: flex;
        align-items: center;
    }

    .value {
        color: ${props => props.theme['base-text']};
        span {
            font-weight: bolder;
            font-size: 25px;
            margin-left: 5px;
        }
    }

    .lengthContainer {
        border-radius: 6px;
        font-size: 25px;
        padding: 11px;
        font-weight: 400;
        background: ${props => props.theme['base-button']};
    }

    .shoppingCartContainer {
        background: ${props => props.theme['purple-dark']};
        padding: 15px;
        border-radius: 6px;
        cursor: pointer;
    }

    .controls {
        display: flex;
        align-items: center;
        color: ${props => props.theme['purple']};
        cursor: pointer;
    }
`