import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes/Routes";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {routes.map(route => <Route exact path={route.path} element={route.element} />)}
      </Routes>
    </Router>
  );

}

export default AppRouter;
