import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import LoginForm from 'src/containers/LoginForm';

import Loading from './Loading';

import './style.scss';

function App(props) {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Menu />
      <LoginForm />
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
