import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import createData from "../Assets/json/user.json";
import "./table.css";
// import Cards from "../Components/cards";
const columns = [
  { id: 'Date', label: 'Date', minWidth: 20 },
  { id: 'Names', label: 'Names', minWidth: 20 },
  { id: 'Amounts', label: 'Amounts', minWidth: 20 },
  { 
id: 'Status', label: 'Status', minWidth: 20 },
{ id: 'Given', label: 'Given', minWidth: 20 },
{ id: 'Ramain', label: 'Ramain', minWidth: 20 },
{ id: 'Balance', label: 'Balance', minWidth: 20 },

];

// function createData(FirstName, LastName, Status, Type) {
//   // const density = population ;
//   return { FirstName, LastName, Status, Type };
// }



export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '70%', overflow:'hidden',left:'20%',  marginLeft:'14rem',marginTop:'10rem'}}>
      <TableContainer sx={{ maxHeight: 940}}>
        <Table stickyHeader aria-label="sticky table"sx={{fontStyle:'bold'}} >
          <TableHead >
            <TableRow >
              {columns.map((createData) => (
                <TableCell sx={{backgroundColor:'#D9D9D9',fontStyle:'bold',fontSize:'1.2rem'}}
                  key={createData.FirsName}
                  align={createData.LastName}
                  style={{ minWidth: createData.minWidth}}
                                 >
                  {createData.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {createData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
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
        rowsPerPageOptions={[2, 3, 4,5,6,7]}
        component="div"
        count={createData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
