module.exports = (mongoose) => {
  const Product = mongoose.model(
    "product",
    mongoose.Schema(
      {
        name: String,
        brade: String,
        price: Number,
        description: String,
        imgURL: String,
        published: Boolean,
      },
      { timestamps: true }
    )
  );
  return Product;
};
