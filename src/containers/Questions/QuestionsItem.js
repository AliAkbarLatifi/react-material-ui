import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    date: {
        marginBottom: 12,
    },
});

function QuestionsItem({item}) {
    const classes = useStyles();
    const formattedDate = new Date(item.published_at).toISOString().replace(/T/, ' ').replace(/\..+/, '');
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} compponent="h3" gutterBottom noWrap>
                    <Link href={item.url} variant="h5" title={item.question}>
                        {item.question}
                    </Link>
                </Typography>
                <Typography className={classes.date} color="textSecondary">
                    {formattedDate}
                </Typography>
                <Typography>
                    {item.choices.length} choices
                </Typography>
            </CardContent>
        </Card>
    );
}

QuestionsItem.propTypes = {
    item: PropTypes.object
};

export default QuestionsItem;
