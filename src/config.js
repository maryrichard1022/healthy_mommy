//백이랑 소통시 사용

const BASE_URL = "http://13.125.232.99:8000";

const API = {
  signin: `${BASE_URL}/users/login`,
  //signup: `${BASE_URL}/users/signup`,
  product: `${BASE_URL}/products`,
  productDetail: `${BASE_URL}/products`,
  cart: `${BASE_URL}/carts`,
  //주문 내역 확인
  order: `${BASE_URL}/myorder`,
  //주문 할때
  neworder: `${BASE_URL}/orders/neworder`,
  main: `${BASE_URL}/`,
};

export default API;
