import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
import { findOneRecipe } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  return {
    recipe: findOneRecipe(state.list, slug),
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
