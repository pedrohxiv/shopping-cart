const fetchProducts = async (type) => {
  // seu código aqui
  if (type === undefined) throw new Error('You must provide an url');
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${type}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
