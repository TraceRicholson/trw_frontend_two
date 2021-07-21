import React from 'react'
import { Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: '#a78824'
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: "bold"
  }
}))


function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.bar} position="static">
      <Toolbar>
        <Link to="/home" className={classes.link}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/photography" className={classes.link}>
          <Button color="inherit">Photography</Button>
        </Link>
        <Link to="/videography" className={classes.link}>
          <Button color="inherit">Videography</Button>
        </Link>
        <Link to="/festivals" className={classes.link}>
          <Button color="inherit">Festival Work</Button>
          </Link>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar;