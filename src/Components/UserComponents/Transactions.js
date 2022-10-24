import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";

import TransactionsChart from "./TransactionsChart";
import TransactionsTable from "./TransactionsTable";

export default function Transactions() {
  return (
    <>
      <Box
        sx={{
          width: "95%",
          height: "200px",
          mx: "auto",
          display: "flex",
          mt: "24px",
        }}
      >
        <TransactionsChart />
        <Paper sx={{ height: "200px", width: "450px" }} />
      </Box>
      <Box sx={{ width: "95%", mx: "auto", mt: "24px" }}>
        {/* Table Transactions */}
        <TransactionsTable />
      </Box>
    </>
  );
}
