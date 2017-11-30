import React from 'react';
import { mount } from 'enzyme';
import '../createAccount.js';

it('input fields should be filled correctly', () => {
  const verifypassword = { newPass: 'pass', verifyPass: 'pass' };

  const newPassord = verifyComponent.find('#input-oldpass');
  newpassInput.value = verifypassword.newPass;
  expect(usernameInput.value).toBe('pass');

  const verifyPassword = verifyComponent.find('#input-confirm');
  verfifypassInput.value = verifypassword.verifyPass;
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

