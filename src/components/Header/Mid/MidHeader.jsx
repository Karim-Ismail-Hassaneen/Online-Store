import {
  Container,
  Dialog,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  styled,
  useTheme,
} from "@mui/material";
import Logging from "./Logging";
import ShoppingCart from "./ShoppingCart";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../../them";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { ExpandMore } from "@mui/icons-material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.7,
  // @ts-ignore
  color: "#888",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  transition: "0.8s",
  "&:hover": {
    border: "1px solid #333",
    color: "#444",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minwidth: "300px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const options = ["All Categories", "MEN", "WOMEN", "KIDS"];

const MidHeader = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  const [opening, setOpening] = useState(false);
  const clickOpen = () => {
    setOpening(true);
  };

  const clickClose = () => {
    setOpening(false);
  };
  return (
    <>
      <Container
        sx={{
          my: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Search
          className="search-input"
          sx={{
            borderRadius: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            sx={{ flexGrow: 1 }}
            placeholder="Search......"
            inputProps={{ "aria-label": "search" }}
          />
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              // @ts-ignore
              sx={{
                // @ts-ignore
                bgcolor: theme.palette.searchBtn.btnColor,
                borderTopRightRadius: "29px",
                borderBottomRightRadius: "29px",
                p: 0,
              }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{ fontSize: "20px" }}
              >
                <ListItemText
                  secondary={options[selectedIndex]}
                  sx={{
                    width: 100,
                    textAlign: "center",
                    cursor: "pointer",
                    fontSize: "20px",
                    display: "flex",
                  }}
                />
                <ExpandMore sx={{ fontSize: "16px" }} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                  sx={{ fontSize: "12px" }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Search>
        <Stack direction={"row"} alignItems={"center"}>
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined
                  sx={{ fontSize: "16px", color: "#2B3445" }}
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
              </IconButton>
            )}
          </div>
          <IconButton onClick={clickOpen}>
            <PersonOutlineOutlinedIcon />
          </IconButton>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={0} color="secondary">
              <ShoppingCartOutlinedIcon />
            </StyledBadge>
          </IconButton>
        </Stack>
        <Dialog
          sx={{ ".MuiBox-root  ": { maxWidth: { xs: "100%", md: 1000 } } }}
          open={opening}
          onClose={clickClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={clickClose}
          >
            <CloseIcon />
          </IconButton>
          <Logging />
        </Dialog>
      </Container>
    </>
  );
};

export default MidHeader;
