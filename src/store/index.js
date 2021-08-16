import { createStore } from 'redux';
import { products } from '../data.json';

let sizes = products.reduce((acc, cv) => {
  acc = acc.concat(cv.availableSizes);
  return acc;
}, []);
let uniqueSizes = [...new Set(sizes)];

function reducer(state = { products, uniqueSizes, selectedOrder: '' }, action) {
  switch (action.type) {
    case 'handleOrderBy':
      console.log('handleOrderBy');
      return {
        ...state,
        selectedOrder: action.payload.event.target.value,
      };

    case 'handleOrderProducts':
      let sortedProductss = [...state.products];
      if (state.selectedOrder === 'normal') {
        sortedProductss = [...products];
      }
      if (state.selectedOrder === 'highest') {
        sortedProductss = sortedProductss.sort((a, b) => {
          return b.price - a.price;
        });
        console.log(state.products === sortedProductss);
        console.log(state.products == sortedProductss);
      }
      if (state.selectedOrder === 'lowest') {
        sortedProductss = sortedProductss.sort((a, b) => a.price - b.price);
        console.log(state.products === sortedProductss);
        console.log(state.products == sortedProductss);
      } else {
        //
      }

      return { ...state, products: sortedProductss };

    default:
      return state;
  }
}

let store = createStore(reducer);
export default store;
