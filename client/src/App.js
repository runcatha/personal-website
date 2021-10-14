import { Route } from 'react-router';
import './App.css';
import Footer from './screens/Footer/Footer'
import Home from './screens/Home/Home'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/'>
          <Home />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
