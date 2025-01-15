import { createContext, useContext } from "react";

const GlobalContext = createContext();

const globalProviderValue = {

}

function GlobalProvider ({children}) {
    return(
        <GlobalContext.Provider value={globalProviderValue}>
            {children}
        </GlobalContext.Provider>
    );
}


function useGlobalContext() {
    return useContext(GlobalContext);
}

export {
    GlobalProvider,
    useGlobalContext
};