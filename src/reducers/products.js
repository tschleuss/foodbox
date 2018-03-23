import * as ActionTypes from '../actions/actionTypes'

const productsState = {
    isFetching: false,
    lastUpdated: null,
    items: []
}

export const products = (state = productsState, action) => {
    switch (action.type) {
        case ActionTypes.GET_STORE_PRODUCTS:
            return {
                ...state,
                isFetching: true
            }
        case ActionTypes.RECEIVE_STORE_PRODUCTS:
            return {
                ...state,
                isFetching: false,
                lastUpdated: action.receivedAt,
                items: action.products
            }
        default:
            return { ...state }
    }
}
