import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { User } from "../context/Context";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../css/boginoo.css";

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickPro = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { email, LogOut } = useContext(User);
  const navigate = useNavigate();
  const handleClick = () => {
    <></>;
  };
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "50px",
          marginBottom: "50px",
        }}
      >
        <p className="word">Хэрхэн ажилладаг вэ?</p>
        {email ? (
          <div
            onClick={() => {
              handleClick();
            }}
          >
            <div>
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickPro}
                sx={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "20px",
                  fontFamily: "Ubuntu",
                }}
              >
                {email}
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    LogOut();
                  }}
                  sx={{ width: "150px" }}
                >
                  Log Out
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate(`/history`);
                  }}
                  sx={{ width: "150px" }}
                >
                  History
                </MenuItem>
              </Menu>
            </div>
          </div>
        ) : (
          <button
            className="button"
            onClick={() => {
              navigate(`login`);
            }}
          >
            Нэвтрэх
          </button>
        )}
      </Box>
    </Container>
  );
};

export default Header;
