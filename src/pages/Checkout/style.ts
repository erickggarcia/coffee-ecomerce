import styled from "styled-components";

export const CheckoutContainer = styled.section`
    display: flex;
    width: 100%;
    margin-top: 40px;
    justify-content: space-between;
`

export const DeliveryAdress = styled.article`
   width: 50%;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 40px;
    }

    article { 

        display: flex;
        flex-direction: column;
        margin-left: 20px;
        
        div {
            width: 369px;
            display: flex;
            align-items: center;
            gap: 5px;

            h2 {
                color: ${props => props.theme['base-subtitle']};
                font-size: 16px;
                font-weight: 400;
            }
        }

        p {
            margin-top: 5px;
            margin-left: 28px;
            color: ${props => props.theme['base-text']};
            font-size: 14px;
            font-weight: 400;
        }


        form {
            margin: 40px 0;
            display: flex;
            flex-direction: column;

            input {
                margin-top: 16px;
                height: 32px;
                padding: 10px;
                border: none;
                border: 1px solid ${props => props.theme['base-label']};
                border-radius: 4px;
                color: ${props => props.theme['base-subtitle']};
                font-size: 14px;
                font-weight: bold;
            }

            #cep {
                width: 300px ;
            }

            #rua {
                width: 100%;
            }

           .inputs-container {
            width: 100%;

            #numero, #complemento {
                width: 50%;
            }

           }

            #bairro, #cidade, #uf {
                width: 33%;
            }

        }

        section {
            margin-top: 32px;
            display: flex;
            gap: 10px;

            div {
                display: flex;
                justify-content: center;
                padding: 20px;
                background: ${props => props.theme['base-button']};
                border-radius: 6px;
                font-size: 12px;
                color: ${props => props.theme['base-text']};
            }
        }

        
    }
`

export const PaymentConfirmation = styled.article`
    h1 {
        font-family: 'baloo 2', sans-serif;
    }

    article {

        border-bottom: 1px solid ${props => props.theme['base-button']};
        font-family: 'Roboto', sans-serif;

        .selectionContainer {
            margin-left: 20px;
            display: flex;
            gap: 20px;
            margin-top: 40px;
            margin-bottom: 40px;

            /* p:last-child {
                margin-left: 60px;
            } */

            img {
                display: block;
                width: 60px;
            }

            p {
                color: ${props => props.theme['base-text']};
                font-weight: bold;
                font-size: 16px;

                span {
                    margin-left: 5px;
                }
            }
        }

        .selectionAction {
            display: flex;
            gap: 20px;
            align-items: end;
        }

        .lengthContainer {
            display: flex;
            width: 85px;
            justify-content: center;
            gap: 10px;
            border-radius: 6px;
            font-size: 15px;
            padding: 8px;
            font-weight: 400;
            background: ${props => props.theme['base-button']};
            color: ${props => props.theme['base-text']};
            margin-top: 10px;
        }

        .controls {
            display: flex;
            align-items: center;
            color: ${props => props.theme['purple']};
            cursor: pointer;
        }

        .controls.minus {
            height: 11px;
        }

        .deleteContainer {
            img {
                display: block;
                width: 18px;
                height: 18px;
            }
            
            font-size: 12px;
            color: ${props => props.theme['base-text']};
            background: ${props => props.theme['base-button']};
            align-items: center;
            display: flex;
            font-size: 12px;
            border-radius: 6px;
            padding: 8px;
            gap: 5px;

        }
    }

    .summary:first-of-type {
        margin-top: 40px;
    }

    .summary {
        color: ${props => props.theme['base-text']};
        display: flex;
        justify-content: space-between;
        width: 73%;
        margin-top: 20px;
    }

    .summary span:first-of-type {
        font-size: 14px;
    }

    .summary span:last-of-type {
        font-size: 16px;
    }

    .summary:last-of-type > span {
        color: ${props => props.theme['base-subtitle']};
        font-weight: bold;
        font-size: 20px;
    }

    button {
        margin-top: 40px;
        padding: 15px 0;
        color: ${props => props.theme['white']};
        background: ${props => props.theme['yellow-dark']};
        border-radius: 6px;
        border: none;
        font-weight: bolder;
        width: 73%;
        cursor: pointer;

    }
    width: 40%;
`