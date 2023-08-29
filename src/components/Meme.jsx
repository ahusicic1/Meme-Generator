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

    return (
        <main>
            <div className="form">
                <input
                     type="text"
                     placeholder="Top text"
                     className="form--input"/>
                <input
                     type="text"
                     placeholder="Bottom text"
                     className="form--input"/>
                <button 
                    className="form--button"
                    onClick={writeURL} >Get a new meme image</button>
            </div>
            <img src = {meme.image} className="meme--image" />
        </main>
    )
}