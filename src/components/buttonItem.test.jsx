import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ButtonItem from './buttonItem';

describe('Testing buttonItem', () => {
  const minProps = {
    className: '',
    lang: '',
    onClickHandler: () => {}
  };

  it('renders without exploding', () => {
    // make sure component rendered 1 element
    expect(shallow(<ButtonItem {...minProps} />)).toHaveLength(1);
  });

  it('calls the handler when clicked', () => {
    const onClick = jest.fn();
    const wrapper = mount(<ButtonItem {...minProps} onClickHandler={onClick} />);
    // expect(toJson(render(<ButtonItem {...minProps} />))).toMatchSnapshot();

    // fire a click event on the button element
    wrapper.find('button').simulate('click');

    // assert the mock has been called
    expect(onClick).toHaveBeenCalled();
  });
});
