import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./syle.css";
import Avatar from "@mui/material/Avatar";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
          width: "calc(100% - 293px)",
          marginLeft: "293px",
          position: "fixed",
          top: 0,
          zIndex: 2,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black", fontSize: "1rem" }}
          >
            Welcome to C-Cash Dashboard
          </Typography>
          <Avatar
            alt="Fabiola"
            src="https://picsum.photos/200/200"
            sx={{ marginRight: "8px" }}
          />
          <Typography
            variant="h6"
            component="h6"
            sx={{ color: "black", marginRight: "198px" }}
          >
            Fabiola
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
