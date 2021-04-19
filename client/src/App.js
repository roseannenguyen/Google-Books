import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Book from "./pages/Books"
import Navbar from "./components/Navbar/Navbar.js";
// import Search from "./pages/Search";
// import Saved from "./pages/Saved";
import Wrapper from "./components/Wrapper";

import "./App.css";

function App() {
  return (
    <Router>
<Wrapper>
 
<Navbar />
        <Book/>
</Wrapper>


    </Router>
  );
}


export default App;
