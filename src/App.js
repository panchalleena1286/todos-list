import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import  {Todos}  from './MyComponents/Todos';
import  {TodoItem}  from './MyComponents/TodoItem';
import  {Footer}  from './MyComponents/Footer';

function App() {
  let name = 254;
  return (
    <>
      <Header/>
      <TodoItem/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
