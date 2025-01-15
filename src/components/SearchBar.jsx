import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar ({valueSearch, setValueSearch, handleAll, handleKey}){
    return(
        <>
      <input 
      type = 'search'
      value = {valueSearch}
      onChange = {(event) => setValueSearch(event.target.value)}
      autoComplete="off"
      onKeyUp={handleKey}
      placeholder="Cerca ..."
      />
      
      <button className="search-button" onClick={handleAll}> <FontAwesomeIcon icon={faSearch} /></button>
      </>
    )
}

export default SearchBar