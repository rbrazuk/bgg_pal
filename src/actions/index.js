import _ from 'lodash';
import axios from 'axios';

export const REQUEST_COLLECTION = 'REQUEST_COLLECTION';
export const FILTER_BY_OWNED = 'FILTER_BY_OWNED';
export const RESET_FILTERS = 'RESET_FILTERS';
export const FILTER_BY_WISHLIST = 'FILTER_BY_WISHLIST';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

const BASE_URL = 'https://bgg-json.azurewebsites.net/collection/';

export function requestCollection(username) {
  const request = axios.get(`${BASE_URL}${username}`);
  setCurrentUser(username);
  return {
    type: REQUEST_COLLECTION,
    payload: request
  }
}

export function setCurrentUser(username) {
  console.log("Set Current User ", username);
  return {
    type: SET_CURRENT_USER,
    currentUser: username
  }
}

export function filterByOwned(collection) {
  const filteredCollection = _.filter(collection, game => {
    return game.owned === true;
  })
  return {
    type: FILTER_BY_OWNED,
    payload: filteredCollection
  }
}

export function filterByWishlist(collection) {
  const filteredCollection = _.filter(collection, game => {
    return game.wishList === true;
  })
  return {
    type: FILTER_BY_WISHLIST,
    payload: filteredCollection
  }
}

export function resetFilters(collection) {
  return {
    type: RESET_FILTERS,
    payload: collection
  }
}
