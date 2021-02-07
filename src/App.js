import React,{useState,useEffect} from 'react';
import './css/app.css';


import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Navbar from './components/navbar';
import ChangeCampusMenu from './components/changeCampusMenu';
import Home from './components/pages/home';
import GradePage from './components/pages/gradePage';
import ScholarPage from './components/pages/scholarPage';
import IconBreadcrumbs from './components/breadCrumb';


import { useAuth0 } from "@auth0/auth0-react";
import Loading from './components/loading';


import { Switch, Route } from 'react-router-dom';


function App() {
  

  const [view, setView] = useState("login")
  const [userMetadata,setUserMetadata] = useState(null);

  const {user, isAuthenticated, isLoading, loginWithRedirect, getAccessTokenWithPopup} = useAuth0();







  if(isLoading){
    return(
      <div style={{width:"100%",height:"100vh",display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Loading/>
      </div>
    )
  }

  if(isAuthenticated){


    if(!userMetadata){
      
      //If no user meta data has been found yet, get the meta data. We want to make sure that the user is fully authenticated before actually trying to call this function. 

      const getUserMetadata = async () => {
        const domain = "tutoryard.auth0.com";
    
        try {
          const accessToken = await getAccessTokenWithPopup({
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          });
          console.log(user);
          const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
    
          const metadataResponse = await fetch(userDetailsByIdUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
    
          const { app_metadata } = await metadataResponse.json();
    
          setUserMetadata(app_metadata);
          console.log(app_metadata);
        } catch (e) {
          console.log(e.message);
        }
      };
      getUserMetadata();
    }



    return (

        //Depending on what the app_metadata is (if its a tutor, admin, teacher), we will render different pages entirely. Need to learn what are the best things to keep.
        <div id="AppContainer">
          <div className="side-bar">
            <Navbar setView={setView}/>
            <div className="image-container">
              <img  h src="/Logo-Leman-Academy-web-1.png"/>
            </div>
          </div>
          <div className="header">
            <div className="logo">
              TutorYard
            </div>
            <div className="header-menu">
              <ChangeCampusMenu/>
              {/* <div>
                <NotificationsIcon style={{color:'white',fontSize:'30pt'}}/>          
                <AccountCircleIcon style={{color:'white',fontSize:'30pt'}}/>
              </div> */}
            </div>
          </div>
          <div style={{display:'grid',gridTemplateRows:"60px auto",gridTemplateColumns:'auto'}}>
            <Switch>
              <Route path="/grade/:level/scholar/:student">
                <div style={{gridRowStart:1,display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'20px',marginTop:'20px'}}>
                  <IconBreadcrumbs setView={setView} view={view}/>
                </div>
                <div style={{gridRowStart:2}}><ScholarPage/></div>
              </Route>
              <Route path="/grade/:level">
                <div style={{gridRowStart:1,display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'20px',marginTop:'20px'}}>
                  <IconBreadcrumbs setView={setView} view={view}/>
                </div>
                <div style={{gridRowStart:2}}><GradePage /></div>
              </Route>

              <Route path="/">
                <div style={{gridRowStart:1,display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'20px',marginTop:'20px'}}>
                  <IconBreadcrumbs setView={setView} view={view}/>
                </div>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
    )
  } else {
      loginWithRedirect();
  }
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






// const viewRender = view => {
//   switch(view){
//     case "home":{
//       return(
//         <Home setView={setView}/>
//       )
//     }
//     case "grade":{
//       return(
//         <div style={{gridRowStart:2}}><GradePage setView={setView}/></div>
//       )
//     }
//     case "scholar":{
//       return(
//         <div style={{gridRowStart:2}}><ScholarPage setView={setView}/></div>
//       )
//     }
//     default:{
//       return(
//         <Home setView={setView}/>
//       )
//     }
//   }
// }