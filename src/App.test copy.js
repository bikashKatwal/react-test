import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { shallow, mount } from 'enzyme';


describe('Counter Testing',()=>{

  let wrapper;
  beforeEach(()=>{
    wrapper = mount(<App/>);
    // console.log(wrapper.debug());
  });

  test('renders the title of counter', () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('h1').text()).toContain('This is a counter app');
  });

  test("renders a button with text of `increament`",()=>{
    expect(wrapper.find('#increment-btn').text()).toBe("Increment");
  });

  test("render a initial value of state in a div",()=>{
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

  test("renders a button with text of `decreament`",()=>{
    expect(wrapper.find('#decrement-btn').text()).toBe("Decrement");
  });

  test("render the click event on increment button and increment counter value",()=>{
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
  });

  test("render the click event decrement button and decrement counter value",()=>{
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");

    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");

    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

});





