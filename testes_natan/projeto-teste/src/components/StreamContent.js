export default function StreamContent() {
    function verifyGenStream() {
        let bgColor;
        if(this.streamGen.toUpperCase().indexOf('GAMES') !== -1) {
            bgColor = "#632f53";

        } else {
            bgColor ="#0a6789";

        }
        return bgColor;
    }

    const Streamers = [{id: 1,
                        urlImg: "https://i.imgur.com/2BUF1M4.jpeg",
                        userName: "Alanzoka",
                        siteStream: "Twitch.tv",
                        streamGen: "Games",
                        bgColor: verifyGenStream
                       },
                       {id: 2,
                        urlImg: "https://i.imgur.com/mbGPOcV.jpeg",
                        userName: "Cellbit",
                        siteStream: "Twitch.tv",
                        streamGen: "Games/Outros",
                        bgColor: verifyGenStream
                       },
                       {id: 3,
                        urlImg: "https://i.imgur.com/Vj0db2L.jpeg",
                        userName: "Felps",
                        siteStream: "Twitch.tv",
                        streamGen: "TUDO",
                        bgColor: verifyGenStream
                    }];
    
    
    
    return(
        Streamers.map(streamer => {
            return(
                <section className="streamCont" style={{backgroundColor: streamer.bgColor()}} key={streamer.id}>
                    <h1 className="stmCont__userName">{streamer.userName}</h1>
                    <img src={streamer.urlImg} alt={streamer.userName} />
                    <p className="stmCont__streamLink">
                        Canal: 
                        <a href={"https://"+streamer.siteStream+"/"+streamer.userName}>
                            {streamer.siteStream}/{streamer.userName}
                        </a>
                    </p>
                    <p className="stmCont__streamGen">Tipo de Conteúdo: {streamer.streamGen}</p>
                </section>
            )
            
        })
        
    )
}