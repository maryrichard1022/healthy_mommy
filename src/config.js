//백이랑 소통시 사용?

const BASE_URL = "http://13.125.207.234:8000";

const API = {
  signin: `${BASE_URL}/users/login`,
  signup: `${BASE_URL}/users/signup`,
  product: `${BASE_URL}/products`,
  productDetail: `${BASE_URL}/products`,
  cart: `${BASE_URL}/carts`,
  order: `${BASE_URL}/myorder`,
  neworder: `${BASE_URL}/orders/neworder`,
};

export default API;
