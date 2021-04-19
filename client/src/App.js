import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Book from "./pages/Books"
import Navbar from "./components/Navbar/Navbar.js";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Wrapper from "./components/Wrapper";

import "./App.css";

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
 <Switch>
          <Route exact path={["/", "/home"]}>
            <Book />
            </Route>
          <Route exact path={["/search"]}>
            <Search />
          </Route>
          <Route exact path={["/saved"]}>
            <Saved />
          </Route>

 </Switch>

        
</Wrapper>


    </Router>
  );
}


export default App;
