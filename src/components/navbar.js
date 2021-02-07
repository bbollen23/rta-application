import React,{useState} from 'react';
import '../css/app.css';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import MessageIcon from '@material-ui/icons/Message';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PeopleIcon from '@material-ui/icons/People';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  root:{
    // width:'100%',
    // maxWidth:360,
    // backgroundColor:theme.palette.background.paper,
  },
  nested:{
    // paddingLeft:theme.spacing(4)
  },
  main:{
    fontWeight:500,
    fontSize:'14pt'
  },
  subText:{
    fontSize:'13pt'
  }
}))


export default function Navbar(props){
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  const handleOnClick = view => {
    props.setView(view)
  }

  return(
    <div>
      <List>
        <ListItem button key={1} onClick={()=>handleOnClick("home")}>
          <ListItemIcon><HomeIcon/></ListItemIcon>
          <ListItemText primary={"Home"} ></ListItemText>
        </ListItem>
        <ListItem button key={2} onClick={handleClick}>
          <ListItemIcon><SchoolTwoToneIcon/></ListItemIcon>
          <ListItemText primary={"Grades"} ></ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className="nested" onClick={()=>handleOnClick("grade")}>
              <ListItemText primary={"8th grade"} classes={{primary:classes.subText}}></ListItemText>
            </ListItem>
            <ListItem button className="nested" onClick={()=>handleOnClick("grade")}>
              <ListItemText primary={"7th grade"} classes={{primary:classes.subText}}></ListItemText>
            </ListItem>
            <ListItem button className="nested" onClick={()=>handleOnClick("grade")}>
              <ListItemText primary={"6th grade"} classes={{primary:classes.subText}}></ListItemText>
            </ListItem>
            <ListItem button className="nested" onClick={()=>handleOnClick("grade")}>
              <ListItemText primary={"5th grade"} classes={{primary:classes.subText}}></ListItemText>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button key={3}>
          <ListItemIcon><EventIcon/></ListItemIcon>
          <ListItemText primary={"Schedule"} ></ListItemText>
        </ListItem>
        <ListItem button key={4} onClick={()=>handleOnClick("tutors")}>
          <ListItemIcon><EmojiPeopleIcon/></ListItemIcon>
          <ListItemText primary={"Tutors"} ></ListItemText>
        </ListItem>
        <ListItem button key={5}>
          <ListItemIcon><PeopleIcon/></ListItemIcon>
          <ListItemText primary={"Students"} ></ListItemText>
        </ListItem>
        {/* <ListItem button key={6}>
          <ListItemIcon><MessageIcon/></ListItemIcon>
          <ListItemText primary={"Messages"} ></ListItemText>
        </ListItem> */}
        <ListItem button key={6}>
          <ListItemIcon><MenuBookTwoToneIcon/></ListItemIcon>
          <ListItemText primary={"Curriculum"} ></ListItemText>
        </ListItem>
        <ListItem button key={7}>
          <ListItemIcon><SettingsIcon/></ListItemIcon>
          <ListItemText primary={"Settings"} ></ListItemText>
        </ListItem>
        <ListItem button key={8}>
          <ListItemIcon><HelpOutlineIcon/></ListItemIcon>
          <ListItemText primary={"Help"} ></ListItemText>
        </ListItem>
      </List>
      {/* <Divider/> */}
      {/* <List>
      </List> */}
    </div>
  );
}