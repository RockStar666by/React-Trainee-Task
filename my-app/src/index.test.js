import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import { EpisodeSummary } from './components/EpisodeSummary/EpisodeSummary';

describe('App', () => {
  it('Render Main Page', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    screen.debug();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it('Render Episode Page', () => {
    render(
      <Provider store={store}>
        <EpisodeSummary />
      </Provider>
    );
    screen.debug();
    expect(screen.getByAltText(/Episode/i)).toBeInTheDocument();
  });
});
