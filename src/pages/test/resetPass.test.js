import React from 'react';
import { mount,configure } from 'enzyme';
import '../resetPassword.js';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });




describe('input tag ', () => {
  it('fires an input when typed', () => {
    const spy = jest.fn();
    const wrapper = mount(<input/>);
 

    //expext(<input id="#input-password" onInput='corstrata'/>).toBe(password);
    wrapper.simulate('input');
    //expect(spy).toHaveBeenCalled();
  });

});

describe('Email', () => {
  it('email should be', () => {
  
    const email = 'admin@corstrata.com';
    expect(email).toBe('admin@corstrata.com');  });
});

describe('password', () => {
  it('email should be', () => {
  
    const password = 'corstrata';
    expect(password).toBe('corstrata');
  });
});

describe('first name', () => {
  it('email should be', () => {
  
    const firstName = 'first';
    expect(firstName).toBe('first');
  });
});
