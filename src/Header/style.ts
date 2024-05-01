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
        
        a {
            display: block;
            position: relative;
            width: 50px;

                section {
                    width: 100%;
                    height: 100%;
                    background: ${props => props.theme['yellow-light']};
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

            .amountCart {
                display: block;
                border: none;
                position: absolute;
                right: -5px;
                top: -5px;
                background: ${props => props.theme['yellow-dark']};
                color: white;
                width: 20px;
                height: 20px;
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                font-weight: bold;
            }

            img {
                display: block;
                width: 100%;
            }

        }

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