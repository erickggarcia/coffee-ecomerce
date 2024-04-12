import { iCoffees } from "../Home"
import { MenuContainer } from "./style"


export const Coffees = ({ img, tags, name, description, value }: iCoffees) => {
    return (
        <MenuContainer>
            <img src={img} alt="" />
            <div>
                {tags.map((tag, index) => (
                    <span className="tag" key={index}>{tag.toUpperCase()}</span>
                ))}
            </div>
            <h3>{name}</h3>
            <p className="description">{description}</p>
            <div className="priceMenu">
                <p className="value">R$<span>{value + '0'}</span></p>
                <div className="lengthContainer">
                    <span className="controls minus">_</span>0<span className="controls">+</span>
                </div>
                <div className="shoppingCartContainer">
                    <img src="icons/shoppingCartSimple.png" alt="" />
                </div>
            </div>
        </MenuContainer >
    )
}