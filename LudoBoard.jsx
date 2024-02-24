import {useState, userState} from "react";

export default function LudoBoard(){
    let [moves,setMoves]= useState({blue:0,red:0,yellow:0,green:0});
   // let [count,setCount]= useState(0);

    let updateBlue=()=>{
       // moves.blue +=1;
        console.log('moves= ${moves.blue}');
        setMoves((preMoves) => {
            return{...preMoves,blue:preMoves.blue + 1};
     } );
    }
    let updateYellow=()=>{
        //moves.yellow +=1;
        console.log('moves= ${moves.yellow}');
        setMoves((preMoves) => {
            return{...preMoves,yellow:preMoves.yellow + 1};
     } );
    }
    let updateGreen=()=>{
       // moves.green +=1;
        console.log('moves= ${moves.green}');
        setMoves((preMoves) => {
            return{...preMoves,green:preMoves.green + 1};
     } );
    }
    let updateRed=()=>{
        //moves.red +=1;
        console.log('moves= ${moves.red}');
        setMoves((preMoves) => {
            return{...preMoves,red:preMoves.red + 1};
     } );
    }
    return(
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves= {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves={moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen} >+1</button>
                <p>Red moves={moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}