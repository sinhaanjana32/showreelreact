import "./App.css";
import Show from "./Show";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <Typography variant="h6" color="secondary" className="typo">
        ShowReel: Multiple graphs with same data
      </Typography>
      <Typography variant="body2" color="secondary" className="typo">
        D3 Observable code converted to use in React!
      </Typography>
      <Show />
    </div>
  );
}

export default App;
