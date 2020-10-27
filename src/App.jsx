import './App.css';
import { Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Header title="React App" text="This is a test" /> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
