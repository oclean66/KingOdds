import React from 'react'
import {
    BrowserRouter as Router, Link, Redirect,
    Route,Switch 
} from 'react-router-dom'

import Sidebar from "./components/sidebar";
import Affil from "./components/affil";
import Odds from "./components/odds";
import Match from "./components/match"; 



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
            date: 0
        }
    }
   
    componentDidMount() {          

    }
    render() {
        return (
            <Router>
                <div className="wrapper container" style={{ paddingTop: 160, paddingBottom: 15 }}>
                    <div
                        id="logo-banner"
                        style={{
                            position: "absolute",
                            margin: 0,
                            padding: 0,
                            top: 0,
                            left: 0,
                            borderRadius:0,
                            height: 160,
                            width: "100%"
                        }}
                        className="col-sm-12"
                    >
                        {/* <img src="img/logo-big.png" className="img-fluid" alt="Responsive image"  /> */}
                        {/* <img src="img/logo-small.png" className="img-fluid" alt="Responsive image" /> */}
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
                                style={{ height: "48px", fontSize: 12, marginLeft:-10,borderRadius:0,backgroundColor:"white",boxShadow:"2px 0px 0px rgba(0, 0, 0, 0.45)" }}
                            >
                                <i className="sicon-live-betting"> </i>
                                {/* {this.state.hours + ":" + this.state.minutes + "." + this.state.seconds} */}
                            </button>
                            <div className="navbar-toggler" style={{color:"white",border:0}}>MENU</div>
                            <button className=" btn btn-flat bg-light navbar-toggler"  style={{ height: "48px",borderRadius:0, color:"black", marginRight:-10,fontSize: 12,backgroundColor:"white",boxShadow:"2px 0px 0px rgba(0, 0, 0, 0.45)" }} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-ellipsis-v"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav mr-auto">
                                   
                                    <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
                                    <OldSchoolMenuLink activeOnlyWhenExact={true} to="/odds" label="Odds Comparison" />
                                   
                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="">LiveScores</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Bookmakers
                                            </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <Link className="dropdown-item" to="">Action</Link>
                                            <Link className="dropdown-item" to="">Another action</Link>
                                            <Link className="dropdown-item" to="">Something else here</Link>
                                        </div>
                                    </li> */}
                                </ul>
                                <button id="cdate" className="btn btn-primary"> 0</button>
                                
                            </div>
                        </nav>

                        <Switch>
                            <Route exact path="/" component={Affil} />
                            {/* <Route path="/odds" component={Odds} something="foo" /> */}
                            <Route path="/odds/:sport/:group/:league" render={(props) => <Odds {...props} date={this.state.dateUTC} />} />
                            <Route path="/match/:sport/:group/:league/:id" component={Match} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </div>
            </Router >
        )
    }

}
export default App