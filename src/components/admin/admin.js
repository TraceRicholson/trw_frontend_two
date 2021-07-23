import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { Link } from 'react-router-dom'
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

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  },

})(Typography);

const categoriesInput = [
  {
    value: 'live',
    label: 'live',
  },
  {
    value: 'nature',
    label: 'nature',
  },
  {
    value: 'urban',
    label: 'urban',
  },
];



export default function Admin () {
  const classes = useStyles();
  const [categories, setCategories] = useState(categoriesInput);
  console.log('categories', categories)

  const handleChange = (event) => {
    setCategories(event.target.value);
  };

  return (
    <Box bgcolor="text.primary" alignItems="center"
    justifyContent="center" p={4} >
    <div className={classes.row}>

    <h1 className={classes.title}>Welcome, Admin</h1>
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
          InputProps={{
            className: classes.multilineColor
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.multilineColor
          }}
        />
        <TextField
          id="standard-select-currency"
          select
          label="Category"
          value={categoriesInput}
          onChange={handleChange}
          helperText="Please select a category"
          InputProps={{
            className: classes.multilineColor
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.multilineColor
          }}
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-full-width"

          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
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
        <TextField
          id="standard-full-width"

          label="Metadata"
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
        />
        <TextField
          id="standard-full-width"

          label="Image URL"
          style={{ margin: 8 }}
          placeholder="Paste the Dropbox RAW link here..."
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
      </div>

    </form>
    </div>
    </Box>
  )
}

