import React from 'react'
import {
    BrowserRouter as Router, Link, Redirect,
    Route, Switch
} from 'react-router-dom'


import Sidebar from "./components/sidebar";
import Affil from "./components/affil";
// import Odds from "./components/odds";
import Match from "./components/match";
import Sport from './components/sport';
import Bookmaker from './components/bookmaker';
// import Resultslive from './components/resultslive_asia';
import Resultslive from './components/resultslive';
import Search from './components/search';

import * as math from 'mathjs'
var Fraction = require('fraction.js')
const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (

    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
            <li className={match ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" to={to}>{label}</Link>
            </li>
        )}
    />
);


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            date: 0,
            format: "UK"
        }
        this.changeFormat = this.changeFormat.bind(this);
        this.format = this.format.bind(this);
    }

    componentDidMount() {
        let val = localStorage.getItem("format") ? localStorage.getItem("format") : "UK";
        this.setState({
            format: val
        })
    }
    changeFormat(event) {
        console.log(event.target.value)
        this.setState({ format: event.target.value});
        // if (this.state.format == "UK") {
        //     this.setState({ format: "US" });
        //     localStorage.setItem("format", "US")
        // }

        // if (this.state.format == "US") {
        //     this.setState({ format: "DEC" });
        //     localStorage.setItem("format", "DEC")
        // }
        // if (this.state.format == "DEC") {
        //     this.setState({ format: "UK" });
        //     localStorage.setItem("format", "UK")
        // }

    }
    format(value) {
        let into = parseFloat(value);
        let outo = 0;

        if (this.state.format == "US") {
            if (into >= 2) {
                outo = parseInt((into - 1) * 100);
            } else if (into < 2) {
                outo = parseInt((-100) / (into - 1));
            }
        }
        else
            if (this.state.format == "UK") {

                if (into > 0) {
                    var f = new Fraction((into-1));                
                    return (f.n+" / "+f.d+" ").toString()
                }
                else return 0



            }
            else
                if (this.state.format == "DEC") {
                    outo = value;
                }
        return outo;
    }
    render() {
        return (
            <Router>
                <div>
                    <div className="wrapper container" style={{ paddingTop: 160, paddingBottom: 15 }}>
                        <div
                            id="logo-banner"
                            style={{
                                position: "absolute",
                                margin: 0,
                                padding: 0,
                                top: 0,
                                left: 0,
                                borderRadius: 0,
                                height: 160,
                                width: "100%"
                            }}
                            className="col-sm-12"
                        >
                        </div>
                        <Sidebar />
                        <div id="content" style={{ backgroundColor: "#e1f5fe", width: "100%" }}>

                            <nav className="navbar navbar-expand-lg navbar-dark" style={{ marginBottom: 5, padding: "0 10px 0 10px", backgroundColor: "rgb(0, 173, 238)", boxShadow: "-1px -3px 4px 3px rgba(0, 0, 0, 0.1)"/* marginRight: 12*/ }}>
                                <button
                                    type="button"
                                    id="sidebarCollapse"
                                    aria-pressed="false"
                                    className="btn btn-flat bg-light"
                                    style={{ height: "48px", fontSize: 12, marginLeft: -10, borderRadius: 0, backgroundColor: "white", boxShadow: "2px 0px 0px rgba(0, 0, 0, 0.45)" }}
                                >
                                    <i className="sicon-live-betting"> </i>
                                    {/* {this.state.hours + ":" + this.state.minutes + "." + this.state.seconds} */}
                                </button>
                                <div className="navbar-toggler" style={{ color: "white", border: 0 }}>MENU</div>
                                <button className=" btn btn-flat bg-light navbar-toggler" style={{ height: "48px", borderRadius: 0, color: "black", marginRight: -10, fontSize: 12, backgroundColor: "white", boxShadow: "2px 0px 0px rgba(0, 0, 0, 0.45)" }} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="fas fa-ellipsis-v"></i>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav mr-auto">
                                        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Odds Comparison" />
                                        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/affiliate" label="Register with a Bookie" />
                                        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/resultslive" label="Live Scores" />
                                        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/bookmaker" label="Bookmaker" />
                                    </ul>
                                    <select className="custom-select custom-select-sm" style={{marginBottom:0, width:80}} value={this.state.format} onChange={this.changeFormat}>
                                        <option value="DEC">DEC</option>
                                        <option value="UK">UK</option>
                                        <option value="US">US</option>                                        
                                    </select>
                                    <button id="cdate" className="btn btn-primary"> 0 </button>
                                    {/* <button id="format" onClick={this.changeFormat} className="btn btn-dark">{this.state.format}</button> */}
                                </div>
                            </nav>

                            <Switch>
                                <Route exact path="/" render={(props) => <Sport {...props} format={this.format} />} />
                                <Route exact path="/affiliate" render={(props) => <Affil {...props} format={this.format} />} />
                                {/* <Route path="/affiliate" component={Affil} /> */}
                                <Route path="/match/:id" render={(props) => <Match {...props} format={this.format} />} />
                                <Route path="/bookmaker" component={Bookmaker} />
                                <Route path="/search/:id" render={(props) => <Search {...props} format={this.format} />} />
                                <Route path="/resultslive" component={Resultslive} />
                                <Redirect to="/" />
                            </Switch>
                        </div>
                        {/* <ins className="adsbygoogle" style={{display:"inline-block",width:"300px",height:"250px"}} data-ad-client="ca-pub-9811219830710276" data-ad-slot="2727562977" data-ad-format="auto"></ins> */}
                    </div>
                    <div id="myFooter" className="white-text" style={{ backgroundColor: "black" }}>
                        <div className="row" style={{ margin: 0, padding: 0, paddingTop: 15 }} >
                            <div className="col-sm-4 " style={{ color: "white" }}>
                                Other websites
                                <ul className="list-group list-group-flush" style={{ backgroundColor: "transparent" }}>
                                    <li className="list-group-item" style={{ backgroundColor: "transparent", padding: ".75px 16px" }}><a target="_blank" rel="noopener noreferrer" href="http://www.rockstarcricketlive.com/">Rockstar Cricket Live</a></li>
                                    <li className="list-group-item" style={{ backgroundColor: "transparent", padding: ".75px 16px" }}><a target="_blank" rel="noopener noreferrer" href="https://rockstarbetting.com">Rockstar Betting – The Blog</a></li>
                                    <li className="list-group-item" style={{ backgroundColor: "transparent", padding: ".75px 16px" }}><a target="_blank" rel="noopener noreferrer" href="https://www.rockstarsportsnews.com/">Rockstar Sports News</a></li>
                                    <li className="list-group-item" style={{ backgroundColor: "transparent", padding: ".75px 16px" }}><a target="_blank" rel="noopener noreferrer" href="https://rockstarlivescores.com/">Rockstar Live Scores </a></li>
                                </ul>

                            </div>

                            <div className="col-sm-4 text-center" >
                                <Link to="https://www.facebook.com/RockstarSports2/" className="btn btn-primary" style={{ marginRight: 5, fontSize: 30 }}><i className="fab fa-facebook-square"></i> </Link>
                                <Link to="https://twitter.com/RockstarSports2" className="btn btn-info" style={{ marginRight: 5, fontSize: 30 }}><i className="fab fa-twitter"></i></Link>
                                <a href="mailto:contact@rockstarsportsnetwork.com" className="btn btn-danger" style={{ marginRight: 5, fontSize: 30 }}><i className="fas fa-envelope"></i></a>

                                <Link to="https://www.linkedin.com/company/rockstar-sports-network/" className="btn btn-primary" style={{ marginRight: 5, fontSize: 30 }}><i className="fab fa-linkedin"></i> </Link>
                                <Link to="https://www.youtube.com/RockstarSports2/" className="btn" style={{ marginRight: 5, fontSize: 30, backgroundColor: "red", color: "white" }}><i className="fab fa-youtube"></i> </Link>
                                {/* <a href="http://www.livescore.in/" rel="noopener noreferrer" className="btn" title="Livescore.in" target="_blank" style={{width:250,height: 34, background: "url(http://www.livescore.in/res/_in/image/logo.gif) no-repeat"}}></a> */}
                            </div>
                            <div className="col-sm-4 right" ></div>
                            <div className="col-sm-12 text-center text-white " style={{ marginTop: 15, marginBottom: 15 }} > 2018 © Rockstarsportsnetwork.com - High Edge Sports Group Limited</div>
                            <div className="col-sm-4 " style={{ color: 'white' }}> <Link to="http://fb.com/oclean66" target="_blank">  <img alt="Logo" src="https://kingdeportes.com/geek/themes/materialcss/images/logo.png" width="30px" />Website design by oclean66 </Link></div>
                            <div className="col-sm-4 text-center" style={{ marginBottom: 15 }}><Link to="https://www.begambleaware.org/"><img height="100" alt="BeGambleAware.org" src="/img/191x85_BeGambleAware.svg"></img></Link></div>
                            <div className="col-sm-4 "></div>
                        </div>
                    </div>

                </div>
            </Router >
        )
    }

}
export default App