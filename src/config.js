//백이랑 소통시 사용

const BASE_URL = "http://13.125.232.99:8000";

const API = {
  login: `${BASE_URL}/users/login`,
  //signup: `${BASE_URL}/users/signup`,
  main: `${BASE_URL}/`,
  product: `${BASE_URL}/products`,
  productDetail: `${BASE_URL}/products`,
  //장바구니
  cart: `${BASE_URL}/carts`,
  //주문 내역 확인
  order: `${BASE_URL}/orders`,
  //주문 할때 배송지 정보 넘길 때 사용.
  neworder: `${BASE_URL}/orders/neworder`,
};

export default API;
