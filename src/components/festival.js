import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { sizing, positions } from '@material-ui/system';
import './festival.css'

const useStyles = makeStyles({
  row: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  title: {
    fontFamily: 'Prestage',
    fontSize: "6vw",
    color: "#a78824",
    marginTop: "3%",
    marginBottom: "0%",
    marginLeft: "10%",
    marginRight: "10%",
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
  subTitleList: {
    fontFamily: 'Prestage',
    fontSize: "2vw",
    color: "#a78824",
    marginTop: "3%",
    marginBottom: "0%",
    // marginLeft: "10%",
    // marginRight: "60%",
    // flexBasis: "25%",

  },
  logo: {
    width: "100vw"
  }
});

export default function Festival () {
  const classes = useStyles();


  return (
    <Box bgcolor="text.secondary" p={5} >
    <div className={classes.row}>
    <p className={classes.title}>Eaux Claires</p>

      <p className={classes.subTitle}>From 2016 - 2019, Trace servered as the Assitant Creative Director for the Eaux Claires Music and Arts Festival, helping to currate and manage the "Arts" side of the festival.  Below, you will find a selection of videos from the festival showcasing this partnership.  </p>
{/*
      <ul className={classes.subTitleList}>
        <li>Serra Victoria Bothwell Fels</li>
        <li>The Pickup Music Project</li>
        <li>Intermedio</li>
        <li>Concrete Pig</li>
        <li>Erlend Neumann</li>
        <li>Antic Studios</li>
        <li>Andy DuCett</li>
        <li>Krista Stout, Sol McCormick, and Joseph Stout</li>
        <li>Kristina Rolander</li>
        <li>Davy Sumner</li>
        <li>VNESSWOLFCHILD</li>
        <li>John Mark Creative</li>
        <li>Kelie Bownman</li>
        <li>Burlesque Public Works Division</li>
        <li>Landon sheely</li>
        <li>Justin Orvis Steimer</li>
        <li>Casey O'Connell</li>
        <li>Chuck-U</li>
        <li>Eleanor Perry Smith</li>
        <li>Michael Perry</li>
        <li>Holli Jacobson</li>
        </ul> */}





      <iframe width="1280" height="720" src="https://www.youtube.com/embed/LA8Ke48z9Mw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/QkjUK8ngv4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </Box>
  )
}