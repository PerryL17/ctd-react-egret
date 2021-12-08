import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoContainer from "./components/TodoContainer";
import style from "./components/App.module.css";
import Scissor from "./components/Scissor";
import House from "./components/House";
import LightBulb from "./components/LightBulb";

function App() {
  return (
    <Router>
      <nav>
        <ul className={style.navBar}>
          <li className={style.navBox}>
            <Link className={style.noUnderline} to="/">
              <House />
              Personal
            </Link>
          </li>
          <li className={style.navBox}>
            <Link className={style.noUnderline} to="/work">
              <Scissor />
              Work
            </Link>
          </li>
          <li className={style.navBox}>
            <Link className={style.noUnderline} to="/intentions">
              <LightBulb />
              Intentions
            </Link>
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
