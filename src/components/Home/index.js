import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Home = ({ recipes, appInit }) => {
  useEffect(appInit, []);
  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={recipes}
      />
    </Page>
  );
};

Home.propTypes = {
  recipes: PropTypes.array.isRequired,
  appInit: PropTypes.func.isRequired,
};

export default Home;
