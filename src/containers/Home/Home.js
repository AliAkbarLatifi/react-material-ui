import React,{useState, useEffect} from 'react';
import { Button } from '@material-ui/core'

import EmptyState from 'components/EmptyState';
import LaunchScreen from 'components/LaunchScreen'

import API from './API'

function Home() {
  const [data, setData] = useState({error:false, loading: true, entryPoint:''});
  const handleSuccess = response => {
    const { questions_url } = response.data;
    setData({...data, loading: false, entryPoint: questions_url});
  };
  const handleError = () => {
    setData({...data, err: true, loading: false});
  };

  useEffect(() => {
    API.getEntryPoint()
        .then(handleSuccess)
        .catch(handleError)
  },[]);

  const {loading, error, entryPoint} = data;
  return (
    <>
      {loading &&
        <LaunchScreen />
      }
      {entryPoint &&
        <EmptyState
          title={process.env.REACT_APP_NAME}
          description={process.env.REACT_APP_DESCRIPTION}
          button={
            <Button
                variant="contained"
                color="primary"
                size="large"
                href={entryPoint}> Questions </Button>
          }
        />
      }
      {error &&
      <EmptyState
          title="There is no response by API call"
      />
      }
    </>
  );
}

export default Home;
