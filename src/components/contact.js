import React, {useState} from 'react';
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
    fontFamily: 'Prestage',
    fontSize: "6vw",
    color: "#a78824",
    marginTop: "3%",
    marginBottom: "0%",
    marginLeft: "10%",
    marginRight: "10%"
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
    multilineColor: {
      color: 'white'
    },

  },
})(TextField);



export default function Contact () {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  // var email = document.getElementById('email').value;
  // var subject = document.getElementById('subject').value;
  // var body = document.getElementById('body').value;
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const resEmail = 'trace@resfeberstudios.com'

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleBody = (e) => {
    setBody(e.target.value);
  };

  function handleSubmit () {

  }
  return (
    <Box bgcolor="text.primary" alignItems="center"
    justifyContent="center" height='100vh' p={4} >
    <div className={classes.row}>

    <h1 className={classes.title}>Contact Us</h1>

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
          Congrats, you clicked the button!  This actually doesn't do anything right now, but this feature is forthcoming.
        </Alert>
      </Collapse>

    <form className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="Name"
          value={name}
          onChange={handleName}
          style={{ margin: 8 }}
          placeholder="Name"
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
          id="email"

          label="Email"
          value={email}
          onChange={handleEmail}
          style={{ margin: 8 }}
          placeholder="Email"
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
          id="subject"

          label="Subject"
          value={subject}
          onChange={handleSubject}
          style={{ margin: 8 }}
          placeholder="Subject"
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
          id="body"

          label="Inquiry"
          value={body}
          onChange={handleBody}
          style={{ margin: 8 }}
          placeholder="Type your inquiry here..."
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
              linksize="small" color="primary" className={classes.button} onClick={ ()=> {
                setOpen(true)
              }
            }
              >
              Submit
          </Button>
      </div>

    </form>

    </div>
    </Box>
  )
}

