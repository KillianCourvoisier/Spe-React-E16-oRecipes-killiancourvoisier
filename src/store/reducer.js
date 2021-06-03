import data from 'src/data';

export const initialState = {
  list: data,
};

export default (stateActuel = initialState, action = {}) => {
  switch (action.type) {
    default:
      return stateActuel;
  }
};

export const findOneRecipe = (list, slug) => {
  // const toCheck = (typeof list === 'object') && list.lenght;

  if (Array.isArray(list)) {
    return list.find((elem) => elem.slug === slug);
  }
  return undefined;
};

export const expectedEmptyArray = {
  title: 'Vous n\'avez pas encore de recette !',
  message: 'N\'hesitez pas à en ajouter à vos favoris',
};

export const expectedOneElementArray = {
  title: 'Voici votre recette favorie',
  message: 'Savourez !',
};

export const expectedSeveralElementArray = {
  title: 'Voici vos recettes',
  message: 'Savourez également, mais pas toutes en même temps ! ;)',
};

export const expectedDefaultReturn = {
  title: 'Welcome on Orecipe',
  message: 'Gerez vos recette efficacement',
};

export const getHomeTitle = (tableau) => {
  if (Array.isArray(tableau)) {
    switch (tableau.lenght) {
      case 1:
        return expectedOneElementArray;
      default:
        return expectedEmptyArray;
    }
  }
  return expectedDefaultReturn;
};
