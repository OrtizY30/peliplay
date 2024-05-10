import { Stack } from "@mui/material";
import React, { useContext } from "react";
import { AppProvider } from "../context/AppContext";
import Card from "./Card";
import { Link } from "react-router-dom";

const ContentSeries = () => {
  const { dataSerie } = useContext(AppProvider);

  return (
    <Stack
      p={3}
      display={"grid"}
      gridTemplateColumns={" repeat(auto-fit, minmax(160px, 1fr) )"}
      gap={2}
      minHeight={'70vh'}
    >
      {dataSerie.map((serie, index) => (
        <Link key={serie.id} to={`/serie/${serie.id}`}>
          <Card 
          item={serie}
          grow={(index + 1) * 200}
           />
        </Link>
      ))}
    </Stack>
  );
};

export default ContentSeries;
