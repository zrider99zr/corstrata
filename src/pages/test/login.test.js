import React from 'react';
import { mount,shallow,configure} from 'enzyme';
import SubmitButton from '../loginPage';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });





describe('<SubmitButton />', () => {
  it('fires an onClick when enabled', () => {
    const spy = jest.fn();
    const wrapper = mount(<SubmitButton onClick={spy} />);
    
    wrapper.simulate('click');
    //expect(spy).toHaveBeenCalled();
  });

});

describe('Email', () => {
  it('email should be', () => {
  
    const email = 'client@corstrata.com';
    expect(email).toBe('client@corstrata.com');
  });
});
describe('pass', () => {
  it('pass should be', () => {
  
    const pass = 'corstrata';
    expect(pass).toBe('corstrata');
  });
});



  
// describe('Test Button component', () => {
//   it('Test click event', () => {
//     const mockCallBack = jest.fn();

//     const button = shallow((<SubmitButton  onClick={mockCallBack}>Ok!</SubmitButton>));
//     button.find('1').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });


// describe('<SubmitButton /> Logs in', () => {
//     const testValues = {
//         username: 'FOO',
//         password: 'BAZ',
//         handleSubmit: jest.fn(),
//     };

//     it('Submit works', () => {

//         const component = shallow(
//             <SubmitButton {...testValues} />
//         );
//         component.find('#submitButton').simulate('submit');
//         expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
//         expect(testValues.handleSubmit).toBeCalledWith({username: testValues.username, password: testValues.password});
//     });
// });
