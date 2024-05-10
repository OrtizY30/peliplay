import React, { createContext, useEffect, useState } from "react";
import apiGlobal from "../api/instancia";
import axios from "axios";

export const AppProvider = createContext();

export const AppContext = ({ children }) => {
  const [dataMovie, setDataMovie] = useState([]);
  const [dataSerie, setDataSerie] = useState([]);
  const [genero, setGenero] = useState("movie");
  const [busqueda, setBusqueda] = useState("");
  const [dataBusqueda, setDataBusqueda] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState('');
  const [name, setName] = useState('')

  const apiKey = "&api_key=e1037283a4f1a9be5ce03d5732cddf21";
  const idioma = "language=es-ES";

  useEffect(() => {
    getData(page);
  }, [genero, page]);

  useEffect(() => {
    getBusqueda(page, busqueda);
  }, [busqueda, page]);

  const getData = async (page) => {
    // const respuesta = await apiGlobal.get(`&page=${page}&`)
    const respuesta = await axios.get(
      `https://api.themoviedb.org/3/discover/${genero}?&${idioma}&page=${page}${apiKey}`
    );
    const {
      data: { results },
    } = respuesta;
    if(genero === 'movie'){
      setDataMovie(results);

    } else (
      setDataSerie(results)
    )
  };

  const getBusqueda = async (page, busqueda) => {
    const respuesta = await axios.get(`https://api.themoviedb.org/3/search/movie?${apiKey}&query=${busqueda}&include_adult=false&language=es-ES&page=${page}%27;`
    );
    const {
      data: { results, total_pages
      }
    } = respuesta;
    setTotalPage(total_pages)
    setTimeout(() => {
      setDataBusqueda(results);
    }, 1000)
  };

  return (
    <AppProvider.Provider
      value={{
        dataMovie,
        dataSerie,
        setGenero,
        busqueda,
        setBusqueda,
        setPage,
        totalPage,
        page,
        dataBusqueda,
        setName,
        name
      }}
    >
      {children}
    </AppProvider.Provider>
  );
};
