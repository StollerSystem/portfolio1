import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import projects from '../static/projects';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}))

export default function Projects() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return <div className={classes.root} id="projects">
    <ProjectCard project={projects[0]} checked={checked} />
    <ProjectCard project={projects[1]} checked={checked}  />
  </div>
}