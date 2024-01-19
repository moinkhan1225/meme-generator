import React from "react"
//import Memedata from "../Memedata";

export default function Main(){
    
  //const [imageUrl,setImageUrl]= React.useState("https://upload.wikimedia.org/wikipedia/en/c/cb/Monkey_D_Luffy.png")
const[meme,setMeme]=React.useState(
    {
        topText:"",
        bottomText:"",
        randomImage:"https://wallpaperaccess.com/full/3567441.jpg"
    }
);
const [allmemeImages,setAllMemeImages]=React.useState()
 
  React.useEffect(()=>{
    console.log("useEffect Rendering....")
      fetch("https://api.imgflip.com/get_memes")
      .then(res=>res.json())
      .then(
          memesData=>{
              setAllMemeImages(memesData)
          }
      )
  },[])

  function handleChange(event){
      setMeme(prevTxt=>{
          const{name,value}=event.target        //desconstructing event handler
          return{
              ...prevTxt,                       //so that previous state remains unChanged
              [name]:value
          }
      })
  }
  
    return(
        
      <>
      
        <div className="main">
            <div className="main-input">

                <input 
                type="text"
                placeholder="Enter the first phrase" 
                className="input-1"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                
                />

                <input 
                type="text"
                placeholder="Enter the second phrase"
                className="input-2"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                
                />
            </div>
            <button className="main-btn" onClick={GetImageMeme}>Get a new meme image</button>
           
            

        </div>
        <img src={meme.randomImage} alt="memephoto" width="370px" height="225px" className="meme-image"/>
       
       <div className="meme">
        <h1 className="meme--text top">{meme.topText}</h1>
        <h1 className="meme--text bottom">{meme.bottomText}</h1>
        </div>
        <div className="footer">
    Meme generator
    © 2024 Moin Khan
  </div>
       </>
        
    )
    function GetImageMeme(){
        const arrMemes=allmemeImages.data.memes;
        const randomMeme=Math.floor(Math.random()*arrMemes.length)
        const memeUrl=arrMemes[randomMeme].url;
        setMeme(prevImg=>({
            ...prevImg,
            randomImage:memeUrl

        }))
    }    
       
    }
    
    
  


                                                                                /*function greeting(name){
    
    const date=new Date();
    const hours=date.getHours();
    let timeOfDay;

    if(hours>12 && hours<=17)
        {
    
        {timeOfDay="GoodAfterNoon"}
    }
    if(hours>17 && hours<=20){
        {timeOfDay="GoodEvening"};
    }
     if(hours<=2 && hours>20)
    {
        {timeOfDay="GoodNight"};
    }
    else if(hours>4 && hours<=12)
    {
        {timeOfDay="GoodMorning"};
    }
    else{
        {timeOfDay="error"};
    }


    return(`Hello,${timeOfDay} ${name}`);
}
console.log(greeting("Jane"));  
<h1 onClick={handleClick}>{isGoingOut?"true":"false"}</h1>
const [count, setCount] = React.useState(0);
    // Similar to componentDidMount and componentDidUpdate:
    React.useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    
    });
    <div>
            <p>You clickeddd {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
           const [isGoingOut,setIsGoingOut]= React.useState(true)
  function handleClick(){
    setIsGoingOut(prevState=>!prevState)
  }
*/ 
