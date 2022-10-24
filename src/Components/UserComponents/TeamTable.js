import Table from "@mui/material/Table/Table";
import TableHead from "@mui/material/TableHead/TableHead";
import TableBody from "@mui/material/TableBody/TableBody";
import TableCell from "@mui/material/TableCell/TableCell";
import TableContainer from "@mui/material/TableContainer/TableContainer";
import TableRow from "@mui/material/TableRow/TableRow";
import Paper from "@mui/material/Paper/Paper";

function createData(group, status, location, balance) {
  return { group, status, location, balance };
}

const rows = [
  createData("Team A", "Active", "Kigali", 2713924),
  createData("Team B", "Inactive", "Kigali", 2743924),
  createData("Team A", "Active", "Kigali", 2713964),
];

const tableCellCSS = {
  fontWeight: 500,
  fontSize: "16px",
  color: "black",
  padding: "8px",
};

export default function TeamTable() {
  return (
    <TableContainer component={Paper} sx={{ width: "600px", mr: "51px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                color: "black",
              }}
            >
              All Groups
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                color: "black",
              }}
            >
              Status
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                color: "black",
              }}
            >
              Location
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                color: "black",
              }}
            >
              Balance
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.balance}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": {  bgcolor: "#476847" },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={tableCellCSS}
                align="center"
              >
                {row.group}
              </TableCell>
              <TableCell align="center" sx={tableCellCSS}>
                {row.status}
              </TableCell>
              <TableCell align="center" sx={tableCellCSS}>
                {row.location}
              </TableCell>
              <TableCell align="center" sx={tableCellCSS}>
                {row.balance}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
