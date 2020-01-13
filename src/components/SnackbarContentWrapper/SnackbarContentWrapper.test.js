import React from 'react';

import ReactDOM from 'react-dom';

import SnackbarContentWrapper from './SnackbarContentWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    (
      <SnackbarContentWrapper
          variant="success"
          className=""
          onClose={()=>{}} />
    ),
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
