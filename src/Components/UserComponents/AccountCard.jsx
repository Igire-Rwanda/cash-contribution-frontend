import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function AccountCard() {
  return (
    <Card sx={{ borderRadius: "50px" }}>
      <CardContent sx={{ width: "295px", height: "230px", padding: "30px" }}>
        <Typography
          sx={{
            fontSize: "20px",
            color: "rgba(0, 0, 0, 0.25)",
            marginBottom: "35px",
          }}
        >
          Total Money
        </Typography>
        <Box sx={{ display: "flex", mb: "35px" }}>
          <Typography variant="h6" component="span" sx={{ mr: "6px" }}>
            $7000M
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "rgba(0, 0, 0, 0.25)" }}>
            Updated 1d ago
          </Typography>
        </Box>

        <Typography sx={{ fontSize: "20px", color: "rgba(0, 0, 0, 0.25)" }}>
          + 3.6% than last month
        </Typography>
      </CardContent>
    </Card>
  );
}
