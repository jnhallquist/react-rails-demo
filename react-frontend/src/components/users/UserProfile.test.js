import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import UserProfile from './UserProfile';

describe('<UserProfile />', () => {
  let component;

  beforeEach(() => {
    component = mount(<UserProfile />);
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserProfile />, div);
  });
});
