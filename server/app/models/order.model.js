module.exports = (mongoose) => {
	const Order = mongoose.model(
		"order",
		mongoose.Schema(
			{
				userID: String,
				items: Array,
				cartTotal: Number,
				totalItems: Number,
			},
			{ timestamps: true }
		)
	);
	return Order;
};
