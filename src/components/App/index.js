import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
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
      <Menu recipes={recipes.list} />
      <Route path="/" exact>
        <Home recipes={recipes.list} />
      </Route>
      {/* {recipes.list.map((recipeObject) => (
        <Route path={`/recipe/${recipeObject.slug}`}>
          <Recipe recipe={recipeObject} />
        </Route>
      ))} */}
      <Route
        path="/recipe/:slug"
        render={(routerObject) => {
          const { slug } = routerObject.match.params;
          const recipe = recipes.list.find((recipeObject) => recipeObject.slug === slug);
          if (!recipe) {
            return <Error />;
          }
          return (
            <Recipe recipe={recipe} />
          );
        }}
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
