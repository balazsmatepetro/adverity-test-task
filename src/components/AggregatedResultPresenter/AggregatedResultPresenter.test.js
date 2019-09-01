import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import AggregatedResultPresenter from './AggregatedResultPresenter';

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders the element properly with the given values', () => {
    act(() => {
        render(<AggregatedResultPresenter name="Present Me" value={1} />, container);
    });

    const element = container.querySelector('.aggregated-result-presenter');

    expect(element.className).toEqual('aggregated-result-presenter');
    expect(element.querySelector('div').textContent).toEqual('Present Me');
    expect(element.querySelector('code').textContent).toEqual('1');
});
