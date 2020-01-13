import React from 'react';
import clsx from 'clsx';
import {SnackbarContent, IconButton} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {green, amber} from '@material-ui/core/colors'
import {Error, Info, Close as CloseIcon, Warning, CheckCircle} from '@material-ui/icons'
import PropTypes from "prop-types";

const variantIcon = {
    success: CheckCircle,
    warning: Warning,
    error: Error,
    info: Info,
};

const useStyles = makeStyles(theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

function SnackbarContentWrapper(props) {
    const classes = useStyles();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];
  return (
      <SnackbarContent
          className={clsx(classes[variant], className)}
          message={
              <span id="client-snackbar" className={classes.message}>
                  <Icon className={clsx(classes.icon, classes.iconVariant)}>{variantIcon[variant]}</Icon>
                          {message}
                </span>
          }
          action={[
              <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                  <CloseIcon className={classes.icon} />
              </IconButton>,
          ]}
          {...other}
      />
  );
}

SnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

export default SnackbarContentWrapper;
