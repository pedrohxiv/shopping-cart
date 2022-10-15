const saveCartItems = (str) => localStorage.setItem('cartItems', JSON.stringify(str));

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
