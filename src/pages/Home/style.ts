import styled from "styled-components";

export const HomeLayout = styled.section`
    display: flex;
    padding: 20px 0;
    gap: 56px;

    article {
        h1 {
            font-size: 48px;
            font-family: 'Baloo 2', sans-serif;
            color: ${props => props.theme['base-title']};
            line-height: 1.4;
            font-weight: bolder;
        }

        p {
            font-family: 'Roboto' sans-serif;
            color: ${props => props.theme['base-subtitle']};
            font-size: 20px;
        }

        div {
            margin-top: 66px;
            display: grid;
            grid-template-columns: repeat(2, 2fr);
            gap: 20px;

            span {
                display: flex;
                align-items: center;
                gap: 10px;
                color: ${props => props.theme['base-text']};
                font-size: 16px;
            }
        }
    }
`

export const CoffeeLayout = styled.section`
    margin: 80px 0;
    h2 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: bolder;
        font-size: 32px;
        margin-bottom: 40px;
    }

    p{
        width: 216px;
    }

    article {
        display: grid;
        gap: 32px;
        grid-template-columns: repeat(4, 1fr);
    }
`