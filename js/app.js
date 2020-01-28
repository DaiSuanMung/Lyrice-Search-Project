import * as UI from "./ui.js";
import {API} from "./api.js";


UI.searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const artistName = UI.artistInput.value;
    const songName = UI.songInput.value;

    if(artistName===""||songName===""){
        UI.messageDiv.innerHTML = "You have to write something"
        UI.messageDiv.classList.add("error");

        setTimeout(()=>{
            UI.messageDiv.innerHTML = ""
            UI.messageDiv.classList.remove("error");
        },3000)
       
    }else{
        const api = new API(artistName,songName)
       api.queryAPI()
        .then(data=>{
            if(data.lyrics){
                UI.resultDiv.innerHTML = data.lyrics;
                
            }else{
                UI.messageDiv.innerHTML ="no Song found";
                UI.messageDiv.classList.add("error")
                UI.searchForm.reset()

                setTimeout(()=>{
                    UI.messageDiv.innerHTML ="";
                    UI.messageDiv.classList.remove("error")
                },3000)
            }
            
        })
        .catch(error=>console.log(error))
    }
})