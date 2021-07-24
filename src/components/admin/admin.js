import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { Link, Redirect } from 'react-router-dom'
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { config } from '../../assets/constants';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  root: {
    color: "#FFFFFF"

  },
  margin: {
    margin: theme.spacing(1),
    color: 'white'
  },
  row: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontFamily: "'Prestage', 'cursive'",
    fontSize: "6vw",
    color: "red",
    marginTop: "3%",
    marginBottom: "0%",

  },
  subTitle: {
    fontFamily: "'Prestage', 'cursive'",
    fontSize: "6vw",
    color: "red",
    marginTop: "10%",
    marginBottom: "0%",

  },
  logo: {
    width: "100vw",
    height:"100vh"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
    color: "#FFFFFF",
  },
  multilineColor: {
    color: 'white'
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: "bold"
  },

}));

export default function Admin () {
  const classes = useStyles();
  const [newPhoto, addNewPhoto] = useState ([])
  const photosUrl = config.url.API_URL
  console.log('environment', config.url.API_URL)

  const [title, setTitle] = useState('')
  const [categories, setCategories] = useState([]);
  console.log('categories', categories)
  const [description, setDescription] = useState('')
  const [metadata, setMetadata] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [open, setOpen] = useState(false)




  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log('title', title)
  };

  const handleCategoryChange = (e) => {
    setCategories(e.target.value);
    console.log('category', categories)
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    console.log('description', description)
  };

  const handleMetadataChange = (e) => {
    setMetadata(e.target.value);
    console.log('metadata', metadata)
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    console.log('imageUrl', imageUrl)
  };


  const handleSubmit = (e) => {
    addNewPhoto({
      title: title,
      category: categories,
      description: description,
      metadata: metadata,
      image_url: imageUrl
    })
    console.log("New photo added: ", newPhoto)
  }

  useEffect(() => {
    function addPhoto() {
      fetch(photosUrl, {
        method: 'POST',
        body: JSON.stringify(newPhoto),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
    addPhoto();
  }, [newPhoto]);

  function handleLogin () {
    setLoggedIn(true)
    if (loggedIn===true) {
    document.getElementById('admin-block').hidden = true
    document.getElementById('admin-page').hidden = false
    }
  }


  return (
    <div >
      <Box bgcolor="text.primary" id='admin-block' alignItems="center"
    justifyContent="center" p={4} height='100vh' hidden={false}>
        <div className={classes.row} >
          <p className={classes.subTitle}>You must be logged in to access the admin page.</p>
          <Button color="primary" onClick={handleLogin}>Enter</Button>
        </div>
      </Box>

    <Box bgcolor="text.primary" id='admin-page' alignItems="center"
    justifyContent="center" p={4} height='100vh' hidden={true}>
    <div className={classes.row} >


    <h1 className={classes.title} >Welcome, Admin</h1>


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
          The photo has been added to the database.
        </Alert>
      </Collapse>


      <Link to="/admin/all_photos" className={classes.link}>
        <Button color="inherit">Manage Database Photos</Button>
      </Link>

    <form className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="Title"
          style={{ margin: 8 }}
          placeholder="Title"
          helperText=""
          fullWidth
          margin="normal"
          value={title}
          onChange={handleTitleChange}
          InputProps={{
            className: classes.multilineColor
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.multilineColor
          }}
        />
        <TextField
          id="standard-full-width"

          label="Category"
          value={categories}
          onChange={handleCategoryChange}
          style={{ margin: 8 }}
          placeholder="nature, urban, or live"
          helperText=""
          fullWidth
          margin="normal"
          InputProps={{
            className: classes.multilineColor
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.multilineColor
          }}
        />
        <TextField
          id="standard-full-width"

          label="Description"
          value={description}
          onChange={handleDescriptionChange}
          style={{ margin: 8 }}
          placeholder="Description"
          helperText=""
          fullWidth
          margin="normal"
          InputProps={{
            className: classes.multilineColor
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.multilineColor
          }}
        />
        {/* <TextField
          id="standard-full-width"

          label="Metadata"
          value={metadata}
          onChange={handleMetadataChange}
          style={{ margin: 8 }}
          placeholder="Metadata"
          helperText=""
          fullWidth
          margin="normal"
          InputProps={{
            className: classes.multilineColor
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.multilineColor
          }}
        /> */}
        <TextField
          id="standard-full-width"

          label="Image URL"
          value={imageUrl}
          onChange={handleImageUrlChange}
          style={{ margin: 8 }}
          placeholder="Paste the Dropbox RAW link (or random url) here..."
          helperText=""
          fullWidth
          margin="normal"
          InputProps={{
            className: classes.multilineColor
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.multilineColor
          }}
        />
          <Button
              linksize="small" color="primary" className={classes.button}
              onClick={ () => {
                handleSubmit()
                setOpen(true)
              }}>
              Submit
          </Button>
      </div>

    </form>

    </div>
    </Box>
    </div>
  )

}

