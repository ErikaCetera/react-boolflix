import AppCard from "./AppCard"

function AppMoviesAndSeries({ post, sectionTitle }) {
  return (
    <main>
      <section>
        <h2 className="section-title">{sectionTitle}</h2>
         <div className="row">
        {post.map((curItem) =>
        <div key={curItem.id} className="col">
          <AppCard
            title={curItem.title || curItem.name}
            originalTitle={curItem.original_title || curItem.name}
            lang={curItem.original_language}
            vote={curItem.vote_average}
            image={curItem.poster_path || 'images/flags/placeholder.png'}
            overview={curItem.overview}
          />
          </div>
        )}
        </div>
      </section>
    </main>
  )
}

export default AppMoviesAndSeries