import { useContext } from "react"
import { iCoffees } from "../../index"
import { MenuContainer } from "./style"
import { ProductsContext } from "../../../../contexts/productsContext"

export function Coffees ({...props} : iCoffees) {

    const {handleDecreaseProduct, handleIncreaseProduct} = useContext(ProductsContext)

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
                    <span className="controls minus" onClick={() => handleDecreaseProduct(props)}>_</span>
                        0
                    <span className="controls" onClick={() => handleIncreaseProduct(props)}>+</span>
                </div>
                <div className="shoppingCartContainer">
                    <img src="icons/shoppingCartSimple.png" alt="" />
                </div>
            </div>
        </MenuContainer >
    )
}