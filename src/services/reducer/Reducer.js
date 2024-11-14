import { ADD_TO_CART, REMOVE_FROM_CART } from '../Constants'

export default function cartItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                { cartData: action.data }
            ]
        case REMOVE_FROM_CART:
            return state.slice(0, -1);
        default:
            return state
    }
}