import React from 'react';
import { mount } from 'enzyme';
import '../createAccount.js';

it('input fields should be filled correctly', () => {
  const credentials = { username: 'admin', password: 'pass' };
   expect(loginComponent.find('#input-auth-username').length).toBe(1);

  const usernameInput = loginComponent.find('#input-email');
  usernameInput.value = credentials.username;
  expect(usernameInput.value).toBe('admin');

  const passwordInput = loginComponent.find('#input-password');
  passwordInput.value = credentials.password;
  expect(passwordInput.value).toBe('pass');
});


describe('<submits new account />', () => {
  it('fires an onClick when enabled', () => {
    const spy = jest.fn();
    const wrapper = mount(<sub-button onClick={spy} />);

    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

});

