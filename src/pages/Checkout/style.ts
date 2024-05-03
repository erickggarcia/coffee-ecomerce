import styled from "styled-components";

export const CheckoutContainer = styled.section`
    display: flex;
    width: 100%;
    margin-top: 40px;
    justify-content: space-between;
    position: relative;

`

export const DeliveryAdress = styled.article`
   width: 50%;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    section { 
        display: flex;
        flex-direction: column;
        margin-left: 20px;

        .formSection, .paymentSection {
            background: ${props => props.theme['base-card']};
            padding: 30px;
            border-radius: 6px;
        }

        .paymentSection {
            margin: 15px 0;
        }

        .paymentSection > section {
            margin-top: 32px;
            display: flex;
            gap: 10px;
            flex-direction: row;

            div {
                min-width: 90px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                padding: 15px;
                background: ${props => props.theme['base-button']};
                border-radius: 6px;
                font-size: 12px;
                color: ${props => props.theme['base-text']};
                cursor: pointer;

                &.active {
                    border: 1px solid ${props => props.theme['purple']};
                    background-color: ${props => props.theme['purple-light']}
                }

            }
        }
        
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
            align-items: start;

            div {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: start;
            }

            
            #numero, #bairro, #cidade, #uf {
                width: 100%;
            }
            
        }

        
        #complemento {
            width: 50%;
        }

            .errorFormMessage {
                font-size: 10px;
                color: red;
            }

        }

    }
`

export const PaymentConfirmation = styled.article`
        width: 50%;

    h1 {
        font-family: 'baloo 2', sans-serif;
        margin-bottom: 15px;
    }

    section {
        background: ${props => props.theme['base-card']};
        width: 90%;
        padding: 20px 30px;
        min-height: 400px;
        border-radius: 6px 44px 6px 44px;

        article {
            border-bottom: 1px solid ${props => props.theme['base-button']};
            font-family: 'Roboto', sans-serif;

            .selectionContainer {
                margin-left: 20px;
                display: flex;
                gap: 20px;
                margin-top: 40px;
                margin-bottom: 40px;

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
                cursor: pointer;
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
            width: 100%;
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
    }
    
    .buttonContainer {
        width: 100%;
        display: flex;
        justify-content: center;

        button {
            margin-top: 40px;
            padding: 15px 0;
            color: ${props => props.theme['white']};
            background: ${props => props.theme['yellow-dark']};
            border-radius: 6px;
            border: none;
            font-weight: bolder;
            width: 75%;
            cursor: pointer;
        }
    }
     

    width: 40%;
`