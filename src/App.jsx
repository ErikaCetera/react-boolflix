import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import AppHeader from "./components/AppHeader";
import { GlobalProvider } from "./context/GlobalContext";
import AppMain from "./components/AppMain";





function App() {

  const [valueSearch, setValueSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const apiUrl = 'https://api.themoviedb.org/3';
  const apiKey = 'fbe4ea995a8f388e9c32dd3d1b507529';
  



  useEffect(() => {

  }, [valueSearch]);

  function getMovie() {
    axios.get(`${apiUrl}/search/movie`, {
      params: {
        api_key: apiKey,
        query: valueSearch
      }
    }).then((resp) => {
      setMovies(resp.data.results)
      console.log(resp);

    });
  }

  function getSeries() {
    axios.get(`${apiUrl}/search/tv`, {
      params: {
        api_key: apiKey,
        query: valueSearch
      }
    }).then((resp) => {
      
      setSeries(resp.data.results)
      console.log(resp)
    });
  }

  function handleEnter (event){
    if(event.key === "Enter"){
      getMovie();
      getSeries();
      setValueSearch('')
    }
  }

  function handleAll() {
    getMovie();
    getSeries();
    setValueSearch('');
  }
  return (
    <>
    <GlobalProvider>
    <AppHeader
        valueSearch={valueSearch} 
        setValueSearch={setValueSearch} 
        handleAll={handleAll} 
        handleEnter={handleEnter}/>
       
       <AppMain
       movies={movies}
       series={series}
       />

      </GlobalProvider>
    </>
  )
}

export default App
