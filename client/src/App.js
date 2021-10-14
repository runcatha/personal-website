import { Route } from 'react-router';
import './App.css';
import Footer from './screens/Footer/Footer'
import Home from './screens/Home/Home'

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
          <Home />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
