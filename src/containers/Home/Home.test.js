import React from 'react';

import ReactDOM from 'react-dom';

import { MemoryRouter } from 'react-router-dom';

import HomeContent from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    (
      <MemoryRouter>
        <HomeContent/>
      </MemoryRouter>
    ),
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
