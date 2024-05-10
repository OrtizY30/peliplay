import {
  ArrowDropDown,
  ExpandMore,
  FormatListBulleted,
  Home,
  Tv,
  Videocam,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Sidebar = ({ open, setOpen }) => {
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    getGeneros();
  }, []);

  const getGeneros = async () => {
    try {
      const respuesta = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=e1037283a4f1a9be5ce03d5732cddf21&language=es"
      );
      const {
        data: { genres },
      } = respuesta;
      setGeneros(genres);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Stack
        width={"20%"}
        position={"fixed"}
        top={60}
        height={"100vh"}
        boxShadow={"0px 0px 15px  black"}
        left={0}
        sx={{ overflowY: "auto", transition: "all 200ms ease-in-out" }}
        
      >
        <Stack display={{ md: "flex", xs: "none" }}>
          <Typography
            textTransform={"uppercase"}
            fontWeight={400}
            variant="h7"
            sx={{
              fontSize: 13,
              display: "block",
              p: 3,
              mt: 8,
              color: "#9c9696",
            }}
          >
            Navegacion
          </Typography>

          <Stack direction={"row"} p={2}>
            <Home color="inherit" sx={{ mr: 2, ml: 1 }} />
            <Link to={"/"}>
              <Typography textTransform={"uppercase"}>Inicio</Typography>
            </Link>
          </Stack>

          <Accordion>
            <AccordionSummary
              expandIcon={
                <ArrowDropDown
                  sx={{ color: "white", fontSize: 30, minWidth: 20 }}
                />
              }
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ m: 2 }}
            >
              <Tv sx={{ mr: 2 }} />
              <Typography>Peliculas</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#1E2A39" }}>
              <Link>
                <Typography sx={{ textAlign: "center", color: "white" }}>
                  Todas las peliculas
                </Typography>
              </Link>
              <Link>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "white",
                    display: "block",
                    p: 3,
                  }}
                >
                  Ultimos Estrenos
                </Typography>
              </Link>
              <Link>
                <Typography sx={{ textAlign: "center", color: "white" }}>
                  Peliculas Populares
                </Typography>
              </Link>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={
                <ArrowDropDown sx={{ color: "white", fontSize: 30 }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ m: 2 }}
            >
              <Videocam sx={{ mr: 2 }} />
              <Typography>Series</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#1E2A39" }}>
              <Link>
                <Typography sx={{ textAlign: "center", color: "white" }}>
                  Todas las series
                </Typography>
              </Link>
              <Link>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "white",
                    display: "block",
                    p: 3,
                  }}
                >
                  Ultimos Estrenos
                </Typography>
              </Link>
              <Link>
                <Typography sx={{ textAlign: "center", color: "white" }}>
                  Series Populares
                </Typography>
              </Link>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={
                <ArrowDropDown sx={{ color: "white", fontSize: 30 }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ m: 2 }}
            >
              <FormatListBulleted sx={{ mr: 2 }} />
              <Typography>Generos</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#1E2A39", mb: 10 }}>
              {generos.map((genero) => (
                <Link key={genero.id}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "white",
                      p: 1,
                      "&:hover": {
                        color: "blue",
                      },
                    }}
                  >
                    {genero.name}
                  </Typography>
                </Link>
              ))}
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
      {/* <ButtonBase
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(true)}
      >
        <Stack
          left={200}
          // zIndex={1}
          // position={open ? "absolute" : "relative"}
          // display={{ md: "none", xs: "flex" }}
          width={"100%"}
          alignItems={"center"}
        >
          <Home sx={{ m: 3 }} />
          <Tv sx={{ m: 3 }} />
          <Videocam sx={{ m: 3 }} />
          <FormatListBulleted sx={{ m: 3 }} />
        </Stack>
      </ButtonBase> */}
    </>
  );
};

export default Sidebar;
