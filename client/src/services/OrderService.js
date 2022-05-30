import http from "../http-common";
const postOrder = () => {
	return http.post("/place-order");
};

const OrderService = {
	postOrder,
};
export default OrderService;
