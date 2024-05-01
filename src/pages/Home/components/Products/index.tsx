import { useContext, useState } from "react"
import { iCoffees } from "../../index"
import { MenuContainer } from "./style"
import { ProductsContext } from "../../../../contexts/productsContext"
import { Minus, Plus } from 'phosphor-react'

export function Coffees ({...props} : iCoffees) {

    const {products, handleAddProductToCart} = useContext(ProductsContext)
    // const currentProduct = products.find((product) => product.id === props.id)
    // const productAmount = currentProduct ? currentProduct.amount : 0
    const [amount, setAMount] = useState(0)
    

    function handleIncreaseProduct() {
        setAMount((state) => state += 1)
    }

    function handleDecreaseProduct() {
        if(amount > 0) {
            setAMount((state) => state -= 1)
        }
    }



return (
        <MenuContainer>
            <img src={props.img} alt="" />
            <div>
                {props.tags.map((tag, index) => (
                    <span className="tag" key={index}>{tag.toUpperCase()}</span>
                ))}
            </div>
            <h3>{props.name}</h3>
            <p className="description">{props.description}</p>
            <div className="priceMenu">
                <p className="value">R$<span>{props.value.toFixed(2)}</span></p>
                <div className="lengthContainer">
                    <span className="controls" onClick={ handleDecreaseProduct}><Minus/></span>
                        {amount}
                    <span className="controls" onClick={handleIncreaseProduct} ><Plus/></span>
                </div>
                <div className="shoppingCartContainer" onClick={() => handleAddProductToCart(props)}>
                    <img src="icons/shoppingCartSimple.png" alt="" />
                </div>
            </div>
        </MenuContainer >
    )
}