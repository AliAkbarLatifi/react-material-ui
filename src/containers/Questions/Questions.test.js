import React from 'react';

import ReactDOM from 'react-dom';

import { MemoryRouter } from 'react-router-dom';

import Questions from './Questions';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const match = {path: '/question'};

  ReactDOM.render(
    (
      <MemoryRouter>
        <Questions match={match}/>
      </MemoryRouter>
    ),
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
