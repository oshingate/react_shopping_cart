import { connect } from 'react-redux';
import Products from './Products';

function Main(props) {
  return (
    <div className='main flex-80'>
      <Products data={props.products} />
    </div>
  );
}

function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps)(Main);
