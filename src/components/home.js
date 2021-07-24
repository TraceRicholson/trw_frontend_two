import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'

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

      <Box bgcolor="text.secondary" alignItems="center"
      justifyContent="center" height='100vh' p={4} >
    <div className={classes.row}>
      <h1 className={classes.title}>Resfeber Studios</h1>
      <p className={classes.subTitle}>RESFEBER: (pronounced: RACE-fay-ber); Swedish; noun. 1. The restless race of the traveler's heart before the journey begins.</p>

      <p className={classes.subTitle}>Resfeber Studios is currently based out of Eglin Air Force Base, Florida.  I started Resfeber Studios with a goal to bring the world of projection mapping to a city with a rapidly growing music and arts scene.  In the past five years, Resfeber Studios has grown into a multi-faceted business, specializing in not only projection mapping, but also event management, cinematography, and photography.</p>

      <p className={classes.subTitle}>I pride myself in presenting Resfeber Studios as a business that operates without discrimination.  Diversity is paramount, and it's what makes this world beautiful. By discriminating against a certain race, religion, gender, sexual orientation, etc. we fail to make this world a better place.</p>

      <p className={classes.subTitle}>- Trace Richolson, Owner & Founder</p>


    </div>
      </Box>
  )
}

