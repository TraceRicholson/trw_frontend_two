import React from 'react'
import { Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ResLogo from '../assets/resfeberlogo2.png'
import shadows from '@material-ui/core/styles/shadows';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: '#a78824',
    elevation: '3'
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: "bold"
  },
}))


function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.bar} position="fixed">
      <Toolbar>
        <Link to="/home" className={classes.link}>
          <Button color="inherit">
            <img src = {ResLogo} alt = 'resfeber logo' width='50'/>
          </Button>
        </Link>

        <Link to="/photography" className={classes.link}>
          <Button color="inherit">Photography</Button>
        </Link>

        <Link to="/cinematic_work" className={classes.link}>
          <Button color="inherit">Cineamtic Work  </Button>
        </Link>

        <Link to="/festivals" className={classes.link}>
          <Button color="inherit">Festival Work</Button>
        </Link>

        <Link to="/contact" className={classes.link}>
          <Button color="inherit">Contact Us</Button>
        </Link>
        
      </Toolbar>
    </AppBar>
  )
}
export default Navbar;