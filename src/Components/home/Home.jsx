import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SimpleCard from '../socialDataCards/SocialDataCards';
import Facebook from "./facebook.png"
import Instagram from "./instagram.png"
import Linkedin from "./linkedin.png"
import Twitter from "./twitter.png"
import DougnutChart from '../charts/doughnut/DougnutChart';
import LineChart from '../charts/line/LineChart';
import axios from 'axios'
import { Typography } from '@material-ui/core';

const drawerWidth = 240;

const documentID = '604865dc9c7f42544d67f492'

const useStyles = makeStyles((theme) => ({
    homeRoot: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth
    },
    homeToolbar: theme.mixins.toolbar,
    Facebook: {
      width: 250,
      height: 150,
      backgroundColor: "#5F77A9",
      borderRadius: theme.spacing(1)
    },
    Twitter: {
      width: 250,
      height: 150,
      backgroundColor: "#30B9EE",
      borderRadius: theme.spacing(1)
    },
    Linkedin: {
      width: 250,
      height: 150,
      backgroundColor: "#3B8EB6",
      borderRadius: theme.spacing(1)
    },
    Instagram: {
      width: 250,
      height: 150,
      backgroundColor: "#F48451",
      borderRadius: theme.spacing(1)
    },    
    socialCards: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: theme.spacing(3),
    },
    pieChart: {
        width: 250,
        height: 340,
        backgroundColor: "#ffffff",
        borderRadius: theme.spacing(1),
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop:theme.spacing(3)
    },
    lineChart: {
        width: 650,
        height: 340,
        backgroundColor: "#ffffff",
        borderRadius: theme.spacing(1),
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop:theme.spacing(3)
    },
    chartRow:{
        display:"flex"
    }
  }));

  

  export default function Home() {
    const classes = useStyles();
    const [facebookData, setFacebookData] = useState({series:[],options:{labels:[],
        dataLabels:{
        enabled: false,
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center', 
        floating: false,
        fontSize: '12px',
        fontWeight: 400,
        inverseOrder: false,
        offsetX: 0,
        offsetY: 0,
        markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: '#fff',
            radius: 24,
        },
        itemMargin: {
            horizontal: 5,
            vertical: 5
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
    },
    chart: {
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    }}})
   
    const [lineData, setLineData] = useState({series:[{data:[]}],options:{xaxis:{categories:[]}}})

    const facebookChart = () => {
        let positive
        let negative
        axios
            .get(`https://analytica-parsb-api.herokuapp.com/instagram/tags/${documentID}/download`)
            .then(response => {

                positive = parseInt(response.data.numberOfPositives)
                negative = parseInt(response.data.numberOfNegatives)
                setFacebookData({
                    series:[positive, negative],
                    options:{
                        labels:["positive feedback", "negative feedback"]
                    },
                    
                })
                setLineData({
                    series:[{data:[positive, negative]}],
                    options:{xaxis:{categories:[positive, negative]}}
                })
                                
            })
            .catch(err => {
                console.log(err)
            })
            

                console.log(facebookData)
            }
    

   

    useEffect(() => {
        
        facebookChart();
                                                                             
    }, [])

  
    return (
      <div className={classes.homeRoot}>
        <CssBaseline />
        <div className={classes.homeToolbar}/>
        <div className={classes.socialCards}>
            <SimpleCard socialPlat={Facebook} socialClass={classes.Facebook}/>
            <SimpleCard socialPlat={Twitter} socialClass={classes.Twitter}/>
            <SimpleCard socialPlat={Instagram} socialClass={classes.Instagram}/>
            <SimpleCard socialPlat={Linkedin} socialClass={classes.Linkedin}/>
        </div>
        <div className={classes.chartRow}>
        <div className={classes.pieChart}>
            <Typography variant="body1" color="textPrimary"> 
                Sentiment Analysis
            </Typography>
            <DougnutChart data = {facebookData} width = "250" height = "300"/>
        </div>
        <div className={classes.lineChart}>
            <Typography variant="body1" color="textPrimary"> 
                Growth Of Followers
            </Typography>
            <LineChart data = {lineData} width = "600" height = "280"/>
        </div>
        </div>
        <div className={classes.homeToolbar}/>
      </div>
    );
  }