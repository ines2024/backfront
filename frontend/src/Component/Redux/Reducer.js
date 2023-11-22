import { ADD, ALLPRODUCT, ONEPRODUCT } from "./Actiontype"

const initialState = {
    products: [], 
    product :{}
}

export const product_reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ALLPRODUCT:
            return { ...state,products: payload }
        
        case ONEPRODUCT:
            return {...state,product:payload}

        default:
            return state
    }
}
