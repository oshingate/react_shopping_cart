import { connect } from 'react-redux';

function OrderBy(props) {
  return (
    <div className='sort'>
      Order by
      <select
        value={props.selectedOrder}
        onChange={(event) => {
          props.dispatch({ type: 'handleOrderBy', payload: { event } });
          props.dispatch({ type: 'handleOrderProducts' });
        }}
      >
        <option value='normal'>Select</option>
        <option value='lowest'>Lowest to highest</option>
        <option value='highest'>Highest to lowest</option>
      </select>
    </div>
  );
}
function mapStateToProps(state) {
  return { selectedOrder: state.selectedOrder };
}
export default connect(mapStateToProps)(OrderBy);
