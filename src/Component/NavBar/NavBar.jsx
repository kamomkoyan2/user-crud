import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Slide,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import useStyle from './NavBar.style.js';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const NavBar = (props) => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.header}>
          <Toolbar>
            <NavLink className={classes.tabs} to="/" exact>
              <Typography> All Users </Typography>
            </NavLink>
            <NavLink className={classes.tabs} to="add" exact>
              <Typography> Add User</Typography>
            </NavLink>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default NavBar;
