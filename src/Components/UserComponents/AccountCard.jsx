import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const cardContent = {
  width: "210px",
  height: "160px",
};

export default function AccountCard() {
  return (
    <Card sx={{ borderRadius: "30px", ...cardContent }}>
      <CardContent sx={cardContent}>
        <Typography
          sx={{
            fontSize: "16px",
            color: "rgba(0, 0, 0, 0.25)",
            marginBottom: "15px",
          }}
        >
          Total Money
        </Typography>
        <Box sx={{ display: "flex", mb: "20px" }}>
          <Typography
            variant="h6"
            component="span"
            sx={{ mr: "4px", fontSize: "16px" }}
          >
            $7000M
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.25)" }}>
            Updated 1d ago
          </Typography>
        </Box>

        <Typography sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.25)" }}>
          + 3.6% than last month
        </Typography>
      </CardContent>
    </Card>
  );
}
