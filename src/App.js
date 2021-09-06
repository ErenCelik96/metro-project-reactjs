import './App.css';
import Button from "@material-ui/core/Button";
import Start from './components/Start';

function App() {
  return (
    <div className="App">
      <nav>
        <Button id="start" variant="contained" color="secondary">
          Başlamak için tıklayın!
        </Button>
      </nav>
      <Start/>
    </div>
  );
}

export default App;
