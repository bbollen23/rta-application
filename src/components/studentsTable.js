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


import { useHistory, useParams } from 'react-router-dom';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  {id: 'tutors', label: 'Tutors',align:'center'},
  { id: 'lastAttendance',label:'Last Attendance',align:'center'},
  { id: 'score', label: 'Average Score', minWidth: 100,align:'center'},
  { id: 'mastery', label: 'Above Mastery',minWidth:100,format:'boolean',align:'center'}
];

const rows = [
  {name:'Jane Doe', tutors:[1,3],lastAttendance:"02/27/20", score:4.2, mastery:true},
  {name:'Pamella Keys', tutors:[2,3],lastAttendance:"02/18/20", score:4.0, mastery:true},
  {name:'Chad Cronk', tutors:[1,2],lastAttendance:"02/27/20", score:4.5, mastery:true},
  {name:'Tito Varela', tutors:[1,3],lastAttendance:"02/25/20", score:3.9, mastery:false},
  {name:'Tarsilia Esquibel', tutors:[2,3],lastAttendance:"02/21/20", score:3.5, mastery:false},
  {name:'Zuha Safar', tutors:[2,3],lastAttendance:"02/27/20", score:2.9, mastery:false},
  {name:'Alberto Costa', tutors:[2,3],lastAttendance:"02/27/20", score:3.8, mastery:false},
  {name:'Brandon Griffin', tutors:[1,2],lastAttendance:"02/27/20", score:4.2, mastery:true},
  // {name:'Jane Doe', tutors:[1,3],lastAttendance:"02/27/20", score:4.2, mastery:true},
  // {name:'Jane Doe', tutors:[1,3],lastAttendance:"02/27/20", score:4.2, mastery:true},
  // {name:'Jane Doe', tutors:[1,3],lastAttendance:"02/27/20", score:4.2, mastery:true},
  // {name:'Jane Doe', tutors:[1,3],lastAttendance:"02/27/20", score:4.2, mastery:true},
];



export default function StudentsTable(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const history = useHistory();

  const { level } = useParams();

  const handleStudentOpen = () => {
    // props.setView("scholar");
    history.push(`/grade/${level}/scholar/bob`);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className="table-container-root">
      <TableContainer className="table-container">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className="table-header-root"

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
                    } else if(column.id==="tutors"){
                      return(
                        <TableCell className="table-cell-root"> 
                          <div style={{display:'flex',justifyContent:'center'}}>
                            <AvatarGroup>

                              <Avatar src={"/self_avatar_" + value[0] +".jpg"} />
                              <Avatar src={"/self_avatar_" + value[1] +".jpg"} />
                            </AvatarGroup>
                          </div>
                        </TableCell>
                      )
                    }
                    return (
                      <TableCell className="table-cell-root" key={column.name} align={column.align}>
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