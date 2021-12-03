//import TodoList from "./TodoList";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Personal</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="intentions">Intentions</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <TodoContainer tableName="Personal" />
        </Route>
        <Route path="/work">
          <TodoContainer tableName="Work" />
        </Route>
        <Route path="/intentions">
          <TodoContainer tableName="Intentions" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
