import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { GithubCircle, Linkedin } from 'mdi-material-ui'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit *3,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  alignItems: 'flex-end',
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
})

const Header = props => {
  const { classes } = props;

  return (
      <div id='header'>
        <AppBar title='Randy Lam' position='static' color='primary'>
          <Toolbar>
            <Typography variant='title' color='secondary'>
              Randy Lam
            </Typography>

            <IconButton className={classes.alignItems} aria-label="GitHub" color='secondary' >
              <GithubCircle />
            </IconButton>

            <IconButton className={classes.alignItems} aria-label="LinkedIn" color='secondary' >
              <Linkedin />
            </IconButton>
          </Toolbar>
        </ AppBar>
      </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Header);
