import Box from "@mui/material/Box/Box";
import { ContributionsCard } from "./ContributionsCard";

export default function Contributions() {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          height: "275px",
          mt: "24px",
          mx: "auto",
          gridTemplateColumns: "repeat(3, 454px)",
          columnGap: "13px",
        }}
      >
        <ContributionsCard />
        <ContributionsCard />
        <ContributionsCard />
      </Box>
    </>
  );
}
