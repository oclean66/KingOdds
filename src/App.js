import React from 'react'
import {
    BrowserRouter as Router, Link, Redirect,
    Route,Switch 
} from 'react-router-dom'

import Sidebar from "./components/sidebar";
import Affil from "./components/affil";
import Odds from "./components/odds";
import Match from "./components/match"; 

// import "./App.css";

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
const currentdate = new Date();

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
    setTime() {
        let utcOffset = 0;
        var hours = currentdate.getUTCHours() + parseInt(utcOffset,10);

        // correct for number over 24, and negatives
        if (hours >= 24) { hours -= 24; }
        if (hours < 0) { hours += 12; }

        // add leading zero, first convert hours to string
        hours = hours + "";
        if (hours.length === 1) { hours = "0" + hours; }

        // minutes are the same on every time zone
        var minutes = currentdate.getUTCMinutes();

        // add leading zero, first convert hours to string
        minutes = minutes + "";
        if (minutes.length === 1) { minutes = "0" + minutes; }

        var seconds = currentdate.getUTCSeconds();
        seconds = seconds + "";
        if (seconds.length === 1) { seconds = "0" + seconds; }

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dd = currentdate.getDate() + 1;
        dd = dd < 10 ? '0' + dd : dd;
        var today = months[currentdate.getMonth() - 1] + " " + dd + ", " + currentdate.getFullYear();
        this.setState({
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            date: today,
           
        });

    }
    componentDidMount() {
      
        var mm = currentdate.getMonth() + 1; //January is 0!
        mm = mm < 10 ? '0' + mm : mm;

        var dd = currentdate.getDate();
        dd = dd < 10 ? '0' + dd : dd;

        var todayUTM = currentdate.getFullYear() + "" + mm + "" + dd;


        this.setState({ dateUTC: todayUTM })
        setInterval(function () {
            this.setTime();
        }.bind(this), 1000);

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

                        <nav className="navbar navbar-expand-lg navbar-dark" style={{ padding: 0, backgroundColor: "rgb(0, 173, 238)", marginRight: 12 }}>
                            <button
                                type="button"
                                id="sidebarCollapse"
                                className="btn btn-flat bg-white"
                                style={{ height: "48px", fontSize: 12 }}
                            >
                                <i className="sicon-live-betting"> </i> {this.state.hours + ":" + this.state.minutes + "." + this.state.seconds}
                            </button>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                MENU <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav mr-auto">
                                   
                                    <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
                                    <OldSchoolMenuLink activeOnlyWhenExact={true} to="/odds" label="Odds Comparison" />
                                   
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
                                <button type="button" className="btn btn-primary" style={{ marginRight: 10 }}>  {this.state.date}</button>
                                {/* <span className="navbar-text"> </span> */}
                            </div>
                        </nav>

                        <Switch>
                            <Route exact path="/" component={Affil} />
                            {/* <Route path="/odds" component={Odds} something="foo" /> */}
                            <Route path="/odds" render={(props) => <Odds {...props} date={this.state.dateUTC} />} />
                            <Route path="/match/:id" render={(props) => <Match {...props} date={this.state.dateUTC} />} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </div>
            </Router >
        )
    }

}
export default App