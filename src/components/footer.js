import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link } from "react-router-dom"
import { Button, BottomNavigation, makeStyles} from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: '#a78824',
    elevation: '3',
    alignItems: 'center',
    position: "relative",
    top: 850,
    left: 0,
    bottom: 0

  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: "bold",
    fontSize: "1vw"

  },
  copy: {
    fontFamily: 'Prestage',
    fontSize: "1.3vw",
    color: "white",

  },
  stickToBottom: {
    fontFamily: 'Prestage',
    fontSize: "1.3vw",
    color: "white",
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#a78824',
    elevation: '3',
  },
}))
export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.stickToBottom}
    >
      <Link to="/admin" className={classes.link}>
        <Button color="inherit" className={classes.copy}>Admin</Button>
      </Link>

      <p className={classes.link}>© 2021 Resfeber Stuidos</p>

      <Button color="inherit" href='https://www.youtube.com/channel/UClc0S_x5xcPCrmNrlFGXnCQ'>
        <YouTubeIcon/>
      </Button>
      <Button color="inherit" href='https://www.instagram.com/resfeber_studios/'>
        <InstagramIcon/>
      </Button>
    </BottomNavigation>
  )
}


