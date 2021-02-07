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
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const columns = [
  { id: 'day', label: 'Day', minWidth: 60,align:'left'},
  { id: 'date', label: 'Date', minWidth: 80,align:'left'},
  { id: 'tutorId', label: 'Tutor', minWidth:100,align:'left'},
  { id: 'scoreUpdates', label:'Score Updates', minWidth:100,align:'left'},
  // { id: 'mastery', label: 'Above Mastery',minWidth:100,format:'boolean',align:'center'}
];

const rows = [
  {day:'Day 12', date:"05/21/20",tutorId:{id:1,name:"Brian Bollen"},scoreUpdates:[0.1,0.2,0.5]},
  {day:'Day 11', date:"05/18/20",tutorId:{id:3,name:"Steven Petritis"},scoreUpdates:[0.1,-0.1,0.5]},
  {day:'Day 10', date:"05/14/20",tutorId:{id:1,name:"Brian Bollen"},scoreUpdates:[0,0.2,0.1]},
  {day:'Day 9', date:"05/11/20",tutorId:{id:3,name:"Steven Petritis"},scoreUpdates:[0.1,0.2,0.5]},
  {day:'Day 8', date:"05/07/20",tutorId:{id:1,name:"Brian Bollen"},scoreUpdates:[0.1,0.2,0.5]},
  {day:'Day 7', date:"05/04/20",tutorId:{id:3,name:"Steven Petritis"},scoreUpdates:[0.1,0.2,0.5]},
  {day:'Day 6', date:"04/30/20",tutorId:{id:1,name:"Brian Bollen"},scoreUpdates:[0.1,0.2,0.5]},
  {day:'Day 5', date:"04/27/20",tutorId:{id:3,name:"Steven Petritis"},scoreUpdates:[0.1,0.2,0.5]},
  {day:'Day 4', date:"04/23/20",tutorId:{id:1,name:"Brian Bollen"},scoreUpdates:[0.1,0.2,0.5]},
  {day:'Day 3', date:"04/20/20",tutorId:{id:3,name:"Steven Petritis"},scoreUpdates:[0.1,0.2,0.5]},
  {day:'Day 2', date:"04/16/20",tutorId:{id:1,name:"Brian Bollen"},scoreUpdates:[0.1,0.2,0.5]},
  {day:'Day 1', date:"04/13/20",tutorId:{id:3,name:"Steven Petritis"},scoreUpdates:[0.4,0.5,0.5]}
];



export default function ReportTable(props) {
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleReportOpen = () => {
    props.setReportOpen(true)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className="reports-table-root">
      <TableContainer className="table-container">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  // classes={{root:classes.tableHeaderRoot}}
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
                <TableRow onClick={handleReportOpen} hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    var value = row[column.id];
                    if(column.id === 'tutorId'){
                      // value = <Chip avatar={<Avatar src="/self_avatar.png"/>}>Brian Bollen</Chip>
                      // value = value ? 'yes' : 'no'
                      return(
                        <TableCell className="table-cell-root" key={column.name} align={column.align}>
                          <div className="table-cell">
                            <Avatar src={"/self_avatar_" + value.id +".jpg"}/>
                            <div style={{marginLeft:'8px',fontSize:'18px',fontWeight:400}}>{value.name}</div>
                          </div>
                        </TableCell>
                      )
                    } else if (column.id === 'scoreUpdates'){
                      return(
                        <TableCell className="table-cell-root" key={column.name} align={column.align}>
                          <div className="table-cell">
                            {value.map(entry=>{
                              if(entry > 0){
                                return(<div className="score-update" style={{color:'green'}}>{"+" + entry}</div>)
                              } else if(entry < 0){
                                return(<div className="score-update" style={{color:'red'}}>{entry}</div>)
                              } else {
                                return(<div className="score-update">{entry}</div>)
                              }
                            })}
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
        rowsPerPageOptions={[3,5,10]}
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