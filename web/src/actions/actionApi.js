import * as ActionCreators from './actionCreators'
import { StoreAPI } from '../api/Api'

/** Auth */

export function userLoggedIn(token) {
    return dispatch => dispatch(ActionCreators.userLoggedIn(token))
}

/** Stores */

export function getAllStores() {
    return dispatch => {
        dispatch(ActionCreators.getStores())
        return StoreAPI.list()
            .then(({ data: stores }) => {
                dispatch(ActionCreators.receiveStores(stores))
            })
    }
}

/**
 * TODO, maybe this API should see if there's stores already in the redux store.
 * Because we always fetch all when enter the page. Doing that, we can avoid a new request to the server.
 */
export function searchStores(query) {
    return dispatch => {
        dispatch(ActionCreators.searchStores())
        return StoreAPI.search(query)
            .then(({ data: stores }) => {
                dispatch(ActionCreators.receiveStores(stores))
            })
    }
}

export function getStoreProducts(storeId) {
    return dispatch => {
        dispatch(ActionCreators.getStoresProducts())
        return StoreAPI.products(storeId)
            .then(({ data: products }) => {
                dispatch(ActionCreators.receiveStoreProducts(storeId, products))
            })
    }
}
