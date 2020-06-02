import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FaceIcon from '@material-ui/icons/Face';
import SchoolIcon from '@material-ui/icons/School';
import GrainIcon from '@material-ui/icons/Grain';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';


const useStyles = makeStyles(theme => ({
  link: {
    display: 'flex',
    fontSize:'14pt',
    // color:'#6cbdbd'
    fontWeight:500,
    cursor:'pointer'
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 28,
    height: 28,
  },
}));


export default function IconBreadcrumbs(props) {
  const classes = useStyles();

  const handleClick = screen => {
    if(screen !== props.view){
      props.setView(screen);
    }
  }


  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small"/>} aria-label="breadcrumb">
      {/* {props.view === "home" || props.view === "grade" || props.view === "scholar" ?
      <Link color="inherit" onClick={()=>handleClick("home")} className={classes.link}>
        <HomeIcon className={classes.icon} />
        Home
      </Link> : 
      <Link color="inherit" onClick={()=>handleClick("tutors")} className={classes.link}>
        <EmojiPeopleIcon className={classes.icon} />
        Tutors
      </Link>} */}
      <Link color="inherit" onClick={()=>handleClick("home")} className={classes.link}>
        <HomeIcon className={classes.icon} />
        Home
      </Link>
      {props.view === "grade" || props.view === "scholar" ?
      <Link color="inherit" onClick={()=>handleClick("grade")} className={classes.link}>
        <SchoolIcon className={classes.icon} />
        6th Grade
      </Link>:null}
      {props.view === "scholar" ?
      <Link color="inherit" onClick={()=>handleClick("scholar")} className={classes.link}>
        <FaceIcon className={classes.icon} />
        Jane Doe
      </Link> : null}

      {/* <Typography color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Breadcrumb
      </Typography> */}
    </Breadcrumbs>
  );
}