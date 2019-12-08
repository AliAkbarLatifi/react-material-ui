import React from 'react';

import EmptyState from 'components/EmptyState';

function Home() {
  return (
    <EmptyState
      title={process.env.REACT_APP_NAME}
      description={process.env.REACT_APP_DESCRIPTION}
    />
  );
}

export default Home;
