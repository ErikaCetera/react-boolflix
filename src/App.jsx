import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import AppCard from "./components/AppCard";



function App() {

  const [valueSearch, setValueSearch] = useState('');
  const [post, setPost] = useState([]);

  const apiUrl = 'https://api.themoviedb.org/3';
  const apiKey = 'fbe4ea995a8f388e9c32dd3d1b507529';



  useEffect(() => {
   
  }, [valueSearch]);

  function getMovie () {
    axios.get(`${apiUrl}/search/movie`, {
      params: {
        api_key: apiKey,
        query: valueSearch
      }
    }).then((resp) => {
      setPost(resp.data.results)
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
      setPost(resp.data.results)
      console.log(resp.data.results)
    });
  }

  function handleChange() {
    getMovie();
    getSeries();
    setValueSearch('');
  }
  return (
    <>
      <section>
        <SearchBar
          valueSearch={valueSearch}
          setValueSearch={setValueSearch}
          handleChange={handleChange}
        />
      </section>

      <section>
        {post.map((curItem) =>
        <AppCard
        key={curItem.id}
        title={curItem.title || curItem.name }
        originalTitle={curItem.original_title || curItem.name}
        lang={curItem.original_language}
        vote={curItem.vote_average}
        />
        )}
      </section>


    </>
  )
}

export default App
