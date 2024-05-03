import {produce} from 'immer'
import { iCoffees } from '../pages/Home'
import { ActionType } from './actions'

interface iCoffeesState {
    products: iCoffees[]
}


export function ProductsReducer(state: iCoffeesState, action: any) {
    switch(action.type) {
        case ActionType.ADD_PRODUCT_TO_CART:
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


        case ActionType.ADD_ONE_MORE_PRODUCT:
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

        case ActionType.REDUCE_THIS_PRODUCT:
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

        case ActionType.REMOVE_PRODUCT_FROM_CART:
            return produce(state, (draft) => {
                const currentIndex = draft.products.findIndex((product) => {
                    return product.id === action.payload.id
                })
                draft.products.splice(currentIndex, 1)
            })

        case ActionType.REMOVE_ALL_PRODUCTS_FROM_CART:
            return {
                ...state,
                products: []
            }

        default:
            return state
    }

}