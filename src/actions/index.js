import _ from 'lodash';
import axios from 'axios';

export const REQUEST_COLLECTION = 'REQUEST_COLLECTION';
export const FILTER_BY_OWNED = 'FILTER_BY_OWNED';
export const RESET_FILTERS = 'RESET_FILTERS';

//const requestUrl = 'https://www.boardgamegeek.com/xmlapi2/collection?username=recreationMyth&own=1&brief=1';
const requestUrl = 'https://bgg-json.azurewebsites.net/collection/edwalter';

export function requestCollection(collection) {
  const request = axios.get(requestUrl);
  return {
    type: REQUEST_COLLECTION,
    payload: request
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

export function resetFilters(collection) {
  return {
    type: RESET_FILTERS,
    payload: collection
  }
}
