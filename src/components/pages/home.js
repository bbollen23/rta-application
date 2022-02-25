import React,{useState,useEffect} from 'react';

import { makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PercentageCircle from '../percentageCircle';
import StatsBadge from '../statsBadge';

import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography'

import {
  Link
} from "react-router-dom";



export default function Home(props){


  return(
      <div id="home" className="page-container">

        <div className="welcome-header-container">
          <div className="welcome-header">Welcome Back!</div>
          <div className="welcome-sub-header">Here's how the scholars are doing this week.</div>
        </div>

        <StatsBadge icon={2}/>
        <StatsBadge icon={3}/>
        <StatsBadge icon={4}/>
        <StatsBadge icon={1}/>

        <Paper className="grade-card" elevation={3}>
          <div className="card-image" id="fifth-image">

          </div>
          <div className="grade-image-overlay">
            5th Grade
          </div>

          <div className="grade-card-content">


            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',margin:'20px 0px',alignItems:'flex-start',flex:1}}>
              <Chip className="grade-card-chip" label="21 Scholars" icon={<PeopleIcon/>} />
              <Chip className="grade-card-chip green" label="4.1 average score" color={'green'} icon={<SchoolIcon/>} />
              <Chip className="grade-card-chip red" label="5 Weaknesses" color={'red'}  icon={<ErrorOutlineIcon/>} />
            </div>
            <PercentageCircle percentage={0.72} id="1" size={200}/>

          </div>

          <div style={{display:'flex',justifyContent:'flex-end',padding:'20px 10px'}}>
            <Link to="/grade/5"><Button color="primary" variant="outlined">View Details</Button></Link>

          </div>

        </Paper>

        <Paper className="grade-card" elevation={3}>
          <div className="card-image" id="sixth-image">

          </div>
          <div className="grade-image-overlay">
            6th Grade
          </div>

          <div className="grade-card-content">
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',margin:'20px 0px',alignItems:'flex-start',flex:1}}>
              <Chip className="grade-card-chip" label="22 Scholars" icon={<PeopleIcon/>} />
              <Chip className="grade-card-chip green" label="3.9 average score" color={'green'} icon={<SchoolIcon/>} />
              <Chip className="grade-card-chip red" label="8 Weaknesses" color={'red'}  icon={<ErrorOutlineIcon/>} />
            </div>
            <PercentageCircle percentage={0.81} id="2" size={200}/>

          </div>
          <div style={{display:'flex',justifyContent:'flex-end',padding:'20px 10px'}}>
            <Button color="primary" variant="outlined"><Link to="/grade/6">View Details</Link></Button>

          </div>

        </Paper>

        <Paper className="grade-card" elevation={3} >
          <div className="card-image" id="seventh-image">

          </div>
          <div className="grade-image-overlay">
            7th Grade
          </div>

          <div className="grade-card-content">      
            <div style={{ display:'flex',flexDirection:'column',justifyContent:'space-between',margin:'20px 0px',alignItems:'flex-start',flex:1}}>
              <Chip className="grade-card-chip" label="24 Scholars" icon={<PeopleIcon/>} />
              <Chip className="grade-card-chip green" label="3.7 average score" color={'green'} icon={<SchoolIcon/>} />
              <Chip className="grade-card-chip red" label="6 Weaknesses" color={'red'}  icon={<ErrorOutlineIcon/>} />
            </div>
            <PercentageCircle percentage={0.65} id="3" size={200}/>


          </div>


          <div style={{display:'flex',justifyContent:'flex-end',padding:'20px 10px'}}>
            <Button color="primary" variant="outlined"><Link to="/grade/7">View Details</Link></Button>
          </div>
        </Paper>

        <Paper className="grade-card" elevation={3}>
          <div className="card-image" id="eighth-image">

          </div>
          <div className="grade-image-overlay">
            8th Grade
          </div>

          <div className="grade-card-content">       
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',margin:'20px 0px',alignItems:'flex-start',flex:1}}>
              <Chip className="grade-card-chip" label="19 Scholars" icon={<PeopleIcon/>} />
              <Chip className="grade-card-chip green" label="3.5 average score" color={'green'} icon={<SchoolIcon/>} />
              <Chip className="grade-card-chip red" label="9 Weaknesses" color={'red'}  icon={<ErrorOutlineIcon/>} />
            </div>
            <PercentageCircle percentage={0.5} id="4" size={200}/>
          </div>

          <div style={{display:'flex',justifyContent:'flex-end',padding:'20px 10px'}}>
            <Button color="primary" variant="outlined"><Link to="/grade/8">View Details</Link></Button>
          </div>

        </Paper>


      </div>
  )
}