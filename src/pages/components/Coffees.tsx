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
            <p>{description}</p>
            <span>{value}</span>
        </MenuContainer>
    )
}