import {
  Button,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import background from "../img/background.jpg";
import Card from "./Card";
import { useContext, useEffect, useState } from "react";
import { AppProvider } from "../context/AppContext";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const Busqueda = () => {
  const { busqueda, setPage, dataBusqueda, page, totalPage } =
    useContext(AppProvider);
  const [openPages, setOpenPages] = useState(false);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container
      sx={{
        mt: 14,
        mb: 4,
        boxShadow: "0px 0px 20px black ",
        width: "95%",
      }}
      minHeight={'70vh'}
    >
      <Stack>
        <Stack
          justifyContent={"center"}
          p={5}
          height={100}
          borderBottom={1}
          mb={2}
        >
          <Typography
            variant="h5"
            textAlign={"center"}
            fontWeight={600}
            // textTransform={"uppercase"}
          >
            {`Estas buscando: ${busqueda} pagina ${page} HD - PELIPLAY`}
          </Typography>
        </Stack>
        <Stack
          minHeight={"40vh"}
          pb={5}
          sx={{
            background: `linear-gradient(rgba(34,49,67,.94),rgba(34,49,67,.95)), url(${background})`,
          }}
        >
           <Stack m={4} alignItems={"center"}>
              <Pagination
                count={totalPage}
                variant="outlined"
                color="secondary"
                shape="rounded"
                size="large"
                page={page}
                onChange={handleChange}
              />
            </Stack>
          {dataBusqueda.length <= 0 ? (
            <Stack alignItems={"center"} mt={4}>
              <Typography variant="h4">No hay sugerencias </Typography>
            </Stack>
          ) : (
            <Stack
              display={"grid"}
              gridTemplateColumns={" repeat(auto-fit, minmax(160px, 1fr) )"}
              gap={2}
            >
              {dataBusqueda.map((item, index) => (
                  <Link key={item.id} to={`
                  ${item.id}`}>
                  <Card 
                  item={item}
                  grow={(index + 1) * 200}
                   />
                </Link>
              ))}
            </Stack>
          )}

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
                count={totalPage}
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
    </Container>
  );
};

export default Busqueda;
