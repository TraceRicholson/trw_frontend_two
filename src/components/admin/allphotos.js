import React, { useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { config } from '../../assets/constants'

const useStyles = makeStyles({
  root: {
    maxWidth: "24vw",
    width: "24vw",
    flexGrow: '4',
    margin: "0.6vw"
  },
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
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
  },
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
  },
  title: {
    fontFamily: "'Prestage', 'cursive'",
    fontSize: "6vw",
    color: "red",
    marginTop: "3%",
    marginBottom: "0%",

  },
  button: {
    marginTop: "10px",
    color: "white",
    backgroundColor: '#373940',
    '&:hover': {
      backgroundColor: '#636360',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#BDBFBF',
    },
  },
  recipeTitle: {
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default function AllPhotos () {

  const classes = useStyles();
  const [photos, setPhotos] = useState([])
  let photosUrl = config.url.API_URL
  console.log('environment', config.url.API_URL)

  useEffect(() => {
    let getPhotos = async () => {
      let response = await fetch(photosUrl)
      let data = await response.json()
      console.log('favorites', data)
      setPhotos(data)
    }
    getPhotos()
  }, [])

  return (
    <div className={classes.page}>
    <h1 className={classes.title}>ALL DATABASE PHOTOS</h1>
    <div className={classes.row}>
      {photos && photos.map(p => {
        return (
          <Card id={p.id} className={classes.root}>
          <Link to={`/photos/${p.id}`} className={classes.link}>
            <CardActionArea>
            <CardMedia
              className={classes.media}
              image={p.image_url}
              title={p.title}
            />
            <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.recipeTitle}>
              {p.title}
            </Typography>
            </CardContent>
            </CardActionArea>
          </Link>
            <CardActions className={classes.page}>
              <Button className={classes.button} linksize="small" color="primary"
                onClick={()=>{
                  fetch(photosUrl, {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json; charset=utf-8'},
                    body: JSON.stringify({id: p.id, title: p.title, category: p.category, description: p.description, metadata: p.metadata, image_url: p.image_url})
                  })
                  window.location.reload()

                }}>
                Remove From The Database
               </Button>
            </CardActions>
          </Card>)
    })}
    </div>
    </div>
  )
}