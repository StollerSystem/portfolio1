import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100vh',
    color: 'white'
  },
  appbar: {
    background: 'rgba(0,0,0,0.5)',
    fontFamily: ''
  },
  appbarTitle: {
    flexGrow: '1'
  },
  icon: {
    color: 'white',
    fontSize: '2rem',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto'
  },
  colorText: {
    color: ' #00fbff'
  },
  container: {
    textAlign: 'center',
  },
  title: {
    fontSize: '3.5rem'
  },
  goDown: {
    color: 'white',
    fontSize: '3rem'
  }
}));

export default function Header() {

  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, [])

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>STOLLER <span className={classes.colorText}>SYSTEM</span></h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            <span className={classes.colorText}>STOLLERSYSTEM</span>
          </h1>
          <Scroll to="projects" smooth="true">
            <IconButton>
              <ArrowDownwardIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  )
};