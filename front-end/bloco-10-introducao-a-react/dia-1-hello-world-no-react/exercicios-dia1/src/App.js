import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

function App() {
  return (
    <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
   
  );
}

export default App;
