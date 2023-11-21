import { ADD, ALLPRODUCT } from "./Actiontype"

const initialState = {
    products: []
}

export const product_reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ALLPRODUCT:
            return { ...state, products: payload }
        

        default:
            return state
    }
}
