import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import EmptyState from 'components/EmptyState';
import LaunchScreen from 'components/LaunchScreen'

import QuestionsAPI from './QuestionsAPI'
import QuestionsItem from "./QuestionsItem";

const useStyles = makeStyles( theme => ({
  root: {
    paddingTop: theme.spacing(3),
  },
  title: {
    padding: theme.spacing(3)
  },
}));



function Questions({match}) {
  const classes = useStyles();
  const apiUrl = match ? match.path : '/questions';
  const [data, setData] = useState({error:false, loading: true, questions:[]});

  useEffect(()=>{
    QuestionsAPI.getQuestions(apiUrl)
        .then((response)=>{
          const questions = Array.isArray(response.data) ? response.data : [];
          const res= {loading: false, questions};
          setData({...data, ...res});
        });

  },[]);
  const {loading, error, questions} = data;
  const hasData = questions.length > 0;
  return (
    <>
      {loading &&
        <LaunchScreen />
      }
      {hasData &&
        <Container className={classes.root} maxWidth="false">
          <Typography className={classes.title} variant="h4" component="h1">Questions</Typography>
          <Grid container spacing={3}>
            {
              questions.map(question => (
                  <Grid key={question.url} item xs sm={6} md={4} lg={3}>
                    <QuestionsItem  item={question}/>
                  </Grid>
              ))
            }
          </Grid>
        </Container>
      }
      {error &&
      <EmptyState
          title="There is no response by API call"
      />
      }
    </>
  );
}
Questions.propTypes = {
  match: PropTypes.object
};


export default Questions;
