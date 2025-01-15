import flagLang from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

function AppCard({ title, originalTitle, lang, vote, image, overview }) {

    const flagPath = flagLang[lang] || 'images/flags/placeholder.png';
    const TmdbUrl = "https://image.tmdb.org/t/p/w342";

    function starsVote() {
        const stars = [];
        const roundedVote = Math.ceil(vote / 2)
        for (let i = 0; i < 5; i++) {
            stars.push(roundedVote > i ? faSolidStar : faRegularStar);
        }
        return stars.map((star, i) => (
            <FontAwesomeIcon key={i} icon={star} className="star" />
        ));
    }


    return (
        <>
            <div className="card">

                <div className="card-img">
                    <img src={`${TmdbUrl}${image}`} alt="" />
                </div>

                <div className="d-none card-body">
                    <h4>Titolo: {title}</h4>
                    <h4>Titolo originale: {originalTitle}</h4>
                    <img className="flag" src={flagPath} alt="" />
                    <p>Voto: {starsVote()}</p>
                    <p> Overview:{overview}</p>
                </div>

            </div>
        </>
    )

}

export default AppCard;