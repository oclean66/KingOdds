import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";

import Affil from "./components/affil";

class App extends Component {
  
  render() {
    return (
      <div className="wrapper container" style={{ paddingTop: 160, paddingBottom: 15 }}>
        <div
          id="logo-banner"
          style={{
            position: "absolute",
            margin: 0,
            padding: 0,
            top: 0,
            height: 160,
            width: "100%"
          }}
          className="col-sm-12"
        >
          {/* <img src="img/logo-big.png" className="img-fluid" alt="Responsive image"  /> */}
          {/* <img src="img/logo-small.png" className="img-fluid" alt="Responsive image" /> */}
        </div>
        <Sidebar />
        <div id="content" style={{ backgroundColor: "#e1f5fe" }}>

          <nav className="navbar navbar-expand-lg navbar-dark" style={{ padding: 0, backgroundColor: "rgb(0, 173, 238)", marginRight: 12 }}>
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-flat bg-white"
              style={{ height: "48px", fontSize: 12 }}
            >
              <i className="sicon-live-betting"> </i>
            </button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              MENU <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Odds Comparison</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">LiveScores</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Bookmakers        </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="">Action</a>
                    <a className="dropdown-item" href="">Another action</a>
                    <a className="dropdown-item" href="">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <div className="page-head" style={{ padding: 0 }}>
            <div className="bd-example">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="0"
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="1"
                    className=""
                  />
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="2"
                    className=""
                  />
                </ol>
                <div className="carousel-inner" style={{ height: 200 }}>
                  <div className="carousel-item active" style={{ height: 200 }}>
                    <img
                      className="d-block w-100"
                      data-src="holder.js/150x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide"
                      alt="First slide [800x400]"
                      src="img/img2.jpg"
                      data-holder-rendered="true"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h1
                        className="font-weight-bold"
                        style={{ textShadow: "2px 2px 4px #000000" }}
                      >
                        Welcome Rockstar Sport Betting
                      </h1>
                      <p style={{ textShadow: "2px 2px 4px #000000" }}>
                        All the online bookmakers you need right here in one
                        place. No bull, just sites.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item" style={{ height: 200 }}>
                    <img
                      className="d-block w-100"
                      data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide"
                      alt="Second slide [800x400]"
                      src="img/img3.jpg"
                      data-holder-rendered="true"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h1
                        className="font-weight-bold"
                        style={{ textShadow: "2px 2px 4px #000000" }}
                      >
                        No. 1 For Online Betting Sites
                      </h1>
                      <p style={{ textShadow: "2px 2px 4px #000000" }}>
                        No reviews to try and push you to an affiliates favoured
                        sites.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item" style={{ height: 200 }}>
                    <img
                      className="d-block w-100"
                      data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                      alt="Third slide [800x400]"
                      src="img/img1.jpg"
                      data-holder-rendered="true"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h1
                        className="font-weight-bold"
                        style={{ textShadow: "2px 2px 4px #000000" }}
                      >
                        Welcome Rockstar Sport Betting
                      </h1>
                      <p style={{ textShadow: "2px 2px 4px #000000" }}>
                        Just links and they are all here.
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
             
          <div className="line" />
       
          <div className="row">
          <Affil/>            
          </div>



        </div>
      </div>
    );
  }
}

export default App;
