import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Input from './Input';
import ReactTestUtils from 'react-dom/test-utils';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('input have a default value as minimum', () => {
    ReactTestUtils.isCompositeComponent(<Input value="vvv"/>);
});