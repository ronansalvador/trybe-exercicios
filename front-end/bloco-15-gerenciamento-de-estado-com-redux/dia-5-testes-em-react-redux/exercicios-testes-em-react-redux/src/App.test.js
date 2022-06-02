import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const qualquerCoisa = screen.getByText('0');
    const buttonAdicionar = screen.queryByText('Clique aqui');
    expect(buttonAdicionar).toBeInTheDocument();
    expect(qualquerCoisa).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
    // const qualquerCoisa1 = screen.getByText('1');
    // expect(qualquerCoisa1).toBeInTheDocument();
    expect(qualquerCoisa.textContent).toBe('1');

  });
});