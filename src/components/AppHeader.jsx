import SearchBar from "./SearchBar"


function AppHeader({ valueSearch, setValueSearch, handleAll, handleEnter }) {
  return (
    <>
      <div className="app-header">
        <div className="logo">
          <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" />
        </div>
        <div className="search-bar">
          <SearchBar
            valueSearch={valueSearch}
            setValueSearch={setValueSearch}
            handleAll={handleAll}
            handleKey={handleEnter}
          />
        </div>
      </div>
    </>
  )

}

export default AppHeader