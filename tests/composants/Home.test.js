import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from 'src/components/Home';
import Card from 'src/components/Card';
// import { initialState } from 'src/store/reducer';

describe('<Home />', () => {
  describe('should return proper value', () => {
    // it('should return 5 cards', () => {
    //   const array = initialState.list;
    //   const wrapper = shallow(<Home recipes={array} appInit={() => {}} />);

    //   expect(wrapper.find(Card)).to.have.lengthOf(2);
    // });

    // it('should return 5 cards', () => {
    //   const array = initialState.list;
    //   const wrapper = shallow(<Home recipes={array} appInit={() => {}} />);

    //   expect(wrapper.find('.content-list')).to.have.lengthOf(2);
    // });

    it('should return 0 cards', () => {
      const array = [];
      const wrapper = shallow(<Home recipes={array} appInit={() => {}} />);
      expect(wrapper.find(Card)).to.have.lengthOf(0);
    });
  });
});
