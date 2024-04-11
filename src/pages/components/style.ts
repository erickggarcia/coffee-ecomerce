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
        padding: 4px;
        border-radius: 6px;
    }

    h3 {
        font-weight: bold;
        font-size: 20px;
        color: ${props => props.theme['base-subtitle']};
    }

    p {
        margin: 10px 0;
        font-size: 14px;
        color: ${props => props.theme['base-label']};
        text-align: center;
    }
`