import { useContext } from 'react'
import { HeaderContainer } from './style'
import { ProductsContext } from '../contexts/productsContext'
import { ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';

export const Header = () => {

    const {products} = useContext(ProductsContext)
    const amountProductsAtCart = products.reduce((acc, currentValue) => {
        return acc += currentValue.amount
    }, 0)

    return (
        <HeaderContainer>
            <Link to="/">
                <img src="icons/logo.png" alt="" />
            </Link>
            <div>
                <span>
                    <img src="icons/location.png" alt="" />
                    Rio de Janeiro, RJ
                </span>
                <Link to="/checkout">
                        <section>
                            <ShoppingCart size={24} color='#C47F17' weight='fill'/>
                        </section>
                        <span style={{visibility: amountProductsAtCart > 0 ? 'visible' : 'hidden'}} className='amountCart'>
                            {amountProductsAtCart}
                        </span>
                </Link>
            </div>
        </HeaderContainer>
    )
}