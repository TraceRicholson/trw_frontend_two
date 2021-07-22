import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',

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
    color: "#a78824",
    marginTop: "3%",
    marginBottom: "0%",
    
  },
  logo: {
    width: "100vw",
    height:"100vh"
  },
  // textField: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  //   width: '100ch',
  // }

}));


const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
      color: 'white'
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
      color: 'white'
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
      color: 'white'
    },
  },
})(TextField);

export default function Contact () {
  const classes = useStyles();

  return (

    <div className={classes.row}>

    <h1 className={classes.title}>Contact Page</h1>

    <form className={classes.root} noValidate autoComplete="off">
      <ValidationTextField
          className={classes.margin}
          label="Name"
          required
          variant="outlined"
          // defaultValue="Name"
          id="validation-outlined-input"

      /><br></br>
      <ValidationTextField
          className={classes.margin}
          label="Email"
          required
          variant="outlined"
          // defaultValue="Email"
          id="validation-outlined-input"
      /><br></br>
      <ValidationTextField
          className={classes.margin}
          label="Subject"
          required
          variant="outlined"
          // defaultValue="Subject"
          id="validation-outlined-input"
      /><br></br>
      <TextField
            id="outlined-multiline-static"
            className={classes.textfield}
            label="Multiline"
            multiline
            rows={6}
            defaultValue="Default Value"
            variant="outlined"
            width={50}
            fullWidth
      /><br></br>
      <Button variant="contained" color="primary">
        Submit
      </Button>

    </form>

    </div>
  )
}

