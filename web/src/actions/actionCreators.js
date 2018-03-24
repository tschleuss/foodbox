import * as ActionTypes from './actionTypes'

/** Auth */

export const userLoggedIn = token =>
    ({ type: ActionTypes.USER_LOGGED_IN, token })

/** Stores */

export const getStores = () =>
    ({ type: ActionTypes.GET_STORES })

export const searchStores = () =>
    ({ type: ActionTypes.SEARCH_STORES })

export const receiveStores = stores =>
    ({ type: ActionTypes.RECEIVE_STORES, stores, receivedAt: Date.now() })

export const getStoresProducts = () =>
    ({ type: ActionTypes.GET_STORE_PRODUCTS })

export const receiveStoreProducts = (storeId, products) =>
    ({ type: ActionTypes.RECEIVE_STORE_PRODUCTS, storeId, products, receivedAt: Date.now() })
