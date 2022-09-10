import React, { Fragment, useState, useEffect} from "react";
import { Navbar, List } from "./components";
import './styles/App.css';
import { list } from './data';

const SideMenu = ({loadCategory, category}) => {
  const links = ["Fruits","Légumes", "Produits Frais", "Epicerie", "Boissons"];
  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index) => 
          <li className={index == category ? 'active' : undefined} key={index} onClick={() => loadCategory(index)}><a className="link">{link}</a></li>
        )}
      </ul>
    </div>
  );
}

function App() {
  const [category, setCategory] = useState(0)
  const [isFiltering, setFiltering] = useState(false)

  const loadCategory = (i) => { setCategory(i) }

  const filterResults = input => {
    let fullList = list.flat()

    let filtered = fullList.filter(item => {
      const name = item.name.toLowerCase()
      const term = input.toLowerCase()
      return name.indexOf(term) > -1
    })
    console.log(filtered)
  }

  useEffect(() => {
    
  })

  return(
    <Fragment>
      <Navbar filter={filterResults} />
      <div className="container">
        <div className="row">
          <SideMenu loadCategory={loadCategory} category={category} />
          <div className="col-sm">
            <div className="row">
              <List data={list[category]}  category={category} />
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
