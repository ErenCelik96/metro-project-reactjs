import './App.css';
import Button from "@material-ui/core/Button";
import Start from './components/Start';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/form" style={{ textDecoration: 'none' }}>
        <Button id="start" variant="contained" color="secondary">
          Başlamak için buraya tıklayın!
        </Button>
        </Link>
      </nav>
      <Switch>
          <Route path="/form" component={Form} />
          <Route exact path="/istanbul_metro_ReactJs" component={Start} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
