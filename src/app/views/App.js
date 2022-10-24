import React, { Fragment, useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; // React-Router-Dom V6 no V5
import { CartPage } from './Cart';
import { Navbar } from "../components";
import '../styles/App.css';
import { list } from '../data';
import Home from './Home'
import { useSelector, useDispatch } from 'react-redux'
import { updateCart } from "../lib/slices/onlineStoreSlice";

function App() {

  // const cart = useSelector((state) => state.cart.items)

  // use dispatch
  const dispatch = useDispatch()





  const [category, setCategory] = useState(0) // id category
  const [isFiltering, setFiltering] = useState(false) // si le filtre est activé
  const [filtered, setFiltered] = useState(false) // les données filtrer

  const loadCategory = (i) => { setCategory(i) } // modifier la category des articles 

  // functions pour filtrer les données 
  const filterResults = input => {
    let fullList = list.flat()

    let result = fullList.filter(item => {
      const name = item.name.toLowerCase()
      const term = input.toLowerCase()
      return name.indexOf(term) > -1
    })
    setFiltered(result)
  }

  useEffect(() => {

  })

  

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar filter={filterResults} setFiltering={setFiltering} />
  
        {/* Routes */}
        <Routes>
          <Route path="/" element={
            <Home
              category={category}
              _category={list[category]}
              isFiltering={isFiltering}
              filtered={filtered}
              loadCategory={loadCategory}
            ></Home>
          } />

          <Route path="/cart" element={<CartPage />} />

        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;

// sm cible tablette et écrans plus large  
