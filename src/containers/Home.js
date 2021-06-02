import { connect } from 'react-redux';
import Home from 'src/components/Home';
import { appInit } from 'src/actions';

const mapStateToProps = (state) => ({
  recipes: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  appInit: () => {
    const action = appInit();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
