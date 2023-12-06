import { ADD, ALLPRODUCT, ONEPRODUCT } from "./Actiontype"

const initialState = {
    products: [], 
    product :{},
    basket:[],
}

export const product_reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ALLPRODUCT:
            return { ...state,products: payload }
        
        case ONEPRODUCT:
            return {...state,product:payload}
        case "ADDTOBASKET":
            return{...state,basket:[...state.basket,payload]}
        case "REMOVE":
        return {...state,basket:state.basket.filter(e=>e.product._id!==payload
            )}
        default:
            return state
    }
}
