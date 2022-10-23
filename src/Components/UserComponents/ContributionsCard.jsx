import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/system/Box/Box";

import moneyBag from "./../../Assets/img/emojione-monotone_money-bag.svg";

const cardSizeCSS = {
  width: "300px",
  height: "210px",
  p: "16px",
  position: "relative",
};

export default function ContributionsCard({ style }) {
  return (
    <Card sx={{ borderRadius: "30px", ...cardSizeCSS, ...style, p: "auto" }}>
      <CardContent sx={cardSizeCSS}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            color: "rgba(0, 0, 0)",
            marginBottom: "32px",
            lineHeight: "24px",
          }}
        >
          Muhima Kibina
        </Typography>
        <Box sx={{ display: "flex", mb: "32px" }}>
          <Typography
            variant="h6"
            component="span"
            sx={{ fontSize: "14px", lineHeight: "24px", fontWeight: 400 }}
          >
            $5000
          </Typography>
        </Box>

        <Typography
          sx={{ fontSize: "14px", color: "rgba(0, 0, 0)", lineHeight: "24px" }}
        >
          25 Members
        </Typography>
        <Box
          sx={{
            width: "120px",
            height: "140px",
            position: "absolute",
            left: "150px",
            right: "auto",
            top: "32px",
            bottom: "auto",
          }}
        >
          <img
            src={moneyBag}
            alt="Money bag svg "
            style={{ width: "120px", height: "140px" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
