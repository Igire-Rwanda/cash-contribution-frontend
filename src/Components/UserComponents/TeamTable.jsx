import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(group, status, location, balance) {
  return { group, status, location, balance };
}

const rows = [
  createData("Team A", "Active", "Kigali", 2713924),
  createData("Team B", "Active", "Kigali", 2743924),
  createData("Team A", "Active", "Kigali", 2713964),
];

export default function TeamTable() {
  return (
    <TableContainer component={Paper} sx={{ width: "740px", mr: "51px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: "rgba(0, 0, 0, 0.25)",
              }}
            >
              All Groups
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: "rgba(0, 0, 0, 0.25)",
              }}
            >
              Status
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: "rgba(0, 0, 0, 0.25)",
              }}
            >
              Location
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: "rgba(0, 0, 0, 0.25)",
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
                "&:hover": { background: "rgba(217, 217, 217, 0.62)" },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "rgba(0, 0, 0, 0.25)",
                }}
                align="center"
              >
                {row.group}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "rgba(0, 0, 0, 0.25)",
                }}
              >
                {row.status}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "rgba(0, 0, 0, 0.25)",
                }}
              >
                {row.location}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "rgba(0, 0, 0, 0.25)",
                }}
              >
                {row.balance}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
