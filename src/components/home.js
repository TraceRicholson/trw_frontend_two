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
    color: "#a78824",
    marginTop: "3%",
    marginBottom: "0%",
  },
  logo: {
    width: "100vw",
    height:"100vh"
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

    <h1 className={classes.title}>Resfeber Studios</h1>

    </div>
  )
}

