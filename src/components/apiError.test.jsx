import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ApiError from './apiError';

describe('Testing ApiError', () => {
    it('renders an error message inline using snapshots', () => {

        expect(toJson(shallow(<ApiError message="an error" />))).toMatchSnapshot();

        expect(toJson(shallow(<ApiError message="another error" />))).toMatchSnapshot();
    });
});

describe('Testing ApiError without snapshot', () => {
    const minProps = {
        message: ''
    }

    it('renders without exploding', () => {
        // make sure component rendered 1 element
        expect(shallow(<ApiError {...minProps} />)).toHaveLength(1); 
      });

    it('renders an error message', () => {
        expect(shallow(<ApiError message="an error" />))
    });
    // it.only('renders error message inside div', () => {
    it('renders error message inside div', () => {
        let message = 'error message';
        const wrapper = shallow(<ApiError {...minProps} message={message} />);
    
        expect(wrapper.find('.api-error')).toHaveLength(1); // make sure the component renders 1 span element
        expect(wrapper.find('.error-debugging').text()).toBe(message); // make sure the text inside the span equals to text prop
    
        message = 'new error message';
        wrapper.setProps({ message }); // update the text prop
       expect(wrapper.find('.error-debugging').text()).toBe(message); // make sure the component has updated text message 
      });
})
