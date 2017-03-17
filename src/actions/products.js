const FETCH_PRODUCTS_URL = 'http://beta.json-generator.com/api/json/get/4kiDK7gxZ'

export const fetchProducts = () => ({
  type: 'FETCH_PRODUCTS',
  payload: fetch(FETCH_PRODUCTS_URL)
    .then(response => response.json()),
})
