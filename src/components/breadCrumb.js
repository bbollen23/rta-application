import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FaceIcon from '@material-ui/icons/Face';
import SchoolIcon from '@material-ui/icons/School';
import GrainIcon from '@material-ui/icons/Grain';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

import { Link, useParams } from 'react-router-dom'




export default function IconBreadcrumbs(props) {


  const handleClick = screen => {
    if(screen !== props.view){
      props.setView(screen);
    }
  }

  const { level, student } = useParams();


  return (
    <Breadcrumbs className="breadcrumb" separator={<NavigateNextIcon fontSize="small"/>} aria-label="breadcrumb">

      <Link color="inherit" to="/">
        <HomeIcon />
        Home
      </Link>
      {level  ?
      <Link color="inherit" to={`/grade/${level}`}>
        <SchoolIcon  />
        6th Grade
      </Link>:null}
      {student ?
      
      <Link color="inherit" to={`/grade/${level}/scholar/${student}`}>
        <FaceIcon/>
        Jane Doe
      </Link> : null}

    </Breadcrumbs>
  );
}