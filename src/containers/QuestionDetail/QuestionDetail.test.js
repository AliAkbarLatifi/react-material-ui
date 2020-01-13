import React from 'react';

import ReactDOM from 'react-dom';

import { MemoryRouter } from 'react-router-dom';

import QuestionDetail from './QuestionDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const match = {path: '/question'};
  const history = {};

  ReactDOM.render(
    (
      <MemoryRouter>
        <QuestionDetail match={match} history={history}/>
      </MemoryRouter>
    ),
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
