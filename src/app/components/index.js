import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
      <a href="" className="navbar-brand crimson">
        <i className="fas fa-shopping-cart"></i> Mes Courses en Ligne
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ml-auto cart">
          <div>
            <form className="search form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"/>
            </form>
          </div>
          <div className="menu-right">
            {/* cart */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  );
};

export const Card = (props) => {
  const { fruit } = props;
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={
            process.env.PUBLIC_URL + `/assets/${fruit.category}/${fruit.image}`
          }
          alt="citron"
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{fruit.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>€{fruit.price}/{fruit.unit}</p>
              <button className="btn btn-warning btn-sm">view product</button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
    </div>
  );
};


export const Modal = () => {
  return (
    <div
      className="modal fade "
      id=""
      data-backdrop="static"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Citrons</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  width="170"
                  height="170"
                  src={
                    process.env.PUBLIC_URL + 
                    `/assets/0/citron.png`
                  }
                  alt="Citron"
                />
              </div>

              <div className="col-sm">
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h3 className="price">€1.99</h3> <br />
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-secondary">
                    -
                  </button>
                  <span className="btn btn-light qty">1</span>
                  <button
                    type="button"
                    className="btn btn-secondary">
                    +
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-dismiss="modal"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export const List = props => {
  const { data } = props; 
  const fruits = data[0]
  console.log(fruits)
  return (
    <div className="col-sm">
      <div className="row">
        {fruits.map((fruit) => <Card fruit={fruit} />)}
      </div>
    </div>
  );
};

//  process.env.PUBLIC_URL : préciser la destination il trouve ce qui corespond au fichier public pour l'inject et présenter au navigateur   
// il y a deux environnements : 
// - un qui corespond au développement et au développement qui est src
// - un autre pour le public avec le chemin qu'on mets en place 
