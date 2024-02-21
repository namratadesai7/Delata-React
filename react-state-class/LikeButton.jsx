import {useState, userState} from "react";

export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);
    let[click, setClicks]= useState(0);
    let toggleLike =() => {
        // console.log("we are going tpp toggle")};\
        setIsLiked(!isLiked);
        setClicks(click+1);
    };
    let likeStyle ={
      color:"red"
    };
   return(
    <div>
        <p>Clicks={click}</p>
        <p onClick={toggleLike}>
            {isLiked ? ( <i className="fa-solid fa-heart" style={likeStyle}>    </i>)  :(
            <i className="fa-regular fa-heart"> </i>
            )}
           </p>
    </div>
   ) 
}