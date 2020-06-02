import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';

import StackedBarChart from '../stackedBarChart';
import PercentageCircle from '../percentageCircle';
import { makeStyles, withStyles} from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import Paper from '@material-ui/core/Paper';
import WeaknessChart from '../weaknessChart';
import StudentsTable from '../studentsTable';
import StudentInfo from '../studentInfo';

import MyTooltip from '../myTooltip';


const useStyles = makeStyles(theme => ({
  listRow:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  list:{
    display:'flex',
    flexDirection:'column',
    flex:1,
    justifyContent:'space-between'
  }
}));




export default function GradePage(props){
  const [studentOpen, setStudentOpen] = useState(false);

  const classes = useStyles();

  return(
    <div className="page-container" id="grade">
      <Paper className="card" style={{gridRowStart:2,gridColumnStart:2,gridColumnEnd:-3,display:'flex',flexDirection:'column',alignItems:'flex-start',padding:0}}>
        <div className="title-container">
          <div className="title min">Performance by Concept</div>
        </div>
        <StackedBarChart id={1}/>
      </Paper>
      <Paper className="card summary-stats" style={{gridRowStart:2,gridColumnStart:-2,display:'grid',gridTemplateRows:'70px 280px auto',padding:0}}>
        <div className="title-container small">
          <div className="title min">Statistics Summary</div>
        </div>
        <div style={{alignSelf:'center',justifySelf:'center'}}>
          <PercentageCircle id={1} size={225} percentage={0.72}/>
        </div>
        <div style={{padding:"0px 8px",marginTop:"10px",display:'flex',marginBottom:'20px'}}>

          <List classes={{root:classes.list}}>
            <ListItem button key={1}>
              <ListItemIcon><PeopleIcon/></ListItemIcon>
              <div className="list-label-container" >
                <div>Number</div>
                <div>24</div>
              </div>
            </ListItem>
            <ListItem button key={2}>
              <ListItemIcon><SchoolIcon/></ListItemIcon>
              <div className="list-label-container" >
                <div>Best Concept</div>

                <MyTooltip title={
                  <React.Fragment>
                    {"Average Score:"}<span style={{color:"green",marginLeft:'5px'}}>{"4.1"}</span>
                  </React.Fragment>
                }>
                  <div>Properties of Operations</div>
                </MyTooltip>

              </div>
            </ListItem>
            <ListItem button key={3}>
              <ListItemIcon><PeopleIcon/></ListItemIcon>
              <div className="list-label-container" >
                <div>Worst Concept</div>

                <MyTooltip title={
                  <React.Fragment>
                    {"Average Score:"}<span style={{color:"green",marginLeft:'5px'}}>{"2.9"}</span>
                  </React.Fragment>
                } interactive>
                  <div>Equal Parts WP</div>
                </MyTooltip>
              </div>
            </ListItem>
          </List>
        </div>
      </Paper>
      <Paper className="card" style={{display:'flex',flexDirection:'column',gridRowStart:4,gridColumnStart:6,gridColumnEnd:-1,padding:0}}>
        <div className="title-container">
          <div className="title min">Students</div>
        </div>
        <StudentsTable setView={props.setView} />
      </Paper>
      <Paper className="card" style={{gridRowStart:4,gridColumnStart:2,gridColumnEnd:5,padding:0}}>
        <div className="title-container">
          <div className="title min">Frequency of Weaknesses</div>
        </div>
        <WeaknessChart id={1}/>
      </Paper>
    </div>
  )
}
