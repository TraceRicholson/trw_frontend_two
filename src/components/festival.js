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
    fontSize: "2vw",
    color: "#FFFFFF ",
    marginTop: "3%",
    marginBottom: "0%",
    marginLeft: "10%",
    marginRight: "10%"
  },
  logo: {
    width: "100vw"
  }
});

export default function Festival () {
  const classes = useStyles();


  return (

    <div className={classes.row}>
      <p className={classes.title}>From 2016 - 2019, Trace servered as the Assitant Creative Director for the Eaux Claires Music and Arts Festival, helping to currate and manage the "Arts" side of the festival.  Below, you will find a selection of photos and videos from the festival showcasing this partnership.</p>
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/QkjUK8ngv4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}