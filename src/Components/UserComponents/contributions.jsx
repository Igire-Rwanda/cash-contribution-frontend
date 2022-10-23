import Box from "@mui/material/Box/Box";
import ContributionsCard from "./ContributionsCard";
import ContributionsTable from "./ContributionsTable";

export default function Contributions() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "210px",
          width: "95%",
          mt: "24px",
          mx: "auto",
          justifyContent: "space-between",
        }}
      >
        <ContributionsCard style={{ backgroundColor: "purple" }} />
        <ContributionsCard />
        <ContributionsCard />
      </Box>
      <Box sx={{ mt: "20px" }}>
        <ContributionsTable />
      </Box>
    </>
  );
}
