import React, { Fragment } from "react";
import { Navbar, List } from "./components";
import './styles/App.css';
import { list } from './data';

const SideMenu = () => {
  const links = ["Légumes", "Fruits", "Epicerie", "Boissons"];
  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map(link => 
          <li>{link}</li>
        )}
      </ul>
    </div>
  );
}

function App() {
  return(
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <SideMenu />

          <div className="col-sm">
            <div className="row">
              <List data={list} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;

{
  /* sm cible tablette et écrans plus large  */
}
