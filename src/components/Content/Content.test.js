import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Content from './Content'
import MockedSearch from '../Search/Search'

jest.mock('../Search/Search', () => {
    return function DummySearch() {
        return (
            <div data-testid="search">I'm the mocked search component.</div>
        )
    }
})

let container = null

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

it('renders the element properly with the given values', () => {
    act(() => {
        render(<Content />, container)
    })

    const element = container.querySelector('.content');

    expect(element.className).toEqual('content');

    const search = element.querySelector('div');

    expect(search.hasAttribute('data-testid')).toBe(true);
    expect(search.getAttribute('data-testid')).toEqual('search');
    expect(search.innerHTML).toEqual(`I'm the mocked search component.`);
})