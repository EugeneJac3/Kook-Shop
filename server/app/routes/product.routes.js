const { checkUser } = require("../middleware/AuthMiddleware");

module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  // //Credentials route
  // router.post("/", checkUser)
  //Register route
  router.post("/register", products.register);
  //Register route
  router.post("/login", products.login);
  // Retrieve all Products
  router.get("/products", products.findAll);
  // Retrieve all Orders
  router.get("/orders", products.findAllOrders);
  // Make Stripe checkout session
  router.post("/create-checkout-session", products.checkout);
  // Make Stripe checkout session
  router.post("/place-order", products.placeOrder);

  app.use("/api", router);
};
