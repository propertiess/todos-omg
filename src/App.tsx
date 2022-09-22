import classes from "./App.module.scss";
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes";

const App = () => {
  return (
    <>
      <Routes>
        {routes.map(route => <Route {...route}/>)}
      </Routes>
    </>
  );
};

export default App;
