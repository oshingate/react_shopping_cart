import { connect } from 'react-redux';

function Sidebar(props) {
  return (
    <aside className='flex-20 sidebar'>
      <div className='flex wrap'>
        {props.uniqueSizes.map((size, i) => (
          <span className='size' key={i}>
            {size}
          </span>
        ))}
      </div>
    </aside>
  );
}
function mapStateToProps(state) {
  return { uniqueSizes: state.uniqueSizes };
}

export default connect(mapStateToProps)(Sidebar);
