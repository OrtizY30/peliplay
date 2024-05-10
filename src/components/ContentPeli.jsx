import { Stack } from "@mui/material";
import React, { useContext } from "react";
import { AppProvider } from "../context/AppContext";
import Card from "./Card";
import { Link } from "react-router-dom";

const ContentPeli = () => {
  const { dataMovie } = useContext(AppProvider);

  return (
    <Stack
      p={3}
      display={"grid"}
      gridTemplateColumns={`repeat(auto-fit, minmax(160px, 1fr))`}
      gap={2}
      minHeight={'70vh'}
    >
      {dataMovie.map((peli, index) => (
        <Link key={peli.id} to={`pelicula/${peli.id}`}>
          <Card 
          item={peli}
           grow={(index + 1) * 200}
            />
        </Link>
      ))}
    </Stack>
  );
};

export default ContentPeli;
