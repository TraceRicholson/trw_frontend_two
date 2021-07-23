import { AppBar } from "@material-ui/core"
import { Container } from "@material-ui/core"
import { Toolbar } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: '#a78824',
    elevation: '3',
    alignItems: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: "bold",

  },
  copy: {
    fontFamily: 'Prestage',
    fontSize: "1.3vw",
    color: "white",

  }
}))
export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar className={classes.bar} position="static">
      <Toolbar className={classes.copy}>
          <Link to="/admin" className={classes.link}>
            <Button color="inherit">Admin</Button>
          </Link>
        © 2021 Resfeber Stuidos

          <Button color="inherit" href='https://www.youtube.com/channel/UClc0S_x5xcPCrmNrlFGXnCQ'>
            <YouTubeIcon/>
          </Button>
          <Button color="inherit" href='https://www.instagram.com/resfeber_studios/'>
            <InstagramIcon/>
          </Button>

      </Toolbar>
    </AppBar>
  )
}