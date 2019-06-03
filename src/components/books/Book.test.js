import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';

describe('App component', () => {
  it('renders a App', () => {
    const wrapper = shallow(<Book book={{title: 'hey', author: 'you', imageUrl: 'fjsdklfj'}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
