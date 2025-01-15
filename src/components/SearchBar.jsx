function SearchBar ({valueSearch, setValueSearch, handleAll, handleKey}){
    return(
        <>
        <h1>Cerca film e serie tv</h1>
      <input 
      type = 'search'
      value = {valueSearch}
      onChange = {(event) => setValueSearch(event.target.value)}
      autoComplete="off"
      onKeyUp={handleKey}
      />
      
      <button onClick={handleAll}> Cerca</button>
      </>
    )
}

export default SearchBar