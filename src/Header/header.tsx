import { HeaderContainer } from './style'

export const Header = () => {
    return (
        <HeaderContainer>
            <img src="icons/logo.png" alt="" />
            <div>
                <span>
                    <img src="icons/location.png" alt="" />
                    Rio de Janeiro, RJ
                </span>
                <img src="icons/cart.png" alt="" />
            </div>
        </HeaderContainer>
    )
}