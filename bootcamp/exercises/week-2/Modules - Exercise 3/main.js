const SongsManager = function () {
    const constStr = "https://www.youtube.com/watch?v="
    const songs={

    }
    
    const addSong = function(str,identifier){
        songs[str]=identifier.slice(32)
    }
    const getSong = function(str){
        console.log(constStr+songs[str])
    }
   
    return {
        addSong: addSong,
        getSong: getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ