import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) =>({
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  values:{
    marginLeft: theme.spacing(1),
    color: "#ffffff"
  },
  socialIcon:{
    marginRight: theme.spacing(3),
    backgroundColor: "#ffffff",
  }
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  let socialPlat = props.socialPlat;
  let socialClass = props.socialClass;

  return (
    <Card className= {socialClass}>
      <CardContent className={classes.content}>
        <Avatar alt="Profile Picture" src= {socialPlat} className={classes.socialIcon}/>
        <Typography className={classes.values} variant="body2" component="p" align="left">
          POSTS 
          <br/>
          LIKES  
          <br/>
          DISLIKES  
          <br/>
          COMMENTS 
          <br/>
          SHARES  
          <br/>
          SUBSCRIBERS  
        </Typography>
        <Typography className={classes.values} variant="body2" component="p" align="right">
          : 1000
          <br/>
          : 1000
          <br/>
          : 1000 
          <br/>
          : 1000 
          <br/>
          : 1000 
          <br/>
          : 1000 
        </Typography>
      </CardContent>
    </Card>
  );
}
