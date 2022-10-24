import * as React from "react";
import Paper from "@mui/material/Paper/Paper";
import Table from "@mui/material/Table/Table";
import TableBody from "@mui/material/TableBody/TableBody";
import TableCell from "@mui/material/TableCell/TableCell";
import TableContainer from "@mui/material/TableContainer/TableContainer";
import TableHead from "@mui/material/TableHead/TableHead";
import TablePagination from "@mui/material/TablePagination/TablePagination";
import TableRow from "@mui/material/TableRow/TableRow";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";
import TextField from "@mui/material/TextField/TextField";
import FormControl from "@mui/material/FormControl/FormControl";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";

const columns = [
  {
    id: "date",
    label: "Date",

    format: (value) => new Date(value).toLocaleDateString(),
  },
  {
    id: "names",
    label: "Names",

    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "amount",
    label: "Amount",

    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",

    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "given",
    label: "Given",

    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "remain",
    label: "Remain",

    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "balance",
    label: "Balance",

    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(date, names, amount, status, given, remain, balance) {
  return { date, names, amount, status, given, remain, balance };
}

const tableCellCSS = { padding: "8px" };

const rows = [
  createData(
    "08/01/2018 13:40",
    "justin smith",
    3000,
    "active",
    1000,
    2000,
    6000
  ),
  createData(
    "08/01/2018 13:40",
    "justin smith",
    3000,
    "active",
    1000,
    2000,
    6000
  ),
  createData(
    "08/01/2018 13:40",
    "justin smith",
    3000,
    "active",
    1000,
    2000,
    6000
  ),
  createData(
    "08/01/2018 13:40",
    "justin smith",
    3000,
    "active",
    1000,
    2000,
    6000
  ),
  createData(
    "08/01/2018 13:40",
    "justin smith",
    3000,
    "active",
    1000,
    2000,
    6000
  ),
  createData(
    "08/01/2018 13:40",
    "justin smith",
    3000,
    "active",
    1000,
    2000,
    6000
  ),
  createData(
    "08/01/2018 13:40",
    "justin smith",
    3000,
    "active",
    1000,
    2000,
    6000
  ),
];

export default function TransactionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [choosen, setChoosen] = React.useState(30);
  const handleChange = (event) => {
    setChoosen(event.target.value);
  };

  return (
    <Paper sx={{ maxWidth: "95%", mx: "auto" }}>
      <TableContainer sx={{ maxHeight: 270 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow
              sx={{
                pl: "4rem",
              }}
            >
              <TableCell colSpan={7} sx={{ fontWeight: 700, ...tableCellCSS }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h6">All Transactions Done</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="All Transactions"
                      variant="outlined"
                      size="small"
                      inputProps={{ style: { height: "30px" } }}
                      sx={{
                        width: "150px",
                        "& .MuiInputBase-root": {
                          height: "30px",
                          borderRadius: "15px",
                        },
                        "& .MuiFormLabel-root": {
                          height: "30px",
                          color: "rgba(0, 0, 0, 0.25)",
                          top: "-5px",
                        },
                        height: "30px",
                        borderRadius: "15px",
                        color: "rgba(0, 0, 0, 0.25)",
                        mr: "8px",
                      }}
                    />
                    <FormControl>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={choosen}
                        label="Age"
                        onChange={handleChange}
                        sx={{
                          width: "150px",
                          height: "30px",
                          borderRadius: "15px",
                          color: "rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        <MenuItem value={7}>Seven Days</MenuItem>
                        <MenuItem value={15}>Fifteen Days </MenuItem>
                        <MenuItem value={30}>Thirty Days</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    // top: 57,
                    minWidth: column.minWidth,
                    padding: "0 8px 8px 8px",
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
