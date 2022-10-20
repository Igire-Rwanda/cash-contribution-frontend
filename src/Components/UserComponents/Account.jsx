"use strict";

import AccountCard from "./AccountCard";
import AccountActivityTable from "./AccountActivityTable";
import Box from "@mui/material/Box/Box";
import TeamTable from "./TeamTable";
import ExpenseChart from "./ExpenseChart";

export default function Account() {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          height: "235px",
          mt: "24px",
          mx: "auto",
          gridTemplateColumns: "repeat(4, 295px)",
          columnGap: "52px",
        }}
      >
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
      </Box>
      <Box
        sx={{
          mt: "17px",
          mx: "auto",
          display: "flex",
          alignItems: "space-between",
        }}
      >
        <TeamTable />
        <ExpenseChart />
      </Box>
      <Box
        sx={{
          mt: "16px",
          minWidth: "100%",
          mx: "auto",
        }}
      >
        <AccountActivityTable />
      </Box>
    </>
  );
}
