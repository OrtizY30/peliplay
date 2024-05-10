import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import ContentPeli from "../components/ContentPeli";
import Busqueda from "../components/Busqueda";
import CardInfoPeli from "../components/CardInfoPeli";
import CardInfoSerie from "../components/CardInfoSerie";
import ContentSeries from "../components/ContentSeries";
import Contenedor from "../components/Contenedor";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Contenedor />}>
          <Route index element={<ContentPeli />} />
          <Route path="series" element={<ContentSeries />} />
        </Route>

        <Route path="busqueda" element={<Busqueda />} />

        <Route path="pelicula/:id" element={<CardInfoPeli />} />
        <Route path="serie/:id" element={<CardInfoSerie />} />
      </Route>
    </Routes>
  );
};

export default Routing;
