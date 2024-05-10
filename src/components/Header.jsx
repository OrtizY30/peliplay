import {
  AppBar,
  Box,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "../img/logo.png";
import {
  ArrowRightAlt,
  Cancel,
  Menu,
  Padding,
  Search,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import { AppProvider } from "../context/AppContext";

import { Link, useNavigate } from "react-router-dom";

const Header = ({ open, setOpen }) => {
  const [showInput, setShowInput] = useState(false);
  const { setBusqueda } = useContext(AppProvider);

  const navigate = useNavigate();

  const buscar = (e) => {
    if (e.target.value == "") return;
    setBusqueda(e.target.value);

    setTimeout(() => {
      navigate("/busqueda");
    }, 1000);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ height: 64, }}>
        <Stack direction={"row"} alignItems={'center'}>
          <Stack
            pb={2}
            // overflow={"hidden"}
            sx={{ width: 215 }}
            gap={1}
            direction={"row"}
            alignItems={"center"}
            display={{ xs: "none", md: "flex" }}
            ml={2}
          >
            <Box
              // p={1}
              sx={{ transform: "rotate(-15deg)" }}
              component={"img"}
              width={50}
              src={logo}
              alt="logo peliplay"
            />
            <Link to={"/"}>
              <Typography
                sx={{
                  transition: "all 300ms ease-in-out",
                  // opacity: !open ? 0 : 1
                }}
                variant="h4"
                fontWeight={900}
                letterSpacing={-2}
              >
                peliplay
              </Typography>
            </Link>
          </Stack>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(!open)}
            sx={{ display: { md: "none", xs: "block" } }}
          >
            {open ? (
              <Menu sx={{ fontSize: 25 }} />
            ) : (
              <ArrowRightAlt sx={{ fontSize: 28 }} />
            )}
          </IconButton>

          {showInput ? (
            <Box
              component={"form"}
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: 1,
                width: 350,
              }}
            >
              <IconButton onClick={() => setShowInput(false)}>
                <Cancel fontSize="medium" sx={{ color: "red", my: -0.7 }} />
              </IconButton>
              <TextField
                fullWidth
                id="input-with-sx"
                placeholder="Buscar Peliculas o series"
                variant="standard"
                sx={{ color: "white" }}
                onChange={buscar}
                color="text"
              />
            </Box>
          ) : (
            <IconButton onClick={() => setShowInput(true)}>
              <Search sx={{ color: "white",}} />
            </IconButton>
          )}
        </Stack>
      </AppBar>
    </>
  );
};

export default Header;
