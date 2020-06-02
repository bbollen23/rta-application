import React,{useState,useEffect} from 'react';
import PeopleIcon from '@material-ui/icons/People';

import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PercentageCircle from './percentageCircle';




const useStyles = makeStyles(theme => ({
  blueButton:{
    backgroundColor:"#1976d2",
    textTransform:'none',
    color:'white',
    fontSize:'13pt',
    borderRadius:'10px'
  }
}));



export default function Home(props){

  const classes = useStyles();

  return(
    <div id="home" className="page-container">


<div className="card grid-1">
        <div className="main-title">
          Overview by Grade
        </div>

        <div className="section">

          <div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div className="title">5th Grade</div>
              <div className="numberOfStudents">
                <PeopleIcon style={{fontSize:'20pt'}}/>
                <div className="number">24</div>
              </div>          
            </div>

            <div style={{display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
              <PercentageCircle percentage={0.72} id="1"/>
            </div>
          </div>


          <div style={{width:'50%',alignSelf:'center',display:'flex',justifyContent:'center',marginBottom:'20px'}}>
            <Button variant="contained" classes={{root:classes.blueButton}}>View Details</Button>
          </div>


        </div>

        <div className="section">
          <div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div className="title">6th Grade</div>
              <div className="numberOfStudents">
                <PeopleIcon style={{fontSize:'20pt'}}/>
                <div className="number">24</div>
              </div>          
            </div>

            <div style={{display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
              <PercentageCircle percentage={0.81} id="2"/>
            </div>
          </div>

          <div style={{width:'50%',alignSelf:'center',display:'flex',justifyContent:'center',marginBottom:'20px'}}>
            <Button variant="contained" classes={{root:classes.blueButton}} onClick={()=>{props.setView("grade")}}>View Details</Button>
          </div>
        </div>

        <div className="section">
          <div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div className="title">7th Grade</div>
              <div className="numberOfStudents">
                <PeopleIcon style={{fontSize:'20pt'}}/>
                <div className="number">18</div>
              </div>          
            </div>

            <div style={{display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
              <PercentageCircle percentage={0.65} id="3"/>
            </div>
          </div>


          <div style={{width:'50%',alignSelf:'center',display:'flex',justifyContent:'center',marginBottom:'20px'}}>
            <Button variant="contained" classes={{root:classes.blueButton}}>View Details</Button>
          </div>  


        </div>

        <div className="section">
          <div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div className="title">8th Grade</div>
              <div className="numberOfStudents">
                <PeopleIcon style={{fontSize:'20pt'}}/>
                <div className="number">12</div>
              </div>          
            </div>

            <div style={{display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
              <PercentageCircle percentage={0.5} id="4"/>
            </div>

          </div>

          <div style={{width:'50%',alignSelf:'center',display:'flex',justifyContent:'center',marginBottom:'20px'}}>
            <Button variant="contained" classes={{root:classes.blueButton}}>View Details</Button>
          </div>  


        </div>


      </div>

      
    </div>
  )
}