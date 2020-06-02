import React, { useState, useEffect } from 'react';

import TutorTable from '../tutorTable';

import Paper from '@material-ui/core/Paper';



const TutorsPage = props => {
  return(
    <div id="tutors" class="page-container">
      <div style={{margin:'0px 25px',alignItems:'flex-end',display:'flex'}}>
        <div className="welcome-header">Tutors</div>
        {/* <div className="welcome-sub-header">All Tutors</div> */}
      </div>
      <Paper style={{display:'flex',flex:1,margin:"20px"}}>
        <TutorTable/>
      </Paper>
    </div>
  )
}

export default TutorsPage;