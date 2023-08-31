import React from "react"
import data from "../memeData.js"
import { RANDOM } from "mysql/lib/PoolSelector.js"

export default function Meme(props){
    var memes = data.data.memes
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        image: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState(data)

function writeURL(){
    var memesArray = allMemeImages.data.memes
    var randomImageUrl = memesArray[
                    Math.floor(
                            Math.random()*memesArray.length
                            )]
                            .url

    setMeme(prevMeme => {
        return {
            ...prevMeme,
            image: randomImageUrl
        }
    })
   }

   function handleChange(event){
    const {name, value} = event.target 
    console.log(name, value)
    console.log(meme)
    setMeme( prevMeme => {
        return {
            ...prevMeme,
            [name]: value
        }
    })
}
  
    return (
        <main>
            <div className="form">
                <input
                     type="text"
                     placeholder="Top text"
                     className="form--input"
                     name= "topText"
                     value= {meme.topText}
                     onChange={handleChange}
                     />
                <input
                     type="text"
                     placeholder="Bottom text"
                     className="form--input"
                     name= "bottomText"
                     value= {meme.bottomText}
                     onChange={handleChange}
                     />
                <button 
                    className="form--button"
                    onClick={writeURL} >Get a new meme image</button>
            </div>

            <div className="meme">
            <img src = {meme.image} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}