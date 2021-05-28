
import './App.css';
import Comentario from './components/Comentario'

function App() {
  return (
    <div className="App">
      
      <h1>Meu Projeto </h1>  
        <Comentario nome='Calebe' email='calebetadeu@gmail.com' data={new Date(2020,3,190)} >
              Ola Joao tudo
          </Comentario>
        <Comentario nome='Josue' email='josuetadeu@gmail.com' data={new Date(2020,4,25)}>Mt legal </Comentario>
        <Comentario  nome='sara' email='sara@gmail.com'data={new Date(2020,5,26)} >Demaisss </Comentario>
      
    </div>
  );
}

export default App;
