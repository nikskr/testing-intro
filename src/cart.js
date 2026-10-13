// function notImplemented() {
// 	throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
// }

function addToCart(cart, product, qty) {
	if (qty === 0) {
		throw new RangeError("Нет изменений в количестве");
	}

	if (product.stock < qty) {
		throw new RangeError("На складе недостаточно продуктов");
	}
	const productInCart = cart.find((p) => p.id === product.id);
	if (!productInCart) {
		cart.push({ ...product, quantity: qty });
		return cart;
	}
	productInCart.quantity += qty;
	return cart;
}
function changeQuantity(cart, productId, qty) {
	const product = cart.find((p) => p.id === productId);
	if (!product) return cart;
	if (qty === 0) {
		throw new RangeError("Нет изменений в количестве");
	}
	if (qty > product.stock) {
		throw new RangeError("На складе недостаточно продуктов");
	}
	product.quantity = qty;
	return cart;
}
function removeFromCart(cart, productId) {
	return cart.filter((p) => p.id !== productId);
}
function calculateCartSubtotal(cart) {
	return cart.reduce(
		(acc, product) => acc + product.price * product.quantity,
		0,
	);
}
function calculateOrderTotal(cart, promo) {
	const orderTotal = {
		subtotal: calculateCartSubtotal(cart),
		get discount() {
			return this.subtotal >= 20000 && promo === "SAVE10"
				? this.subtotal / 10
				: 0;
		},
		get delivery() {
			return this.subtotal >= 50000 ? 0 : 30000;
		},
		get total() {
			return this.subtotal - this.discount + this.delivery;
		},
	};
	return orderTotal;
}

const cartApi = {
	addToCart,
	changeQuantity,
	removeFromCart,
	calculateCartSubtotal,
	calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
