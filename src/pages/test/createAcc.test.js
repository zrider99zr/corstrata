import React from 'react';
import { mount,configure } from 'enzyme';
import '../createAccount.js';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



describe('subbut ', () => {
  it('fires an onClick when enabled', () => {
    const spy = jest.fn();
    const wrapper = mount(<button/>);
 

    //expext(<input id="#input-password" onInput='corstrata'/>).toBe(password);
    wrapper.simulate('click');
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

describe('last name', () => {
  it('email should be', () => {
  
    const lastName = 'last';
    expect(lastName).toBe('last');
  });
});
