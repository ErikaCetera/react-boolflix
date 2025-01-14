 function AppCard({title, originalTitle, lang, vote}) {
    return(
        <>
        <div>
            <h3>Titolo: {title}</h3>
            <h4>Titolo originale: {originalTitle}</h4>
            <p>Lingua: {lang}</p>
            <span>Voto: {vote}</span>
        </div>
        
        </>
    )
    
 }

 export default AppCard;