import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SimpleForm from './SimpleForm';

it('updates value on input change', () => {
    const wrapper = shallow(<SimpleForm submit={() => {}} />);

    // simulate input field change event
    wrapper.find('input').simulate('change', {
        target: { value: 'new value' }
    });

    expect(wrapper.state().input).toBe('new value');
});

it('calls form handler on submit', () => {
    const mockHandler = jest.fn();

    const wrapper = shallow(<SimpleForm onClick={mockHandler} />);
    wrapper.setState({ input: 'the form value' });

    // simulate form submit event
    wrapper.find('button').simulate('click', { preventDefault: jest.fn() });

    expect(mockHandler).toHaveBeenCalledWith('the form value');
});