import './App.css';
// import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header title="React App" text="This is a test" />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
