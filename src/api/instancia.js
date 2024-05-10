import axios from "axios"


const apiGlobal = axios.create({
  urlBase: 'https://api.themoviedb.org/3/?language=es-ES'
})

export default apiGlobal;