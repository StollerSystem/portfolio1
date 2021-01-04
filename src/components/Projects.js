import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
}))

export default function Projects() {
  const classes = useStyles();
  return <div className={classes.root}>
    <ProjectCard/>
  </div>
}