import http from "../http-common";
const getAll = () => {
	return http.get("/products");
};
const postOrder = () => {
	return http.post("/place-order");
};

const ProductService = {
	getAll,
	postOrder,
};
export default ProductService;
