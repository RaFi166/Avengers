import { Route, Switch, BrowserRouter } from "react-router-dom";
import About from "./Components/About/About";
import AddAvengers from "./Components/AddAvengers/AddAvengers";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import SingleBlogDetails from "./Components/SingleBlogDetails/SingleBlogDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/blog/:id">
            <SingleBlogDetails></SingleBlogDetails>
          </Route>
          <Route path="/create-avengers">
            <AddAvengers></AddAvengers>
          </Route>
          <Route path="/login-signup">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
