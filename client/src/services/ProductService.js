import http from "../http-common";
const getAll = () => {
	return http.get("/products");
};
const get = (id) => {
	return http.get(`/products/${id}`);
};
const create = (data) => {
	return http.post("/products", data);
};

const findByTitle = (title) => {
	return http.get(`/products?title=${title}`);
};
const ProductService = {
	getAll,
	get,
	create,
	findByTitle,
};
export default ProductService;
