import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import OrderBy from './OrderBy';

function Products(props) {
  let [products, setProducts] = useState(props.products);
  // useEffect(() => {
  //   props.dispatch({ type: 'handleOrderProducts' });
  // }, [props.products]);
  console.log(props.selectedOrder);
  console.log('Products', products);
  return (
    <div>
      <div className='products-filter'>
        <p>
          {`${products.length} Product${products.length > 1 ? 's' : ''} found.`}{' '}
        </p>
        <OrderBy />
      </div>
      <div className='flex wrap'>
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

function Product(props) {
  return (
    <div className='product-item'>
      <div className='product-label'>Free Shipping</div>
      <img
        className='product-item-img'
        src={`/static/products/${props.sku}_1.jpg`}
        alt={props.title}
      />
      <div className='product-item-details'>
        <p className='product-item-title'>{props.title}</p>
        <div className='line'></div>
        <h3 className='product-item-price'>
          {props.currencyFormat + props.price}
        </h3>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { products: state.products, selectedOrder: state.selectedOrder };
}

export default connect(mapStateToProps)(Products);
