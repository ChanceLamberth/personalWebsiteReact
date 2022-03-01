
import './App.css';
import About from './components/About';
import Works from './components/Works';
import NavBar from './components/Nav';

function App() {
  return (
    <div style={{backgroundColor: "white"}}>
      <NavBar/>
      <About/>
      <Works/>
    </div>
  );
}

export default App;
