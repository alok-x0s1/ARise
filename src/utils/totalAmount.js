const totalAmount = (cartItems) => {
	const amount = cartItems.reduce((acc, item) => acc + Number(item.price), 0);
	return Number(amount).toFixed(2);
};

export default totalAmount;