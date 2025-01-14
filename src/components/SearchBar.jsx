function SearchBar ({valueSearch, setValueSearch, handleChange}){
    return(
        <>
        <h1>Cerca film e serie tv</h1>
      <input 
      type = 'search'
      value = {valueSearch}
      onChange = {(event) => setValueSearch(event.target.value)}
      autoComplete="off"
      />
      
      <button onClick={handleChange}> Cerca</button>
      </>
    )
}

export default SearchBar