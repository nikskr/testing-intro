function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

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
  } else {
    productInCart.quantity += qty;
    return cart;
  }

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
function removeFromCart() {
  return notImplemented();
}
function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
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
