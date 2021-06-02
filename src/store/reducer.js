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
