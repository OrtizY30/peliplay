import { Box, Container, Stack, Typography } from "@mui/material";
import background from "../img/background.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Star } from "@mui/icons-material";
import { useParams } from "react-router-dom";

const CardInfoPeli = () => {
    const {id} = useParams()
  const [dataInfo, setDataInfo] = useState({});
  useEffect(() => {
    getDatainfo();
  }, []);

  const getDatainfo = async () => {
    const respuesta = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e1037283a4f1a9be5ce03d5732cddf21&language=es-ES&append_to_response=videos,images`
    );
    const { data } = respuesta;
    setDataInfo(data);
  };

  return (
    <Container
      sx={{
        mt: 14,
        mb: 4,
        boxShadow: "0px 0px 20px black ",
        width: "95%",
        background: `linear-gradient(rgba(34,49,67,.94),rgba(34,49,67,.95)), url(${background})`,
        p: 10,
      }}
    >
      <Stack gap={2} width={'100%'} direction={{xs: 'column', md: 'row'}} justifyContent={"space-around"} alignItems={{xs: 'center', xl: 'start'}}
      flexWrap={{md: 'wrap'}}>
        <Box
          component={"img"}
          src={"https://image.tmdb.org/t/p/w500" + dataInfo.poster_path}
          alt="poster-peli"
          width={{lg: 200, xs: 350}}
        boxShadow={'0px 0px 15px black'}
        />
        <Stack width={"40%"}>
          <Typography variant="h4" textTransform={"capitalize"}>
            {dataInfo.title}
          </Typography>
          <Typography fontWeight={900} mt={2} mb={1}>
            Sinopsis:
          </Typography>
          <Typography fontFamily={"arial"}>{dataInfo.overview}</Typography>
        </Stack>

        <Stack direction={'row'} gap={2}>
            <Stack alignItems={'center'} gap={2}>
                <Typography color={"#049FF1"} variant="h5">Lenguaje</Typography>
            <Typography fontWeight={900} textTransform={'capitalize'}>
                {dataInfo.original_language}
            </Typography>
            </Stack>
          <Stack alignItems={'center'} gap={3}>
            <Typography color={"#049FF1"} variant="h5">
              Generos
            </Typography>
            <Stack gap={1}>
              {dataInfo.genres?.map((genero) => (
                <Typography key={genero.id} fontWeight={900} textAlign={'center'}>{genero.name}</Typography>
              ))}
            </Stack>
          </Stack>
          <Stack alignItems={'center'} gap={3}>
            <Typography color={"#049FF1"} variant="h5">Calificacion</Typography>
            <Star fontSize="large" sx={{ color: "yellow" }} />
            <Typography fontWeight={900}>{dataInfo.popularity}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CardInfoPeli;
