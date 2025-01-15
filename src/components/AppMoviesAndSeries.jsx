import AppCard from "./AppCard"

function AppMoviesAndSeries({ post, sectionTitle }) {
  return (
    <main>
      <section>
        <h2>{sectionTitle}</h2>
        {post.map((curItem) =>
          <AppCard
            key={curItem.id}
            title={curItem.title || curItem.name}
            originalTitle={curItem.original_title || curItem.name}
            lang={curItem.original_language}
            vote={curItem.vote_average}
            image={curItem.poster_path}
          />
        )}
      </section>
    </main>
  )
}

export default AppMoviesAndSeries