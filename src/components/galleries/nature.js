import './nature.css'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "../../slick-1.8.1/slick/slick-theme.css"
import "../../slick-1.8.1/slick/slick.css"
import App from '../../App'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import { config } from '../../assets/constants'
import Box from '@material-ui/core/Box'


const useStyles = makeStyles({
  root: {
    maxWidth: "24vw",
    width: "24vw",
    flexGrow: '4',
    margin: "0.6vw",
    backgroundColor: 'black'
  },
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black'
  },
  link:{
    textDecoration: 'none',
    color: "black"
  },
  media: {
    height: "400px",
  },
  content: {
    paddingBottom: "0px",
    backgroundColor: "black"
  },
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    // backgroundColor: 'black'
  },
  title: {
    fontFamily: 'Prestage',
    fontSize: "6vw",
    color: "#a78824",
    marginTop: "3%",
    marginBottom: "0%",
    marginLeft: "10%",
    marginRight: "10%"
  },
  subheader: {
    fontFamily: "'Prestage', 'cursive'",
    fontSize: "2vw",
    marginTop: "3%",
    marginBottom: "0%",
    color: "black"
  },
  button: {
    marginTop: "10px",
    color: "white",
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: '#636360',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#BDBFBF',
    },
  },
  photoTitle: {
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: 'white',
    fontSize: "1.5vw",

  }
});


export default function Nature () {
  const classes = useStyles();
  const [photos, setPhotos] = useState([])
  console.log('photos', photos)
  const failed = 'https://httpstatusdogs.com/img/204.jpg'
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    centerMode: true,
    // variableWidth: true
  }
  let photosUrlNature = config.url.API_URL_NATURE
  console.log('environment', config.url.API_URL_NATURE)

  useEffect(() => {
    let getPhotos = async () => {
      let response = await fetch(photosUrlNature)
      let data = await response.json()
      setPhotos(data);
    }
    getPhotos()
  }, [])

  if (photos === undefined) {
    return (
      <h1>Loading.  Please wait...</h1>
    )
  } else {



return (

  <div>

    <Box bgcolor="text.secondary" alignItems="center"
      justifyContent="center" p={4} >
      <div className={classes.row}>

        <p className={classes.title}>///</p>
        <p className={classes.title}>NATURE</p>
        <p className={classes.title}>\\\</p>

      {photos && photos.map(r => {
        return (
          <Card key={r.id} className={classes.root}>
          <Link to={`/photography/${r.category}`} className={classes.link}>
            <CardActionArea>
            <CardMedia
              className={classes.media}
              image={r.image_url}
              title={r.title}
            />
            <CardContent className={classes.content}>
            <Typography className={classes.photoTitle}>
              {r.title }
            </Typography>
            </CardContent>
            </CardActionArea>
          </Link>
          </Card>)
    })}
    </div>
    </Box>

      </div>)
}
}