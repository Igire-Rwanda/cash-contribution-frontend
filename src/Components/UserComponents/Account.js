import AccountCard from "./AccountCard";
import AccountActivityTable from "./AccountActivityTable";
import Box from "@mui/material/Box/Box";
import TeamTable from "./TeamTable";
import ExpenseChart from "./ExpenseChart";

const cardsContainer = {
  width: "95%",
  display: "flex",
  justifyContent: "space-between",
  height: window.innerWidth >= 1336 ? "160px" : "235px",
  mt: "24px",
  mx: "auto",
};

export default function Account() {
  return (
    <>
      <Box sx={cardsContainer}>
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
          justifyContent: "space-between",
          width: "95%",
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
