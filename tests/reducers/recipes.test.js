import { expect } from 'chai';
import reducer, {

  initialState,
  findOneRecipe,
  getHomeTitle,
  expectedDefaultReturn,
  expectedEmptyArray,
  expectedOneElementArray,
  // expectedSeveralElementArray,

} from 'src/store/reducer';

describe('Recipe Reducer', () => {
  it('must be a function', () => {
    expect(reducer).to.be.a('function');
  });

  it('should return initialState', () => {
    expect(reducer()).to.be.a('object');
    expect(reducer()).to.equal(initialState);
  });
});

describe('Recipe Selectors', () => {
  it('should be a function', () => {
    expect(findOneRecipe).to.be.a('function');
  });

  it('should return an object', () => {
    const { list } = initialState;
    const { slug } = list[0];
    expect(findOneRecipe(list, slug)).to.be.a('object');
    expect(findOneRecipe(list, slug)).to.equal(list[0]);
  });

  it('should return undefined', () => {
    const { list } = initialState;
    const { slug } = list[0];
    expect(findOneRecipe([], slug)).to.be.undefined;
    expect(findOneRecipe(list, 'tata')).to.be.undefined;
    expect(findOneRecipe()).to.be.undefined;
    expect(findOneRecipe(slug, list)).to.be.undefined;
    expect(findOneRecipe(list)).to.be.undefined;
    expect(findOneRecipe({}, slug)).to.be.undefined;
  });
});

describe('homeTitle Selectors', () => {
  it('should be a function', () => {
    expect(getHomeTitle).to.be.a('function');
  });

  describe('returns of homeTitle selectors', () => {
    it('should return default object if no params given', () => {
      expect(getHomeTitle()).to.deep.equal(expectedDefaultReturn);
    });

    it('should return default object if given empty array', () => {
      expect(getHomeTitle([])).to.eql(expectedEmptyArray);
    });

    // it('should return default object if given one element in array', () => {
    //   expect(getHomeTitle(['1'])).to.eql(expectedOneElementArray);
    // });
  });
});
