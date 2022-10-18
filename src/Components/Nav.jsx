import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";
import AccountBalance from "@mui/icons-material/AccountBalance";
import Dashboard from "@mui/icons-material/Dashboard";
import Money from "@mui/icons-material/Money";
import FileCopy from "@mui/icons-material/FileCopy";
import Wallet from "@mui/icons-material/Wallet";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";

import "./syle.css";

export function Nav() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 293,
        bgcolor: "#476847",
        height: "100vh",
        position: "fixed",
        paddingTop: "190px",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Nested List Items
      //   </ListSubheader>
      // }
    >
      <ListItemButton sx={{ color: "white" }}>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton sx={{ color: "white" }}>
        <ListItemIcon>
          <AccountBalance />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItemButton>

      <ListItemButton sx={{ color: "white" }}>
        <ListItemIcon>
          <Money />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItemButton>
      <ListItemButton sx={{ color: "white" }}>
        <ListItemIcon>
          <Wallet />
        </ListItemIcon>
        <ListItemText primary="Contibutions" />
      </ListItemButton>
      <ListItemButton sx={{ color: "white" }}>
        <ListItemIcon>
          <FileCopy />
        </ListItemIcon>
        <ListItemText primary="Documents" />
      </ListItemButton>
      <ListItemButton sx={{ color: "white" }}>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Members" />
      </ListItemButton>

      <ListItemButton
        sx={{
          color: "white",
          bottom: "3rem",
          width: "100%",
          top: "auto",
          position: "absolute",
        }}
      >
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </List>
  );
}

export default Nav;
