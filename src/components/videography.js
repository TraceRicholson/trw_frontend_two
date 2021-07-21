import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'

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

export default function CinematicWork () {
  const classes = useStyles();


  return (

    <div className={classes.row}>
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/KdkCGvTyzmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/_th1JV9TCL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/EVOiOqa-qB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

