
import './App.css';
import Counter from './Counter';
import LikeButton from '../LikeButton';
import LudoBoard from './LudoBoard';
import TodoList from './TodoList';
import Lottery from './Lottery';
import { sum } from './helper';
import Form from './Form';
import CommentsForm  from './CommentsForm'; 
import Counter1 from './counter1';
import Joker from './joker';


function App() {

  // let winCondition=(ticket) =>{
  //   // return sum(ticket) === 15;
  //   // return ticket.every((num) => num === ticket[0]);
  //   return ticket[0] === 0;
  // };

  return (
    <>
    {/* <h1>States in React</h1> */}
    {/* <Counter /> */}
    {/* <LikeButton /> */}
    {/* < LudoBoard /> */}
    {/* <TodoList /> */}
    {/* <Lottery /> */}
        {/* function is passed as prop */}
    {/* <Lottery n={3}  winCondition={winCondition} />   */}
    {/* <Form /> */}
    {/* <CommentsForm /> */}
    {/* <Counter1 /> */}
    <Joker />

    </>
  )
}

export default App
