import data from 'src/data';

const initialState = {
  list: data,
};

export default (stateActuel = initialState, action = {}) => {
  switch (action.type) {
    default:
      return stateActuel;
  }
};

export const findOneRecipe = (list, slug) => list.find((elem) => elem.slug === slug);
