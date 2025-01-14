 import flagLang from "../../data";
 
 function AppCard({title, originalTitle, lang, vote}) {
    const flagPath = flagLang[lang] || 'images/flags/placeholder.png';

    return(
        <>
        <div>
            <h3>Titolo: {title}</h3>
            <h4>Titolo originale: {originalTitle}</h4>
            <img className="flag" src={flagPath} alt="" />
            <p>Voto: {Math.ceil(vote)}</p>
        </div>
        
        </>
    )
    
 }

 export default AppCard;