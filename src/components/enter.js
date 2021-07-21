import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  row: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "'Bebas Neue', 'cursive'",
    fontSize: "10vw",
    color: "#373940",
    marginTop: "3%",
    marginBottom: "0%",
  },
  logo: {
    width: "100vw"
  }
});

export default function Enter () {
  const classes = useStyles();

  // let hasPlayed = false;
  // function handleFirstPlay(e) {
  //   if(hasPlayed === false) {
  //     hasPlayed = true;

  //     let vid = event.target;

  //     vid.onplay = null;
  //   }
  // }
  return (

    <div className={classes.row}>

    {/* <h1 className={classes.title}>Resfeber Studios</h1> */}
    <Link to="/home">
      <video className={classes.logo} autoPlay>
        <source src='https://www.dropbox.com/s/pfai4s84lwgs0pp/resfeberintro.mp4?raw=1' type='video/mp4' allow='autoplay'></source>
      </video>
    </Link>
    </div>
  )
}

