
import './App.css';
import Header from './MyComponents/Header';
import  {Todos}  from './MyComponents/Todos';
import  {TodoItem}  from './MyComponents/TodoItem';
import  {Footer}  from './MyComponents/Footer';

function App() {
  let todos = [
    {
      sno: 1,
      title: "go to the market",
      desc: "you need to go to the market to get this job done"
    }
  ]
  return (
    <>
      <Header title="myList"  />
      <TodoItem/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
