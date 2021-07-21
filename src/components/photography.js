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
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

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
    fontFamily: "'Bebas Neue', 'cursive'",
    fontSize: "6vw",
    marginTop: "3%",
    marginBottom: "0%",
    color: "#FFFFFF"
  },
  subheader: {
    fontFamily: "'Bebas Neue', 'cursive'",
    fontSize: "2vw",
    marginTop: "3%",
    marginBottom: "0%",
    color: "#FFFFFF"
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


  return (
    <div className={classes.page}>
    <h1 className={classes.title}>A View Through My Eyes</h1>
    <p className={classes.subheader}>Click on an image to learn more. </p>

    <Collapse in={open}>
        <Alert
          action={
            <IconButton id="iconButton"
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          This photo has been marked for purchase!
        </Alert>
      </Collapse>
    <div className={classes.row}>
      {photos && photos.map(r => {
        return (
          <Card key={r.id} className={classes.root}>
          <Link to={`/photography/${r.id}`} className={classes.link}>
            <CardActionArea>
            <CardMedia
              className={classes.media}
              image={r.image_url}
              title={r.title}
            />
            <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.recipeTitle}>
              {r.title}
            </Typography>
            </CardContent>
            </CardActionArea>
          </Link>
            <CardActions className={classes.page}>
              <Button linksize="small" color="primary" className={classes.button}
                onClick={()=>{
                  fetch('http://localhost:5001/favorites', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json; charset=utf-8'},
                    body: JSON.stringify({id: r.id, title: r.title, meal_type: r.meal_type, serving_size: r.serving_size, difficulty_level: r.difficulty_level, cooking_time_in_minutes: r.cooking_time_in_minutes, ingredients: r.ingredients, instructions: r.instructions, image_url: r.image_url})
                    })
                    .then(setOpen(true))
                  }}>
                Add to Favorites
               </Button>
            </CardActions>
          </Card>)
    })}
    </div>
    </div>
  )
}