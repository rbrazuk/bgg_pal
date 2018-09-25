import axios from 'axios';

export const REQUEST_COLLECTION = 'REQUEST_COLLECTION';

//const requestUrl = 'https://www.boardgamegeek.com/xmlapi2/collection?username=recreationMyth&own=1&brief=1';
const requestUrl = 'https://bgg-json.azurewebsites.net/collection/recreationMyth';
export function requestCollection(collection) {
  const request = axios.get(requestUrl);
  console.log(request);
  return {
    type: REQUEST_COLLECTION,
    payload: request
  }
}
