import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


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
    fontFamily: "'Prestage', 'regular'",
    fontSize: "6vw",
    marginTop: "3%",
    marginBottom: "0%",
    color: "#a78824"
  },
  subheader: {
    fontFamily: "'Prestage', 'regular'",
    fontSize: "2vw",
    marginTop: "3%",
    marginBottom: "0%",
    color: "#a78824"
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
  photoTitle: {
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default function Photography() {
  const classes = useStyles();
  const [photos, setPhotos] = useState([])
  console.log('photos', photos)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let getPhotos = async () => {
      let response = await fetch('http://localhost:5000/photos')
      let data = await response.json()
      setPhotos(data)
    }
    getPhotos()
  }, [])

let galleryCovers = [
  //URBAN
  { title : 'Minneapolis', category: 'urban', description: 'A view of the Minneapolis skyline during sunset.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/isooru5dx4rkyqy/DJI_0022.jpg?raw=1'},
  //NATURE
  { title : 'Vast', category: 'nature', description: 'A top-down view of a section of frozen river.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/dnb5jabv90fb30g/Richolson%2C%20Trace.%20VAST.%20archival%20pigment%20ink%20on%20paper%2C%206.6%20x%209.9%20in%2C%202016.jpg?raw=1'},
  //LIVE MUSIC
  { title : 'Halestorm.1', category: 'live', description: 'Lzzy Hale of Halestorm holds up her guitar after performing a song.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/v0s1ymg71auvklr/Live%20Here-20.jpg?raw=1'}]

  return (
    <div className={classes.page}>
    <h1 className={classes.title}>A World Through My Lens</h1>
    <p className={classes.subheader}>Click on an image to view the gallery. </p>

    <div className={classes.row}>
      {galleryCovers && galleryCovers.map(r => {
        return (
          <Card key={r.id} className={classes.root}>
          <Link to={`/photography/${r.category}`} className={classes.link}>
            <CardActionArea>
            <CardMedia
              className={classes.media}
              image={r.image_url}
              title={r.category}
            />
            <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.photoTitle}>
              {r.category }
            </Typography>
            </CardContent>
            </CardActionArea>
          </Link>
          </Card>)
    })}
    </div>
    </div>
  )
}