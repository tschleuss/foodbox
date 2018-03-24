import * as ActionTypes from '../actions/actionTypes'

const storeState = {
    isFetching: false,
    lastUpdated: null,
    items: []
}

export const stores = (state = storeState, action) => {
    switch (action.type) {
        case ActionTypes.GET_STORES:
            return {
                ...state,
                isFetching: true
            }
        case ActionTypes.RECEIVE_STORES:
            return {
                ...state,
                isFetching: false,
                lastUpdated: action.receivedAt,
                items: action.stores
            }
        default:
            return { ...state }
    }
}
