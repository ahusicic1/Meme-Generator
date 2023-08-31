import React from "react"
import { RANDOM } from "mysql/lib/PoolSelector.js"

export default function Meme(props){
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        image: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

function writeURL(){
    var randomImageUrl = allMemes[
                    Math.floor(
                            Math.random()*allMemes.length
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