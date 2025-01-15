import AppMoviesAndSeries from "./AppMoviesAndSeries"

function AppMain({ movies, series }) {
    return (
        <main>
            <section>
                <AppMoviesAndSeries post={movies}
                    sectionTitle='Film' />
            </section>
            <section>
                <AppMoviesAndSeries post={series}
                    sectionTitle='Serie Tv' />
            </section>
        </main>
    )
}

export default AppMain