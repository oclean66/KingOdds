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
// import Results from './components/results';
import Resultslive from './components/resultsliveAsia';
import Search from './components/search';






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
// var currentdate = new Date();

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            date: 0,
            format: "uk"
        }
        this.changeFormat = this.changeFormat.bind(this);
    }

    componentDidMount() {

    }
    changeFormat(event) {
        console.log(event)
        // strings.setLanguage('it');
        this.setState({ format: "us" });
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

                            <nav className="navbar navbar-expand-lg navbar-dark" style={{ padding: "0 10px 0 10px", backgroundColor: "rgb(0, 173, 238)",/* marginRight: 12*/ }}>

                                {/* <Link to="#" class="btn btn-light btn-sm active">Primary link</Link> */}
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
                                        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
                                        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/sports" label="Odds Comparison" />
                                        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/resultslive" label="Live Scores" />
                                        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/bookmaker" label="Bookmaker" />
                                    </ul>
                                    <select className="custom-select custom-select-sm" style={{marginBottom:0, width:80}} value={this.state.format} onChange={this.changeFormat}>
                                        <option value="uk">UK</option>
                                        <option value="us">USA</option>                                        
                                    </select>
                                    <button id="cdate" className="btn btn-primary"> 0 </button>
                                </div>
                            </nav>

                            <Switch>
                                <Route exact path="/" component={Affil} />
                                {/* <Route path="/odds" component={Odds} something="foo" /> */}
                                {/* <Route path="/odds/:sport/:group/:league" render={(props) => <Odds {...props} date={this.state.dateUTC} />} /> */}
                                <Route path="/match/:id" component={Match} />
                                {/* <Route path="/match/:sport/:group/:league/:id" component={Match} /> */}
                                <Route path="/sports" render={(props) => <Sport {...props} format={this.state.format} />} />
                                <Route path="/bookmaker" component={Bookmaker} />
                                <Route path="/search/:id" component={Search} />
                                {/* <Route path="/results/:id?" component={Results} /> */}
                                <Route path="/resultslive" component={Resultslive} />
                                {/* <Route path="/resultslive/:id" component={Resultslive} /> */}
                                <Redirect to="/" />
                            </Switch>
                        </div>
                        {/* <ins className="adsbygoogle" style={{display:"inline-block",width:"300px",height:"250px"}} data-ad-client="ca-pub-9811219830710276" data-ad-slot="2727562977" data-ad-format="auto"></ins> */}
                    </div>
                    <div id="myFooter" className="white-text" style={{ backgroundColor: "black" }}>
                        <div className="row" style={{ margin: 0, padding: 0, paddingTop: 15 }} >
                            <div className="col-sm-4 "></div>

                            <div className="col-sm-4 text-center" >
                                <Link to="https://www.facebook.com/RockstarSports2/" className="btn btn-primary" style={{ marginRight: 5, fontSize: 30 }}><i className="fab fa-facebook-square"></i> </Link>
                                <Link to="https://twitter.com/RockstarSports2" className="btn btn-info" style={{ marginRight: 5, fontSize: 30 }}><i className="fab fa-twitter"></i></Link>
                                <a href="mailto:contact@rockstarsportsbook.com" className="btn btn-danger" style={{ marginRight: 5, fontSize: 30 }}><i className="fas fa-envelope"></i></a>
                                {/* <a href="http://www.livescore.in/" rel="noopener noreferrer" className="btn" title="Livescore.in" target="_blank" style={{width:250,height: 34, background: "url(http://www.livescore.in/res/_in/image/logo.gif) no-repeat"}}></a> */}
                            </div>
                            <div className="col-sm-4 "></div>
                            <div className="col-sm-12 text-center text-white " style={{ marginTop: 15, marginBottom: 15 }} > 2018 © Rockstarsportstats.com - Part of the Rockstart Sports Network Limited</div>
                            <div className="col-sm-4 "></div>
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