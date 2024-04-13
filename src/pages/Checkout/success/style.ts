import styled from "styled-components"
export const SuccessCheckoutContainer = styled.section`
    font-family: 'Roboto', sans-serif;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;

    article {
        h1 {
            font-family: 'Baloo 2', sans-serif;
            font-size: 32px;
            font-weight: bolder;
            color: ${props => props.theme['yellow-dark']};
        }

        margin-bottom: 12px;

        p {
            font-size: 20px;
            color: ${props => props.theme['base-subtitle']};
            margin-top: 5px;

            span {
                color: ${props => props.theme['base-text']};
                font-weight: bold;
            }
        }

        .deliveryInformation {
            margin-top: 40px;
            position: relative;
            border: double 2px transparent;
            width: 100%;
            height: 250px;
            border-radius: 6px 36px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(white, white), linear-gradient(to bottom right, ${props => props.theme['yellow-dark']}, ${props => props.theme['purple']});
            background-origin: border-box;
            background-clip: content-box, border-box;
        }

        .delivery-location {
            background-color: ${props => props.theme['purple']};
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 20px !important;
                height: 20px !important;
            }
        }

        .deliveryInformation article {
            margin-left: 30px;
            display: flex;
            align-items: center;
            gap: 10px;

            img {
                display: block;
                width: 30px;
                height: 30px;
            }
          
            p {
                font-size: 16px;
                color: ${props => props.theme['base-text']};
            }
        }
    }
`