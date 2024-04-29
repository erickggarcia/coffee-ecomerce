import { ReactNode, createContext, useReducer } from "react"
import { iCoffees } from "../pages/Home"
import {produce} from 'immer'

interface iCoffeesState {
    products: iCoffees[]
}

interface iProductsContext {
    handleDecreaseProduct: (props: iCoffees) => void;
    handleIncreaseProduct: (props: iCoffees) => void;
    products: iCoffees[]
}

interface ProductsContextProviderProps {
    children: ReactNode
}

export const ProductsContext = createContext({} as iProductsContext);

export function ProductsContextProvider ({children}: ProductsContextProviderProps) {
    
    const [productState, dispatch] = useReducer((state: iCoffeesState, action: any) => {
        switch(action.type) {
            case 'ADD_ONE_MORE_PRODUCT':
                return produce(state, (draft) => {
                    const currentIndex = draft.products.findIndex((product) => {
                        return product.id === action.payload.id
                    })

                    if(currentIndex !== -1) {
                        return produce(state, (draft) => {
                            draft.products[currentIndex].amount += 1
                        })

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
                        return produce(state, (draft) => {
                            if(draft.products[currentIndex].amount > 0) {
                                draft.products[currentIndex].amount -= 1
                            }
                        })
                    }
                })

            default:
                return state
        }
    }, 
    {
        products: []
    });

    const { products } = productState
    
    function handleDecreaseProduct(props: iCoffees) {
        dispatch({
            type: 'REDUCE_THIS_PRODUCT',
            payload: {
                ...props
            }
        });
    }
    
    function handleIncreaseProduct(props: iCoffees) {
        dispatch({
            type: 'ADD_ONE_MORE_PRODUCT',
            payload: {
                ...props
            }
        });
    }

    return (
        <ProductsContext.Provider value={{
            products,
            handleDecreaseProduct,
            handleIncreaseProduct
        }}>
            {children}
        </ProductsContext.Provider>
    );
}
