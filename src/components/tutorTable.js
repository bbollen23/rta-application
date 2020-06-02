import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar'

const columns = [
  { id: 'tutor', label: 'Name',align:'left'},
  { id: 'lastAttendance',label:'Last Attendance',align:'center'},
  { id: 'score', label: 'Average Score', minWidth: 100,align:'center'},
  { id: 'mastery', label: 'Above Mastery',minWidth:100,format:'boolean',align:'center'}
];

const rows = [
  {tutor:{name:'Brian Bollen', id:1},lastAttendance:"02/27/20", score:4.2, mastery:true},
  {tutor:{name:'Kristin Morrill', id:4},lastAttendance:"02/27/20", score:4.2, mastery:true},
  {tutor:{name:'Steven Petritis', id:2},lastAttendance:"02/27/20", score:4.2, mastery:true},
  {tutor:{name:'Ben Savoie', id:3},lastAttendance:"02/27/20", score:4.2, mastery:true},
  // {name:'Jane Doe', tutors:[1,3],lastAttendance:"02/27/20", score:4.2, mastery:true},
  // {name:'Jane Doe', tutors:[1,3],lastAttendance:"02/27/20", score:4.2, mastery:true},
  // {name:'Jane Doe', tutors:[1,3],lastAttendance:"02/27/20", score:4.2, mastery:true},
  // {name:'Jane Doe', tutors:[1,3],lastAttendance:"02/27/20", score:4.2, mastery:true},
];

const useStyles = makeStyles(theme=>({
  root: {
    width: '100%',
    flex:1,
    // display:'flex',
    flexDirection:'column'
  },
  container: {
    flex:'1 1 0',
  },
  tableCellRoot:{
    padding: "12px 32px",
    fontSize: "16px",
    // text-align: left;
    // font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    // font-weight: 400;
    lineHeight: "21px",
    borderBottom: "1px solid #eeeeee",
    letterSpacing: "-0.05px",
    // vertical-align: inherit;
  },
  tableHeaderRoot:{
    fontSize:'1.5em',
    color: "#263238",
    padding: "12px 32px",
    letterSpacing: "-0.05px",
    lineHeight: "21px",
    zIndex:3
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

export default function TutorTable(props) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleStudentOpen = () => {
    props.setView("scholar");
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root} id="myID">
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  classes={{root:classes.tableHeaderRoot}}

                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow onClick={handleStudentOpen} hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    var value = row[column.id];
                    if(column.format === 'boolean'){
                      value = value ? <span style={{color:'green'}}>Yes</span> : <span style={{color:'red'}}>No</span>
                      // value = value ? 'yes' : 'no'
                    } else if(column.id==="tutor"){
                      return(
                        <TableCell>
                          <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                            <Avatar className={classes.large} src={"/self_avatar_" + value.id +".jpg"}/>
                            <div style={{marginLeft:'20px',fontSize:'20px',fontWeight:400}}>{value.name}</div>
                          </div>
                        </TableCell>
                      )
                    }
                    return (
                      <TableCell classes={{root:classes.tableCellRoot}} key={column.name} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}