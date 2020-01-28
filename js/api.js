
export class API{   
    constructor(artistName,songName){
        this.artistName = artistName;
        this.songName = songName;
    }

    async queryAPI(){
        const url = await fetch(`https://api.lyrics.ovh/v1/${this.artistName}/${this.songName}`)
        const lyric = await url.json()
    
        {
            return lyric  
        }
    }
}