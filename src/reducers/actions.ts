import { iCoffeesWithAMount } from "../contexts/productsContext";

export enum ActionType {
    ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
    ADD_ONE_MORE_PRODUCT = 'ADD_ONE_MORE_PRODUCT',
    REDUCE_THIS_PRODUCT = 'REDUCE_THIS_PRODUCT',
    REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
}


export function AddProductToCartAction (props: iCoffeesWithAMount) {
    return {
        type: ActionType.ADD_PRODUCT_TO_CART,
        payload: {
            ...props
        }
    }
}

export function IncreaseProductAction (props: iCoffeesWithAMount) {
    return {
        type: ActionType.ADD_ONE_MORE_PRODUCT,
        payload: {
            ...props
        }
    }
}

export function DecreaseProductAction (props: iCoffeesWithAMount) {
    return {
        type: ActionType.REDUCE_THIS_PRODUCT,
        payload: {
            ...props
        }
    }
}

export function DeleteProductAction (props: iCoffeesWithAMount) {
    return {
        type: ActionType.REMOVE_PRODUCT_FROM_CART,
        payload: {
            ...props
        }
    }
}