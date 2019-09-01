import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import AggregatedResultPresenterList from './AggregatedResultPresenterList';

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
        render(<AggregatedResultPresenterList numberOfClicks={10} numberOfImpressions={20} />, container);
    });

    const element = container.querySelector('.aggregated-result-presenter-list');

    expect(element.className).toEqual('aggregated-result-presenter-list');

    const presenters = element.querySelectorAll('.aggregated-result-presenter');

    expect(presenters.length).toEqual(2);
    expectAggregatedResultPresenter(presenters[0], 'Clicks', 10);
    expectAggregatedResultPresenter(presenters[1], 'Impressions', 20);
});

/**
 * Asserts the given element.
 * 
 * @param {HTMLDivElement} element The HTML element.
 * @param {String} expectedName The expected name.
 * @param {Number} expectedValue The expected value. 
 */
function expectAggregatedResultPresenter(element, expectedName, expectedValue) {
    expect(element.querySelector('div').textContent).toEqual(expectedName);
    expect(element.querySelector('code').textContent).toEqual('' + expectedValue);
}