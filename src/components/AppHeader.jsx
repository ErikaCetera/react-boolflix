import SearchBar from "./SearchBar"


function AppHeader({ valueSearch, setValueSearch, handleAll, handleEnter }) {
    return(
        <>
        <SearchBar
          valueSearch={valueSearch}
          setValueSearch={setValueSearch}
          handleAll={handleAll}
          handleKey={handleEnter}
        />
        </>
    )
    
}

export default AppHeader