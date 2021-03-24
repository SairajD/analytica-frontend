import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import axios from 'axios'

const drawerWidth = 240;

const documentID = '604865dc9c7f42544d67f492'

const useStyles = makeStyles((theme) => ({
  timelineRoot: {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth
  },
  timelineToolbar: theme.mixins.toolbar,
  paper: {
    padding: '6px 16px',
    margin: theme.spacing(3)
  },
  timelineContent:{
      width : 1000,
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(2),
      flexWrap: 'wrap',
      wordWrap: 'break-word',
  },
  likeComment:{
      display:"flex",
      justifyContent:"center",
      marginTop:theme.spacing(2),
      marginBottom:theme.spacing(2),
  },
  likeComItem:{
      marginLeft:theme.spacing(4),
      marginRight:theme.spacing(2),
  },
  timelineTitle:{
      marginTop:theme.spacing(2),
      marginBottom:theme.spacing(2),      
      marginLeft: theme.spacing(2),
  }
}));

export default function SearchDataDisplay() {
  const classes = useStyles();
  const [socialInfoNegatives, setSocialInfoNegatives] = useState([{caption:"", likes:0, comments:0, timestamp:0, thumbnail:""}])
  
  const socialData = () => {
    
    axios
        .get(`https://analytica-parsb-api.herokuapp.com/instagram/tags/${documentID}/download`)
        .then(response => {
            const negData = response.data.negatives;
            setSocialInfoNegatives(negData);
        })
        .catch(err => {
            console.log(err);
        })
        
            
        }




useEffect(() => {
    
    socialData();
                                                                         
}, [])

console.log(socialInfoNegatives)

  return (
    <div className={classes.timelineRoot}>
    <CssBaseline />
    <div className={classes.timelineToolbar}/>
    
    
    {socialInfoNegatives.map((item, index) => (
      
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.timelineTitle} variant="h6" component="h1">
              {item.sentiment}
            </Typography>
            <Typography className={classes.timelineContent}>{item.caption}</Typography>
            <div className={classes.likeComment}>
                <Typography className={classes.likeComItem}>{item.likes}</Typography>
                <ThumbUpIcon color="primary"/>
                <Typography className={classes.likeComItem}>{item.comments}</Typography>
                <CommentIcon color="primary"/>
            </div>
          </Paper>
        
      ))}
    
    </div>
  );
}

