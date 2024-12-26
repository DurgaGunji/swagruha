import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import union from "../assets/Union (1).png"; // Background image 1
import frame from "../assets/Frame.png"; // Background image 2
import logo1 from "../assets/logo1.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

const TopBar = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundImage: `url(${union})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: "#FDF4E9",
  padding: "30px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 1,
  // Add media query for 4K resolution
  [theme.breakpoints.up("lg")]: {
    padding: "50px 0", // Increased padding for large screens
  },
  [theme.breakpoints.up("xl")]: {
    padding: "80px 0", // Even more padding for extra large screens (4K+)
  },
}));

const FrameImage = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "0",
  // left: "0",
  width: "100%",
  objectFit: "cover",
  zIndex: 0,
  // Add media query for 4K resolution
  [theme.breakpoints.up("lg")]: {
    padding: "20px", // Adjust padding for large screens
  },
  [theme.breakpoints.up("xl")]: {
    padding: "40px", // Extra padding for extra large screens
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  backgroundColor: "white",
  color: "black",
  width: "150%",
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  padding: theme.spacing(1),
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(20)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

function PrimarySearchAppBar() {
  const [showPhoneNumbers, setShowPhoneNumbers] = React.useState(false); // State for toggling phone numbers

  // Media Queries
  const isMobile = useMediaQuery("(max-width:600px)");
  const handleTogglePhoneNumbers = () => {
    setShowPhoneNumbers((prev) => !prev);
  };

  const handleClickAway = () => {
    setShowPhoneNumbers(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <TopBar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 20px",
            zIndex: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MailIcon sx={{ marginLeft: "30px", color: "black" }} />
            <Typography sx={{ marginLeft: "26px", color: "black" }}>
              infoswagruha.net
            </Typography>
          </Box>
          {isMobile ? (
            <ClickAwayListener onClickAway={handleClickAway}>
              <Box sx={{ position: "static" }}>
                <IconButton
                  sx={{ color: "black" }}
                  onClick={handleTogglePhoneNumbers}
                >
                  <PhoneIcon />
                </IconButton>
                {showPhoneNumbers && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "10px",
                      right: 0,
                      backgroundColor: "#FDF4E9",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                      borderRadius: "8px",
                      padding: "10px",
                      zIndex: 3,
                    }}
                  >
                    <Typography sx={{ color: "black", padding: "5px 10px" }}>
                      +91 456-7890
                    </Typography>
                    <Typography sx={{ color: "black", padding: "5px 10px" }}>
                      +91 456-7891
                    </Typography>
                  </Box>
                )}
              </Box>
            </ClickAwayListener>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", color: "black" }}>
              <PhoneIcon sx={{ marginRight: "20px", color: "black" }} />
              <Typography sx={{ marginRight: "15px", color: "black" }}>
                +91 456-7890
              </Typography>
              <PhoneIcon sx={{ marginRight: "5px", color: "black" }} />
              <Typography sx={{ marginRight: "20px", color: "black" }}>
                +91 456-7891
              </Typography>
            </Box>
          )}
        </Box>
        <FrameImage src={frame} alt="Frame" />
      </TopBar>
      <AppBar position="static" sx={{ backgroundColor: "#FDF4E9" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
              fontSize: "24px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FDF4E9",
            }}
          >
            {!isMobile && (
              <img
                src={logo1}
                alt="Logo"
                style={{ width: "auto", height: "50px", marginLeft: "30px" }}
              />
            )}
          </Typography>

          <Search>
            <SearchIconWrapper>
              <Box
                sx={{ display: "flex", alignItems: "center", marginRight: "8px" }}
              >
                <Typography sx={{ marginLeft: "8px", color: "black" }}>
                  Category
                </Typography>
              </Box>
              <Box sx={{ marginLeft: "8px" }}>
                <KeyboardArrowDownIcon sx={{ color: "black" }} />
              </Box>
              <SearchIcon sx={{ color: "#333", marginLeft: "15px" }} />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search products…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton
            size="large"
            aria-label="show cart items"
            color="black"
            sx={{
              marginLeft: isMobile ? "-10px" : "0",
            }}
          >
            <Badge
              badgeContent={3}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#FAB446",
                  color: "white",
                },
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <IconButton
            size="large"
            aria-label="show wishlist items"
            color="black"
            sx={{
              marginLeft: isMobile ? "-12px" : "0",
            }}
          >
            <Badge
              badgeContent={5}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#FAB446",
                  color: "white",
                },
              }}
            >
              <FavoriteIcon />
            </Badge>
          </IconButton>

          {!isMobile && (
            <>
              <Button
                sx={{
                  color: "#A10007",
                  border: "2px solid #A10007",
                  borderRadius: "30px",
                  marginLeft: 2,
                }}
                variant="outlined"
              >
                SignIn
              </Button>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#A10007",
                  borderRadius: "30px",
                  marginLeft: 2,
                  "&:hover": { backgroundColor: "#7A0005" },
                }}
                variant="contained"
              >
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default PrimarySearchAppBar;
