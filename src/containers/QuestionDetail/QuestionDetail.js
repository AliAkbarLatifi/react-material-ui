import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Container, Paper, Typography, Grid, Button, CircularProgress, Snackbar } from '@material-ui/core'
import { Table, TableBody, TableCell, TableRow, TableHead } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import EmptyState from 'components/EmptyState';
import LaunchScreen from 'components/LaunchScreen'
import SnackbarContentWrapper from 'components/SnackbarContentWrapper'

import QuestionDetailAPI from './QuestionDetailAPI'

const useStyles = makeStyles( theme => ({
    root: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    title: {
        padding: theme.spacing(3),
    },
    tableWrapper: {
        margin: theme.spacing(3,0),
    },
    tableRow: {
        cursor: 'pointer',
        '&:hover' : {
            backgroundColor: '#f5f5f5'
        },
        '&.selected' : {
            backgroundColor: '#eee'
        }
    }
}));

function QuestionDetail({match, history}) {
    const classes = useStyles();
    const apiUrl = match.url;
    const [data, setData] = useState({error:false, loading: true, questionDetail:{}});
    const [selected, setSelectedIndex] = useState(-1);
    const [saveLoading, setSaveLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({open: false, variant: 'success', message : ''});

    useEffect(()=>{
        QuestionDetailAPI.getDetail(apiUrl)
            .then((response) => {
              const questionDetail = response.data;
              setData({...data, loading: false, questionDetail});
            });

    },[apiUrl]);

    const handleChoiceItemClick = index => event => {
        event.preventDefault();
        setSelectedIndex(index);
    };
    const saveVotes = event => {
        event.preventDefault();
        if (selected < 0 || saveLoading) return false;
        setSaveLoading(true);
        const {questionDetail} = data;
        const body = questionDetail.choices[selected];
        QuestionDetailAPI.saveVote(body.url, body)
            .then(() => {
                setSnackbar({open: true, variant: 'success', message: 'The vote saved successful.' });
                setTimeout(() => {
                    history.push('/questions')
                }, 1000);
            }).catch(() => {
                setSnackbar({open: true, variant: 'error', message: 'Server error' });
            }).finally(() => {
                setSaveLoading(false);
        });
    };
    const handleCloseSnackbar = () =>{
        setSnackbar({...snackbar}, {open: false});
    };
    const {loading, error, questionDetail} = data;
    const hasData = !!questionDetail.question;
    return (
        <>
      {loading &&
        <LaunchScreen />
      }
      {hasData &&
        <Container className={classes.root} maxWidth={false}>
          <Typography className={classes.title} variant="h4" component="h1">Questions Detail</Typography>
          <Typography variant="h5" component="h5">
            <strong>Question:</strong> { questionDetail.question }
          </Typography>
          <Paper className={classes.tableWrapper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Choice</TableCell>
                  <TableCell align="left">Votes</TableCell>
                  <TableCell align="left">Percent</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {questionDetail.choices.map((row, index) => (
                    <TableRow key={row.url}
                              className={`${classes.tableRow} ${(selected === index) ? 'selected' : ""}`}
                              onClick={handleChoiceItemClick(index)}>
                      <TableCell component="th" scope="row">
                        {row.choice}
                      </TableCell>
                      <TableCell align="left">{row.votes}</TableCell>
                      <TableCell align="left">{row.votes}%</TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <Grid container justify="flex-end" >
            <Grid item>
              <Button variant="contained"
                      color="secondary"
                      size="large"
                      disabled={selected < 0} onClick={saveVotes}>
                  Save Vote {saveLoading && <CircularProgress size={24} color="inherit"/>}
              </Button>
            </Grid>
          </Grid>

        </Container>
      }
      {error &&
      <EmptyState
          title="There is no response by API call"
      />
      }
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
        >
            <SnackbarContentWrapper
                onClose={handleCloseSnackbar}
                variant={snackbar.variant}
                message={snackbar.message}
            />
        </Snackbar>
    </>
    );
}
QuestionDetail.propTypes = {
  match: PropTypes.object
};

export default QuestionDetail;
