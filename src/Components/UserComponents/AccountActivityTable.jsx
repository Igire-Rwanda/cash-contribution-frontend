import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography/Typography";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Box from "@mui/material/Box/Box";

const columns = [
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    format: (value) => new Date(value).toLocaleDateString(),
  },
  {
    id: "group",
    label: "Group",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "type",
    label: "Type",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "time",
    label: "Time",
    minWidth: 170,
    align: "right",
    format: (value) => value,
  },
];

function createData(date, group, type, amount) {
  const time = `${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
  return { date, group, type, amount, time };
}

const tableCellCSS = { padding: "8px" };

const rows = [
  createData(new Date(), "Abahahemuka", "savings", 230500),
  createData("01/01/1998", "Abahahemuka", "savings", 230600),
  createData("01/01/1998", "Abahahemuka", "savings", 230700),
  createData("01/01/1998", "Abahahemuka", "savings", 230800),
  createData("01/01/1998", "Abahahemuka", "savings", 230900),
  createData("01/01/1998", "Abahahemuka", "savings", 230000),
  createData("01/01/1998", "Abahahemuka", "savings", 230100),
  createData("01/01/1998", "Abahahemuka", "savings", 230200),
  createData(
    "Thu Oct 20 2022 16:43:31 GMT+0200 (Central Africa Time)",
    "Abahahemuka",
    "savings",
    230300
  ),
  createData("01/01/1998", "Abahahemuka", "savings", 230400),
  createData("01/01/1998", "Abahahemuka", "savings", 23000),
  createData("01/01/1998", "Abahahemuka", "savings", 231500),
  createData("01/01/1998", "Abahahemuka", "savings", 232500),
  createData("01/01/1998", "Abahahemuka", "savings", 233500),
  createData("01/01/1998", "Abahahemuka", "savings", 234500),
  createData("01/01/1998", "Abahahemuka", "savings", 235500),
];

export default function ColumnGroupingTable() {
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
    <Paper sx={{ maxWidth: "95%", mx: "auto" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow
              sx={{
                pl: "4rem",
              }}
            >
              <TableCell colSpan={5} sx={{ fontWeight: 700, ...tableCellCSS }}>
                <Typography variant="h6">Recent Activity</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" colSpan={1} sx={tableCellCSS}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h6">Select</Typography>
                  <KeyboardArrowDown />
                </Box>
              </TableCell>
              <TableCell align="center" colSpan={1} sx={tableCellCSS}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h6">2022</Typography>
                  <KeyboardArrowDown />
                </Box>
              </TableCell>
              <TableCell colSpan={3}></TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    top: 57,
                    minWidth: column.minWidth,
                    ...tableCellCSS,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.amount}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={tableCellCSS}
                        >
                          {column.format && 1 == 1
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
