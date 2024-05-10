import { Button, Pagination, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import background from "../img/background.jpg";
import { AppProvider } from "../context/AppContext";
import { Link, useLocation } from "react-router-dom";
import ContentPeli from "./ContentPeli";
import ContentSeries from "./ContentSeries";

const Contenedor = () => {
  const locations = useLocation();
  const { setGenero, setPage, page } = useContext(AppProvider);
  const [openPages, setOpenPages] = useState(false);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack
      sx={{
        m: "auto",
        mt: 14,
        mb: 4,
        boxShadow: "0px 0px 20px black ",
        // width: "95%",
      }}
      // ml={{xs: 'auro', md: "auto",}}
      width={{xs: '100%', sm: '95%'}}
     
    
    >
      <Stack>
        <Stack
          justifyContent={"center"}
          mr={2}
          ml={2}
          height={140}
          borderBottom={1}
        >
          <Typography
            variant="h5"
            textAlign={"center"}
            fontWeight={200}
            textTransform={"uppercase"}
          >
            PELIPLAY - VER PELICULAS Y SERIES ONLINE EN HD
          </Typography>
        </Stack>
        <Stack
          pb={5}
          sx={{
            background: `linear-gradient(rgba(34,49,67,.94),rgba(34,49,67,.95)), url(${background})`,
          }}
        >
          <Stack m={3} borderBottom={1} direction={"row"}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Link to={"/"}>
                <Button
                  sx={{ p: 2, width: 130 }}
                  variant="contained"
                  onClick={() => setGenero("movie")}
                >
                  Peliculas
                </Button>
              </Link>
              <Link to={"/series"}>
                <Button
                  sx={{ p: 2, width: 130 }}
                  variant="contained"
                  onClick={() => setGenero("tv")}
                >
                  series
                </Button>
              </Link>
            </Stack>
          </Stack>

          <Stack alignItems={"center"}>
            <Pagination
              count={500}
              variant="outlined"
              color="secondary"
              shape="rounded"
              size="large"
              page={page}
              onChange={handleChange}
            />
          </Stack>
          

          {locations.pathname === "/" && <ContentPeli />}
          {locations.pathname === "/series" && <ContentSeries />}

          {!openPages ? (
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Button
                color="secondary"
                sx={{ width: 200 }}
                variant="contained"
                onClick={() => setOpenPages(true)}
              >
                Ver mas
              </Button>
            </Stack>
          ) : (
            <Stack alignItems={"center"}>
              <Pagination
                count={500}
                variant="outlined"
                color="secondary"
                shape="rounded"
                size="large"
                page={page}
                onChange={handleChange}
              />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contenedor;
