const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it(`Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado`, async () => {
    const call = await saveCartItems(item);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it(`Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave 'cartItems' e o segundo sendo o valor passado como argumento para saveCartItems`, async () => {
    const str = 'Lorem Impsum';
    const call = await saveCartItems(str);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', str);
  });
});
