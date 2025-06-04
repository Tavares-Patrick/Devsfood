const initialState = {
  products: [],
  address: [],
  discount: 0,
  delivery: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const products = [...state.products];
      const id = action.payload.data.id;
      const index = products.findIndex(item => item.id === id);
      if (index > -1) {
        products[index].qt += action.payload.qt;
      } else {
        products.push({
          ...action.payload.data,
          qt: action.payload.qt
        });
      }
      return { ...state, products };

    default:
      return state;
  }
};
