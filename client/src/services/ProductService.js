import http from "../http-common";
const getAll = () => {
  return http.get("/products");
};

const getAllOrders = () => {
  return http.get("/orders");
};

const ProductService = {
  getAll,
  getAllOrders,
};
export default ProductService;
