import React from 'react';
import AppMoviesAndSeries from "./AppMoviesAndSeries"

function AppMain({ movies, series }) {
    return (
        <main>
            <div className='container'>
                    
                    <AppMoviesAndSeries post={movies}
                        sectionTitle='Film' />
                
                    <AppMoviesAndSeries post={series}
                        sectionTitle='Serie Tv' />
            </div>
        </main>
    )
}

export default AppMain