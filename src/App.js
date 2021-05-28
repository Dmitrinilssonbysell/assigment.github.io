import React, { useState } from "react"
import "./style/app.css"
import "./style/home.css"
import "./style/assigment.css"
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom"
import Home from "./component/Home"
import Assigment from "./component/Assigment"

const App = () => {

  var [menu, SetMenu] = useState("")

  const handleMenu = () => {
    if (menu === "") {
      SetMenu(
        <div className="nav-menu">
          <li><a href="/home">Home</a></li>
          <li><a href="/assigment">Assigment</a></li>
        </div>
      )
    } else {
      SetMenu("")
    }
  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <div id="app-main">
          <header>
            <nav>
              <div className="nav-open-cont">
                <h2
                  onClick={handleMenu} 
                  className="nav-title">
                  MENU
                </h2>
              </div>
              {menu}
            </nav>
          </header>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/assigment" component={Assigment}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;