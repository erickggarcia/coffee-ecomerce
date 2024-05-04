import { ReactNode, createContext, useEffect, useReducer } from "react"
import { iCoffees } from "../pages/Home"
import { ProductsReducer } from "../reducers/reducer"
import { AddProductToCartAction, DecreaseProductAction, DeleteProductAction, IncreaseProductAction, RemoveAllProductsFromCartAction } from "../reducers/actions"


export interface iCoffeesWithAMount extends iCoffees {
    amount: number
}

interface iProductsContext {
    handleAddProductToCart: ( props: iCoffeesWithAMount) => void
    handleDecreaseProduct: ( props: iCoffeesWithAMount) => void
    handleIncreaseProduct: ( props: iCoffeesWithAMount) => void
    handleDeleteProduct: ( props: iCoffeesWithAMount) => void
    removeAllProductsFromCart : () => void
    products: iCoffees[]
}

interface ProductsContextProviderProps {
    children: ReactNode
}

export const ProductsContext = createContext({} as iProductsContext);

export function ProductsContextProvider ({children}: ProductsContextProviderProps) {
    
    const [productState, dispatch] = useReducer(ProductsReducer, 
    {
        products: []
    },
        (initialState) => {

        const storageStateJson = localStorage.getItem('coffee-shop:productState-1.0.0')

        if(storageStateJson) {
            return JSON.parse(storageStateJson)
        }

        return initialState
    }
)

    useEffect(() => {
        localStorage.setItem('coffee-shop:productState-1.0.0', JSON.stringify(productState))
    }, [productState])

    const { products } = productState
    
    function handleAddProductToCart(props: iCoffeesWithAMount) {
        if(props.amount <= 0) {
            alert('A quantidade não pode ser 0')
            return
        }
        
        dispatch(AddProductToCartAction(props))

    }

    function handleIncreaseProduct(props: iCoffeesWithAMount) {
        dispatch(IncreaseProductAction(props))
    }
    
    function handleDecreaseProduct(props: iCoffeesWithAMount) {
        dispatch(DecreaseProductAction(props))
    }

    function handleDeleteProduct(props: iCoffeesWithAMount) {
        dispatch(DeleteProductAction(props))
    }

    function removeAllProductsFromCart() {
        dispatch(RemoveAllProductsFromCartAction())
    }

    return (
        <ProductsContext.Provider value={{
            products,
            handleAddProductToCart,
            handleIncreaseProduct,
            handleDecreaseProduct,
            handleDeleteProduct,
            removeAllProductsFromCart
        }}>
            {children}
        </ProductsContext.Provider>
    );
}
