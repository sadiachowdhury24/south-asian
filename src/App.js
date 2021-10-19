
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import Diary from './pages/Diary';
import Awareness from './pages/Awareness';
import Search from './pages/Search';
// import Footer from "./pages/Home/footer";

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/quotes" exact component={Quotes}/>
        <Route path="/diary" exact component={Diary}/>
        <Route path="/awareness" exact component={Awareness}/>
        <Route path="/find-therapists" exact component={Search}/>

      </Switch>
      {/* <Footer /> */}
    </Router>
   
    </>
  );
}

export default App;
