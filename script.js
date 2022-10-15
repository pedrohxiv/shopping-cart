// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições!

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

const totalPrice = '.total-price';
const cartItems = '.cart__items';

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) =>
  product.querySelector('span.id').innerText;

const cartItemClickListener = (event) => {
  event.target.parentElement.removeChild(event.target);
  saveCartItems(document.querySelector(cartItems).innerHTML);
  document.querySelector(totalPrice).innerText = Math.round(
      (parseFloat(document.querySelector(totalPrice)
        .innerText) - parseFloat(event.target.innerText.split(':')[3].slice(2))) * 100,
    ) / 100;
};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const pageLoading = () => {
  const text = document.createElement('p');
  text.innerText = 'carregando...';
  text.className = 'loading';
  text.style.fontSize = '2.2rem';
  text.style.margin = 'auto auto';
  document.querySelector('.items').appendChild(text);
};

const pageLoaded = () =>
  document
    .querySelector('.items')
    .removeChild(document.querySelector('.loading'));

let arrPrice = [];
const addList = async (event) => {
  document
    .querySelector(cartItems)
    .appendChild(
      createCartItemElement(
        await fetchItem(event.target.parentElement.children[0].innerText),
      ),
    );
  saveCartItems(document.querySelector(cartItems).innerHTML);
  const obj = await fetchItem(
    event.target.parentElement.querySelector('.item_id').innerText,
  );
  arrPrice.push(obj.price);
  document.querySelector(totalPrice).innerText = Math.round(arrPrice
    .reduce((acc, curr) => acc + curr) * 100) / 100;
};

const createTextValue = () => {
  const subtitle = document.createElement('h6');
  subtitle.innerText = 'Valor Total:';
  subtitle.className = 'subtitle-price';
  const value = document.createElement('p');
  value.className = 'total-price';
  document.querySelector('.cart').appendChild(subtitle);
  document.querySelector('.cart').appendChild(value);
};

const getLocalStorage = () => {
  document.querySelector(cartItems).innerHTML = getSavedCartItems('cartItems');
  document.querySelectorAll('.cart__item').forEach((element) =>
    element.addEventListener('click', cartItemClickListener));
};

const emptyCart = () => {
  document.querySelector('.empty-cart').addEventListener('click', () => {
    document.querySelector(cartItems).innerText = '';
    document.querySelector(totalPrice).innerText = '0';
    arrPrice = [];
    saveCartItems(document.querySelector(cartItems).innerHTML);
  });
};

window.onload = async () => {
  pageLoading();
  (await fetchProducts('computador')).results.forEach((element) =>
    document
      .querySelector('.items')
      .appendChild(createProductItemElement(element)));
  document.querySelectorAll('.item').forEach((element) => {
    element.addEventListener('click', async (event) => {
      addList(event);
    });
  });
  pageLoaded();
  emptyCart();
  createTextValue();
  getLocalStorage();
};
