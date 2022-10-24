import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const cardContent = {
  width: "210px",
  height: "160px",
  "&:last-child td, &:last-child th": { border: 0 },
              "&:hover": { bgcolor: "#476847"  },
 
};

export default function AccountCard() {
  return (
    <Card sx={{ borderRadius: "30px",color: "black", ...cardContent }}>
      <CardContent sx={cardContent}>
        <Typography
          sx={{
            fontSize: "16px",
            color: "red",
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
          <Typography sx={{ fontSize: "10px", color: "green" }}>
            Updated 1d ago
          </Typography>
        </Box>

        <Typography sx={{ fontSize: "16px", color: "skyblue" }}>
          + 3.6% than last month
        </Typography>
      </CardContent>
    </Card>
  );
}
