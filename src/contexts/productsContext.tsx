import { ReactNode, createContext, useEffect, useReducer } from "react"
import { iCoffees } from "../pages/Home"
import {produce} from 'immer'

interface iCoffeesState {
    products: iCoffees[]
}

interface iCoffeesWithAMount extends iCoffees {
    amount: number
}

interface iProductsContext {
    handleAddProductToCart: ( props: iCoffeesWithAMount) => void
    handleDecreaseProduct: ( props: iCoffeesWithAMount) => void
    handleIncreaseProduct: ( props: iCoffeesWithAMount) => void
    handleDeleteProduct: ( props: iCoffeesWithAMount) => void
    products: iCoffees[]
}

interface ProductsContextProviderProps {
    children: ReactNode
}

export const ProductsContext = createContext({} as iProductsContext);

export function ProductsContextProvider ({children}: ProductsContextProviderProps) {
    
    const [productState, dispatch] = useReducer((state: iCoffeesState, action: any) => {
        switch(action.type) {
            case 'ADD_PRODUCT_TO_CART':
                return produce(state, (draft) => {
                    const currentIndex = draft.products.findIndex((product) => {
                        return product.id === action.payload.id
                    })

                    if(currentIndex !== -1) {
                        draft.products[currentIndex].amount += action.payload.amount
                    } else {
                        draft.products.push(action.payload)
                    }
                })


            case 'ADD_ONE_MORE_PRODUCT':
                return produce(state, (draft) => {
                    const currentIndex = draft.products.findIndex((product) => {
                        return product.id === action.payload.id
                    })

                    if(currentIndex !== -1) {
                        draft.products[currentIndex].amount += 1
                    } else {
                        draft.products.push({...action.payload, amount: 1})
                    }
                })

            case 'REDUCE_THIS_PRODUCT':
                return produce(state, (draft) => {
                    const currentIndex = draft.products.findIndex((product) => {
                        return product.id === action.payload.id
                    })

                    if(currentIndex !== -1) {
                        if(draft.products[currentIndex].amount > 0) {
                            draft.products[currentIndex].amount -= 1
                        } 
                        
                        if(draft.products[currentIndex].amount === 0) {
                            draft.products.splice(currentIndex, 1)
                        }
                    }
                })

            case 'REMOVE_PRODUCT_FROM_CART':
                return produce(state, (draft) => {
                    const currentIndex = draft.products.findIndex((product) => {
                        return product.id === action.payload.id
                    })
                    draft.products.splice(currentIndex, 1)
                })

            default:
                return state
        }
    }, 
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
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: {
                ...props
            }
        })

        if(props.amount <= 0) {
            alert('A quantidade não pode ser 0')
            return
        }

        console.log(props)
    }

    function handleIncreaseProduct(props: iCoffeesWithAMount) {
        dispatch({
            type: 'ADD_ONE_MORE_PRODUCT',
            payload: {
                ...props
            }
        })
    }
    
    function handleDecreaseProduct(props: iCoffeesWithAMount) {
        dispatch({
            type: 'REDUCE_THIS_PRODUCT',
            payload: {
                ...props
            }
        })
    }

    function handleDeleteProduct(props: iCoffeesWithAMount) {
        dispatch({
            type: "REMOVE_PRODUCT_FROM_CART",
            payload: {
                ...props
            }
        })
    }

    return (
        <ProductsContext.Provider value={{
            products,
            handleAddProductToCart,
            handleIncreaseProduct,
            handleDecreaseProduct,
            handleDeleteProduct
        }}>
            {children}
        </ProductsContext.Provider>
    );
}
