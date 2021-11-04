import React, { useEffect, useState } from "react";
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

  const [hideButton, setHideButton] = useState(false);

  function handleChange(){
    setHideButton(true);
  }

  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/form" style={{ textDecoration: 'none' }}>
        <Button id="start" variant="contained" color="secondary" hidden={hideButton} onClick={()=>handleChange()}>
          Sorgu sayfası
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
