import { ReactNode, createContext, useReducer } from "react"
import { iCoffees } from "../pages/Home"

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
                return {
                    ...state,
                    products: [...state.products, action.payload]
                };
            case 'REDUCE_THIS_PRODUCT':
                return state
            default:
                return state
        }
    }, 
    {
        products: []
    });

    const { products } = productState
    console
    
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
