import flagLang from "../../data";

function AppCard({ title, originalTitle, lang, vote, image }) {

    const flagPath = flagLang[lang] || 'images/flags/placeholder.png';
    const TmdbUrl = "https://image.tmdb.org/t/p/w185";
    

    return (
        <>
            <div >
                <div>
                 <img src={`${TmdbUrl}${image}`} alt="" /> 
                </div>

                <div >
                    <h3>Titolo: {title}</h3>
                    <h4>Titolo originale: {originalTitle}</h4>
                    <img className="flag" src={flagPath} alt="" />
                    <p>Voto: {Math.ceil(vote / 2)}</p>
                </div>

            </div>

        </>
    )

}

export default AppCard;