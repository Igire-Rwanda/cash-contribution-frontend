import MoneyRounded from "@material-ui/icons/MoneyRounded";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/system/Box/Box";

export function ContributionsCard() {
  return (
    <Card sx={{ borderRadius: "50px" }}>
      <CardContent
        sx={{
          width: "454px",
          height: "275px",
          pl: "84px",
          pt: "38px",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 400,
            color: "rgba(0, 0, 0)",
            marginBottom: "70px",
            lineHeight: "24px",
          }}
        >
          Muhima Kibina
        </Typography>
        <Box sx={{ display: "flex", mb: "79px" }}>
          <Typography
            variant="h6"
            component="span"
            sx={{ fontSize: "20px", lineHeight: "24px", fontWeight: 400 }}
          >
            $5000
          </Typography>
        </Box>

        <Typography
          sx={{ fontSize: "20px", color: "rgba(0, 0, 0)", lineHeight: "24px" }}
        >
          25 Members
        </Typography>
        <Box
          sx={{
            width: "155px",
            height: "186px",
            border: "1px solid blue",
            position: "absolute",
            left: "264px",
            right: "auto",
            top: "82px",
            bottom: "auto",
          }}
        >
          <MoneyRounded fontSize="large" />
        </Box>
      </CardContent>
    </Card>
  );
}
