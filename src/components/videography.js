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
    fontFamily: 'Prestage',
    fontSize: "6vw",
    color: "#a78824",
    marginTop: "3%",
    marginBottom: "0%",
    marginLeft: "10%",
    marginRight: "10%"
  },
  subTitle: {
    fontFamily: 'Prestage',
    fontSize: "2vw",
    color: "#a78824",
    marginTop: "3%",
    marginBottom: "0%",
    marginLeft: "10%",
    marginRight: "10%"
  },
  logo: {
    width: "100vw"
  }
});

export default function CinematicWork () {
  const classes = useStyles();


  return (

    <div className={classes.row}>

      <p className={classes.title}>The Fire Ball</p>
      <p className={classes.subTitle}>From 2015-2018, Resfeber Studios provided design services for The Fire Ball™, of which include content management, visual design, scenic features, and aftermovie creation. "The Fire Ball™ is UW-Eau Claire's drag ball extravaganza! Each year, The Fire Ball™ is headlined by drag superstars from RuPaul's Drag Race (past performers include Latrice Royale, Alyssa Edwards, Raven, Kennedy Davenport, Chad Michaels, Shangela, Katya, Bob the Drag Queen, Detox, Sharon Needles, Manila Luzon, Asia O’Hara, and Monét X Change), and they are complemented by several amazing drag queens and drag kings who are, in one word, FIERCE!"  Services provided by Resfeber Studios include:</p>
        <ul className={classes.subTitle}>
          <li>Official Aftermovie Creation</li>
          <li>LED Art Installations</li>
          <li>Visual Effects Management & Projection</li>
        </ul>
      <p className={classes.subTitle}>Below you will find the aftermovies and promos created for past events.</p>
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/KdkCGvTyzmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/_th1JV9TCL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/EVOiOqa-qB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

