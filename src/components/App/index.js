import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import recipesTest from 'src/data';

import Loading from './Loading';

import './style.scss';

function App(props) {
  const recipes = {
    list: recipesTest,
  };
  if (props.loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Menu />
      <Route path="/" exact>
        <Home />
      </Route>
      {/* {recipes.list.map((recipeObject) => (
        <Route path={`/recipe/${recipeObject.slug}`}>
          <Recipe recipe={recipeObject} />
        </Route>
      ))} */}
      <Route
        path="/recipe/:slug"
        component={Recipe}
      />
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
