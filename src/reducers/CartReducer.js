const initialState = {
  products: [],
  address: [],
  discount: 0,
  delivery: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      // Cria uma cópia do array de produtos atual
      const products = [...state.products];
      const id = action.payload.data.id;

      // Verifica se o produto já existe pelo id
      const index = products.findIndex(item => item.id === id);

      if (index > -1) {
        // Se existir, aumenta a quantidade
        products[index].qt += action.payload.qt;
      } else {
        // Se não existir, adiciona o produto com a quantidade
        products.push({
          ...action.payload.data,
          qt: action.payload.qt,
        });
      }

      return {
        ...state,
        products,
      };
    }

    case 'CHANGE_PRODUCT': {
      // Copia o array de produtos para manipulação
      let products = [...state.products];
      const key = action.payload.key;

      // Verifica se o índice existe para evitar erro
      if (key >= 0 && key < products.length) {
        switch (action.payload.type) {
          case '-':
            products[key].qt--;
            // Remove o produto se a quantidade chegar a zero ou menos
            if (products[key].qt <= 0) {
              products = products.filter((_, index) => index !== key);
            }
            break;
          case '+':
            products[key].qt++;
            break;
          default:
            // Tipo desconhecido: não faz nada
            break;
        }
      }

      return {
        ...state,
        products,
      };
    }

    default:
      return state;
  }
}
