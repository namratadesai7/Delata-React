function printHello(event){
    console.log("Hello!");
    console.log(event);
}

function printBye(){
    console.log("bye !");
}
function handleDblClick(){
    console.log("you double clicked")
}
export default function Button(){
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onMouseOver={printBye}>this parah is for event demo</p>
            <button onDoubleClick={handleDblClick}>double click me!</button>
        </div>
    )
}