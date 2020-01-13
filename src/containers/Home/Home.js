import React,{useState, useEffect} from 'react';
import { Button } from '@material-ui/core'

import EmptyState from 'components/EmptyState';
import LaunchScreen from 'components/LaunchScreen'

import API from './API'

function Home() {
  const [data, setData] = useState({error:false, loading: true, entryPoint:''});

  useEffect(() => {
    //ToDo This is comment because of CROS error

    API.getEntryPoint()
        .then((response)=>{
          const questionUrl = response.data && response.data.questions_url;
          const res= {loading: false, entryPoint: questionUrl};
          setData({...data, ...res});
        });
    //ToDo SetTimeout fn must be remove after CROS error solved by backend
    setTimeout(()=>{
      const questionUrl = 'questions';
      const res= {loading: false, entryPoint: questionUrl};
      setData({...data, ...res});
    }, 200)
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
