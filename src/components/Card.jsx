import { Movie, Star } from "@mui/icons-material";
import { Box, Grow, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Card = ({item, grow }) => {
  const {  title, poster_path, popularity, name} = item;
  const [checked, setChecked] = useState(false);
  // const truncatedName = name.length > 15 ? `${name.substring(0, 15)}...` : name;
 
  useEffect(() => {
     // Inicia la animación después de un tiempo específico (por ejemplo, 500ms)
     const timer = setTimeout(() => {
       setChecked(true);
     }, 400); // Ajusta este valor según tus necesidades
 
     return () => {
       clearTimeout(timer);
     };
  }, []);
  return (
    <Grow  in={checked}
    style={{ transformOrigin: '0 0 0' }}
    {...(checked ? { timeout: grow } : {})} mountOnEnter unmountOnExit>
    <Stack mb={3}>
      {poster_path ? (
        <Box
          boxShadow={"0px 0px 10px black"}
          borderRadius={1}
          component={"img"}
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          alt="poster-peli"
          height={250}
          sx={{
            "&:hover": {
              border: "3px solid blue",
            },
          }}
        />
      ) : (
        <Stack
          boxShadow={"0px 0px 10px black"}
          borderRadius={1}
          sx={{ display: "flex", height: 250 }}
          alignItems={"center"}
          justifyContent={"center"}
          bgcolor={"#223042"}
        >
          <Movie sx={{ fontSize: 100, color: "gray" }} />
        </Stack>
      )}

      <Stack
        boxShadow={"0px 0px 20px black"}
        height={80}
        bgcolor={"#223042"}
        mt={0.5}
        p={1}
        borderRadius={1}
        justifyContent={"space-between"}
      >
        <Typography
          textTransform={"capitalize"}
          fontWeight={900}
          sx={{ fontSize: 13 }}
        >
          {title}
        </Typography>
        <Typography
          textTransform={"capitalize"}
          fontWeight={900}
          sx={{
            fontSize: 13,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            webkitLineClamp: 2,
            webkitBoxOrient: "vertical",
          }}
        >
          {name}
        </Typography>

        <Stack alignItems={"center"} direction={"row"}>
          <Star fontSize="small" sx={{ color: "yellow", fontSize: 15 }} />
          <Typography mt={0.5} sx={{ fontSize: 12, color: "#50FE8A" }}>
            {popularity}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
      </Grow>
  );
};

export default Card;
