import React from 'react';
import { mount,configure } from 'enzyme';
import '../createPatient.js';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });




describe('input works ', () => {
  it('fires an input when typed', () => {
    const spy = jest.fn();
    const wrapper = mount(<input/>);
 

    //expext(<input id="#input-password" onInput='corstrata'/>).toBe(password);
    wrapper.simulate('input');
    //expect(spy).toHaveBeenCalled();
  });

});

describe('submit listens ', () => {
  it('fires an click when clicked', () => {
    const spy = jest.fn();
    const wrapper = mount(<button/>);
 

    //expext(<input id="#input-password" onInput='corstrata'/>).toBe(password);
    wrapper.simulate('input');
    //expect(spy).toHaveBeenCalled();
  });

});

describe('first', () => {
  it('email should be', () => {
  
    const first = 'admin';
    expect(first).toBe('admin');  });
});

describe('last', () => {
  it('email should be', () => {
  
    const last = 'corstrata';
    expect(last).toBe('corstrata');
  });
});
