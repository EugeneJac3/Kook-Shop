import http from "../http-common";
const getAll = () => {
	return http.get("/products");
};

const ProductService = {
	getAll,
};
export default ProductService;
