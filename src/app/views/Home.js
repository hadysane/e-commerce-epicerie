import React from 'react'
import { List } from "../components";

const SideMenu = ({ loadCategory, category }) => {
    const links = ["Fruits", "Légumes", "Produits Frais", "Epicerie", "Boissons"]; // les liens 
    return (
        <div className="col-sm-2 sidebar">
            <ul>
                {links.map((link, index) =>
                    <li className={index === category ? 'active' : undefined} key={index} onClick={() => loadCategory(index)}><p className="link">{link}</p></li>
                )}
            </ul>
        </div>
    );
}

const Home = ({ loadCategory, isFiltering, filtered, _category, updateCart })=>{
    return (<div className="container">
        <div className="row">
            <SideMenu loadCategory={loadCategory} />
            <div className="col-sm">
                <div className="row">
                    <List data={isFiltering ? filtered : _category} updateCart={updateCart} />
                </div>
            </div>
        </div>
    </div>);
}
export default Home