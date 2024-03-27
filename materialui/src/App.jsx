
import './App.css';
import Infobox from './infoBox';
import Serachbox from './searchboxui';

function App() {

let HandleClick= () =>{
  console.log("button was clicked");
}
  return (
    <>
    <Serachbox />
      <Infobox />
    </>
  )
}

export default App;
