import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px'
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: '',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: 'white'
  },
  desc: {
    fontFamily: '',
    fontSize: '1.1rem',
    color: 'white'
  }
});

export default function ProjectCard({ project, checked}) {
  const classes = useStyles();

  return (

    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            // image={process.env.PUBLIC_URL + '/assets/Heptagram1.jpg'}
            image={project.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              {project.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
              {project.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
      </Card>
    </Collapse>
  );
}
