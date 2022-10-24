import { useContext } from "react";
import List from "@mui/material/List/List";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import AccountBalance from "@mui/icons-material/AccountBalance";
import Dashboard from "@mui/icons-material/Dashboard";
import Money from "@mui/icons-material/Money";
import FileCopy from "@mui/icons-material/FileCopy";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import { NbrContext } from "./PageLayout";

export function Nav() {
  const { selected, setSelected } = useContext(NbrContext);
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
    >
      <ListItemButton
        sx={{ color: "white" }}
        selected={selected == 1}
        onClick={() => setSelected(1)}
      >
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton
        sx={{ color: "white" }}
        selected={selected == 2}
        onClick={() => setSelected(2)}
      >
        <ListItemIcon>
          <AccountBalance />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItemButton>

      <ListItemButton
        sx={{ color: "white" }}
        selected={selected == 3}
        onClick={() => {
          setSelected(3);
        }}
      >
        <ListItemIcon>
          <AccountBalanceWalletIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItemButton>
      <ListItemButton
        sx={{ color: "white" }}
        selected={selected == 4}
        onClick={() => setSelected(4)}
      >
        <ListItemIcon>
          <Money />
        </ListItemIcon>
        <ListItemText primary="Contibutions" />
      </ListItemButton>
      <ListItemButton
        sx={{ color: "white" }}
        selected={selected == 5}
        onClick={() => setSelected(5)}
      >
        <ListItemIcon>
          <FileCopy />
        </ListItemIcon>
        <ListItemText primary="Documents" />
      </ListItemButton>
      <ListItemButton
        sx={{ color: "white" }}
        selected={selected == 6}
        onClick={() => setSelected(6)}
      >
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
        selected={selected == 7}
        onClick={() => setSelected(7)}
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
