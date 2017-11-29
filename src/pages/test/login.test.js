import React from 'react';
import { mount } from 'enzyme';
import SubmitButton from '../loginPage'



describe('<SubmitButton />', () => {
  it('fires an onClick when enabled', () => {
    const spy = jest.fn();
    const wrapper = mount(<SubmitButton onClick={spy} />);

    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

});

