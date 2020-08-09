import React from 'react';
import ReactDOM from 'react-dom';
import {render,cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';

import Button from './button';

afterEach(cleanup)
it("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<Button/>,div);
});

it("renders button correctly",()=>{
    const{getByTestId}=render(<Button label="Click me please"/>);
    expect(getByTestId('button')).toHaveTextContent("Click me please");
});


it("renders button correctly",()=>{
    const{getByTestId}=render(<Button label="Click me"/>);
    expect(getByTestId('button')).toHaveTextContent("Click me");
});

it("matches snapshot",()=>{
    const tree=renderer.create(<Button label="Save"/>).toJSON();
    expect(tree).toMatchSnapshot();
});