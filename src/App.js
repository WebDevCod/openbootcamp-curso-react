import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <Greeting name='Pablo'></Greeting>  */}
      {/* <GreetingF name='Pablo'></GreetingF> */}

      {/* Componente de listado de tareas */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <Ejemplo1 /> */}
      {/* <Ejemplo2 /> */}
      {/* <MiComponenteConContexto/> */}
      {/* <Ejemplo4 nombre='Pablo'>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
      {/* <GreetingStyled name="Pablo" /> */}
      {/* </header> */}
      <TaskListComponent />
      {/* <Father /> */}
    </div>
  );
}

export default App;
