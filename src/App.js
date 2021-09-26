import "./styles/index.css";
import { BrowserRouter as Router, Switch, Route  , Redirect} from "react-router-dom";
import { Home } from "./pages";




function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/404' component={Home} />
          <Redirect from='*' to='/404' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
