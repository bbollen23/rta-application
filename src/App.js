import React,{useState,useEffect} from 'react';
import './App.css';


import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { makeStyles} from '@material-ui/core/styles';
import Navbar from './components/navbar';
import ChangeCampusMenu from './components/changeCampusMenu';
import Home from './components/pages/home';
import GradePage from './components/pages/gradePage';
import ScholarPage from './components/pages/scholarPage';
import IconBreadcrumbs from './components/breadCrumb';

import Typography from '@material-ui/core/Typography';
import TutorsPage from './components/pages/tutorsPage';


function App() {

  const [view, setView] = useState("home")

  const viewRender = view => {
    switch(view){
      case "home":{
        return(
          <Home setView={setView}/>
        )
      }
      case "grade":{
        return(
          <div style={{gridRowStart:2}}><GradePage setView={setView}/></div>
        )
      }
      case "scholar":{
        return(
          <div style={{gridRowStart:2}}><ScholarPage setView={setView}/></div>
        )
      }
      // case "tutors":{
      //   return(
      //     <div style={{gridRowStart:2}}><TutorsPage setView={setView}/></div>
      //   )
      // }
      default:{
        return(
          <Home setView={setView}/>
        )
      }
    }
  }

  return (
    <div id="AppContainer">
      <div className="side-bar">
        <Navbar setView={setView}/>
        <div style={{alignSelf:'center',position:'relative',display:'flex',justifyContent:'center',marginBottom:'40px'}}>
          <img width={200} h src="/Logo-Leman-Academy-web-1.png"/>
        </div>
      </div>
      <div className="header">
        <div className="logo">
          TutorYard
        </div>
        <div className="header-menu">
          <ChangeCampusMenu/>
          <div>
            <NotificationsIcon style={{color:'white',fontSize:'30pt'}}/>          
            <AccountCircleIcon style={{color:'white',fontSize:'30pt'}}/>
          </div>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateRows:"60px auto",gridTemplateColumns:'auto'}}>
        <div style={{gridRowStart:1,display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'20px',marginTop:'20px'}}>
          {/* Hello miss */}
          <IconBreadcrumbs setView={setView} view={view}/>
        </div>
        {viewRender(view)}
      </div>
    </div>
  );
}

export default App;





// {/* <div className="header-card">
// <div className="title">
//   Grades
// </div>
// </div>
// {/* <RadarChart/> */}
// <div className="card">
// <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
//   <div className="title">5th Grade</div>
//   <div className="numberOfStudents">
//     <PeopleIcon style={{fontSize:'20pt'}}/>
//     <div className="number">24</div>
//   </div>          
// </div>
// <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
//   {/* <StackedBarChart id="1"/> */}
//   <PercentageCircle percentage={0.72} id="1"/>
// </div>
// </div>
// <div className="card">
// <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
//   <div className="title">6th Grade</div>
//   <div className="numberOfStudents">
//     <PeopleIcon style={{fontSize:'20pt'}}/>
//     <div className="number">24</div>
//   </div>
// </div>
// <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
//   {/* <StackedBarChart id="2"/> */}
//   <PercentageCircle percentage={0.81} id="2"/>
// </div>
// </div>
// <div className="card">
// <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
//   <div className="title">7th Grade</div>
//   <div className="numberOfStudents">
//     <PeopleIcon style={{fontSize:'20pt'}}/>
//     <div className="number">18</div>
//   </div>          
// </div>
// <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
//   {/* <StackedBarChart id="3"/> */}
//   <PercentageCircle percentage={0.65} id="3"/>
// </div>
// </div>
// <div className="card">
// <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
//   <div className="title">8th Grade</div>
//   <div className="numberOfStudents">
//     <PeopleIcon style={{fontSize:'20pt'}}/>
//     <div className="number">12</div>
//   </div>          
// </div>
// <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
//   {/* <StackedBarChart id="4"/> */}
//   <PercentageCircle percentage={0.79} id="4"/>
// </div>
// </div> */}