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

import { Link, useParams } from 'react-router-dom'






export default function GradePage(props){
  const [studentOpen, setStudentOpen] = useState(false);




  return(
    <div className="page-container" id="grade">


      <Paper className="card performance-by-concept-container">
        <div className="title-container">
          <div className="title min">Performance by Concept</div>
        </div>
        <StackedBarChart id={1}/>
      </Paper>


      <Paper className="card summary-stats">
        <div className="title-container small">
          <div className="title min">Statistics Summary</div>
        </div>

        <div className="precentage-circle-container">
          <PercentageCircle id={1} size={200} percentage={0.72}/>
        </div>
        
        <div className="stat-list-container">

          <List>
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

      <Paper className="card weakness-chart-container">
        <div className="title-container">
          <div className="title min">Frequency of Weaknesses</div>
        </div>
        <WeaknessChart id={1}/>
      </Paper>

      <Paper className="card student-table-container">
        <div className="title-container">
          <div className="title min">Students</div>
        </div>

        <StudentsTable />

      </Paper>






    </div>
  )
}
