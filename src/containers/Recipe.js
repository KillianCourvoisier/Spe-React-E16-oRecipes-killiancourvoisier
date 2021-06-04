import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
import { findOneRecipe } from 'src/reducer/recipeReducer';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  return {
    recipe: findOneRecipe(state.recipes.list, slug),
  };
};

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
