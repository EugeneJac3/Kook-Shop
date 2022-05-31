import http from "../http-common";
const getAll = () => {
	return http.get("/products");
};

const getAllOrders = () => {
	return http.get("/orders");
};
const postOrder = () => {
	return http.post("/place-order");
};

const ProductService = {
	postOrder,
	getAll,
	getAllOrders,
};
export default ProductService;
