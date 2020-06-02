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


const useStyles = makeStyles(theme => ({
  blueButton:{
    backgroundColor:"#1976d2",
    textTransform:'none',
    color:'white',
    fontSize:'13pt',
    borderRadius:'10px'
  }
}));


const TutorYardChip = withStyles(props=>({
  root:{
    backgroundColor:'white',
    borderColor:"#1976d2",
  },
  icon:{
    color:props => props.color || '#1976d2'
  },
  deleteIcon:{
    color:props => props.color || '#1976d2'
  },
  label:{
    fontSize:'12pt',
    fontWeight:300,
    letterSpacing:"-0.02px"
  }

}))(Chip)


// const TutorYardChip = props => {
//   // const color = props.color;
//   const classes = chipUseStyles(props);
//   return <Chip 
// }


export default function Home(props){

  const classes = useStyles();

  return(
    <div id="home" className="page-container">

      <div style={{gridColumn:"1 / span 4",margin:'20px 25px'}}>
        <div className="welcome-header">Welcome Back, Katie!</div>
        <div className="welcome-sub-header">Here's how the scholars are doing this week.</div>
      </div>

      <StatsBadge icon={2}/>
      <StatsBadge icon={3}/>
      <StatsBadge icon={4}/>
      <StatsBadge icon={1}/>

      <Paper elevation={3} style={{gridRow:"3",margin:'20px',position:'relative'}}>
        <div className="card-image" id="fifth-image">

        </div>
        <div className="grade-image-overlay">
          5th Grade
        </div>

        <div className="grade-card-content">
          {/* <PercentageCircle percentage={0.72} id="1" size={200}/>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',margin:'20px 0px',alignItems:'flex-end',flex:1}}>
            <TutorYardChip label="24 Scholars" deleteIcon={<PeopleIcon/>} onDelete={()=>{return null}} />
            <TutorYardChip label="3.7 average score" color={'green'} deleteIcon={<SchoolIcon/>} onDelete={()=>{return null}} />
            <TutorYardChip label="6 Weaknesses" color={'red'} deleteIcon={<ErrorOutlineIcon/>} onDelete={()=>{return null}} />
          </div> */}

          <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',margin:'20px 0px',alignItems:'flex-start',flex:1}}>
            <TutorYardChip label="21 Scholars" icon={<PeopleIcon/>} />
            <TutorYardChip label="4.1 average score" color={'green'} icon={<SchoolIcon/>} />
            <TutorYardChip label="5 Weaknesses" color={'red'}  icon={<ErrorOutlineIcon/>} />
          </div>
          <PercentageCircle percentage={0.72} id="1" size={200}/>


            {/* <Button variant="contained" classes={{root:classes.blueButton}}>View Details</Button> */}

          {/* <div style={{width:'50%',alignSelf:'center',display:'flex',justifyContent:'center',marginBottom:'20px'}}>
            <Fab variant="extended" style={{backgroundColor:'#1976d2',color:'white'}}>
              View Details
            </Fab>
          </div> */}

        </div>

        <div style={{display:'flex',justifyContent:'flex-end',padding:'20px 10px'}}>
          <Button color="primary" variant="outlined" onClick={()=>{props.setView("grade")}}>View Details</Button>
        </div>

      </Paper>

      <Paper elevation={3} style={{ gridRow:"3",margin:'20px',position:'relative'}}>
        <div className="card-image" id="sixth-image">

        </div>
        <div className="grade-image-overlay">
          6th Grade
        </div>

        <div className="grade-card-content">
          <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',margin:'20px 0px',alignItems:'flex-start',flex:1}}>
            <TutorYardChip label="22 Scholars" icon={<PeopleIcon/>} />
            <TutorYardChip label="3.9 average score" color={'green'} icon={<SchoolIcon/>} />
            <TutorYardChip label="8 Weaknesses" color={'red'}  icon={<ErrorOutlineIcon/>} />
          </div>
          <PercentageCircle percentage={0.81} id="2" size={200}/>

        </div>
        <div style={{display:'flex',justifyContent:'flex-end',padding:'20px 10px'}}>
          <Button color="primary" variant="outlined" onClick={()=>{props.setView("grade")}}>View Details</Button>
        </div>

      </Paper>

      <Paper elevation={3} style={{ gridRow:"3",margin:'20px',position:'relative'}}>
        <div className="card-image" id="seventh-image">

        </div>
        <div className="grade-image-overlay">
          7th Grade
        </div>

        <div className="grade-card-content">      
          <div style={{ display:'flex',flexDirection:'column',justifyContent:'space-between',margin:'20px 0px',alignItems:'flex-start',flex:1}}>
            <TutorYardChip label="24 Scholars" icon={<PeopleIcon/>} />
            <TutorYardChip label="3.7 average score" color={'green'} icon={<SchoolIcon/>} />
            <TutorYardChip label="6 Weaknesses" color={'red'}  icon={<ErrorOutlineIcon/>} />
          </div>
          <PercentageCircle percentage={0.65} id="3" size={200}/>


        </div>


        <div style={{display:'flex',justifyContent:'flex-end',padding:'20px 10px'}}>
          <Button color="primary" variant="outlined" onClick={()=>{props.setView("grade")}}>View Details</Button>
        </div>
      </Paper>

      <Paper elevation={3} style={{ gridRow:"3",margin:'20px',position:'relative'}}>
        <div className="card-image" id="eighth-image">

        </div>
        <div className="grade-image-overlay">
          8th Grade
        </div>

        <div className="grade-card-content">       
          <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',margin:'20px 0px',alignItems:'flex-start',flex:1}}>
            <TutorYardChip label="19 Scholars" icon={<PeopleIcon/>} />
            <TutorYardChip label="3.5 average score" color={'green'} icon={<SchoolIcon/>} />
            <TutorYardChip label="9 Weaknesses" color={'red'}  icon={<ErrorOutlineIcon/>} />
          </div>
          <PercentageCircle percentage={0.5} id="4" size={200}/>
        </div>

        <div style={{display:'flex',justifyContent:'flex-end',padding:'20px 10px'}}>
          <Button color="primary" variant="outlined" onClick={()=>{props.setView("grade")}}>View Details</Button>
        </div>


      </Paper>


    </div>
  )
}