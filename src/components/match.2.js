import React from "react";
import firebase from '../fire';
import { Link } from 'react-router-dom';


// import { Link } from 'react-router-dom';
// const match = firebase.database().ref('groups/'+"20180426");
let detail;
let detailRef, oddsRef;
class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {
                data: {}
            }
        }
    }
    componentWillUnmount() {
        // detailRef.off();
        // oddsRef.off();
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        if (!id) return;
        let data={};
        detail = this.state.detail;
        detailRef = firebase.database().ref('matches/' + id);
        detailRef.on("value", snapshot => {
            detail = snapshot.val();
            oddsRef = firebase.database().ref('odds/' + id);
            if (detail) oddsRef.on("value", snapshot => {
                // detail.data = snapshot.val();
                
                snapshot.forEach(i=>{
                //    data[] 
                console.log(i.key) //clave del logro
                console.log(i.val()); //valores
                let n = Object.keys(i.val())
                let name =i.key;
                n.map(z=>{
                    // console.log(z)//clave de bookmaker
                    // console.log(i.val()[z].activeType) //nombre logro
                    name = i.val()[z].activeType+" "+i.val()[z].activeTime;
                    return null;
                })

                data[name]=i.val();
                })
                detail.data = data;

                // console.log(Object.keys(snapshot.val()));
                this.setState({
                    detail: detail
                });
            });
        });
    }
    render() {

        let e = this.state.detail ? this.state.detail : { time: 0, id: 0 };
        // console.log(e);
        let timess = new Date(e.timestamp * 1000);
        // let utcOffset = 0;
        var hours = timess.getHours();
        // correct for number over 24, and negatives
        if (hours >= 24) { hours -= 24; }
        if (hours < 0) { hours += 12; }

        // add leading zero, first convert hours to string
        hours = hours + "";
        if (hours.length === 1) { hours = "0" + hours; }

        // minutes are the same on every time zone
        var minutes = timess.getMinutes();

        // add leading zero, first convert hours to string
        minutes = minutes + "";
        if (minutes.length === 1) { minutes = "0" + minutes; }


        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dd = timess.getDate();
        dd = dd < 10 ? '0' + dd : dd;
        var today = months[timess.getMonth()] + " " + dd + ", " + timess.getFullYear();
        timess = today;
        // console.log(timess);
        let list = e.data ? Object.keys(e.data).map(function (key) {
            let i = key.replace(/\s|&/g, "");
            return (
                <option key={i} value={i}>
                    {key}
                </option>
                // <li key={i} className="nav-item border-primary" style={{ border: "solid 1px" }}>
                //     <Link className="nav-link " id={i + "-tab"} data-toggle="tab" to={"#" + i} role="tab" aria-controls={i} aria-selected="true">{key}</Link>
                // </li>
            )

        }) : null;

        if (list === null) {
            list = <div className="alert alert-primary" role="alert">
                No Odds Available!
                    </div>;
        } else {
            list = <select id='mySelect' className="form-control">
                <option data-icon="fa fa-clock" value="0">
                    Select a market
            </option>
                {list}
            </select>
        }

        let tabs = e.data ? Object.keys(e.data).map(function (key) {
            let i = key.replace(/\s|&/g, "");
            return (
                <li key={i} className="nav-item border-primary" style={{ border: "solid 1px" }}>
                    <Link className="nav-link " id={i + "-tab"} data-toggle="tab" to={"#" + i} role="tab" aria-controls={i} aria-selected="true">{key}</Link>
                </li>)

        }) : <li className="nav-item border-primary" style={{ border: "solid 1px" }}>
                <Link className="nav-link " data-toggle="tab" to={"#b"} role="tab" aria-selected="true">No data found!</Link>
            </li>;

        let tabsConten = e.data ? Object.keys(e.data).map(function (key) {
            let i = key.replace(/\s|&/g, "");
            let table = Object.keys(e.data[key]).map(function (kei) {
                // console.log(e.data[key][kei].bookId);
                if (e.data[key][kei].bookId)
                    return (
                        <tr key={kei}>
                            <td><span className={"blogos l" + e.data[key][kei].bookId}></span><strong> {e.data[key][kei].name}</strong></td>
                            <td className="text-center">{e.data[key][kei].o1}</td>
                            <td className="text-center">{e.data[key][kei].o2}</td>
                            <td className="text-center">{e.data[key][kei].o3}</td>
                        </tr>
                    )
                return null;
            });
            // console.log(table);

            return (
                <div key={i} className="tab-pane fade" id={i} role="tabpanel" aria-labelledby={i + "-tab"}>
                    <div className="card">
                        <div className="card-body">
                            {/* <h5>{key}</h5> */}
                            <table className="table table-sm table-bordered bg-light">
                                <thead>
                                    <tr className="table-primary">
                                        <td> <strong>Bookmakers</strong></td>
                                        <td className="text-center"> <strong>1</strong> </td>
                                        <td className="text-center"> <strong>X</strong> </td>
                                        <td className="text-center"> <strong>2</strong> </td>

                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr><td>{e.hteamName}</td> */}
                                    {table.map((e, i) => {
                                        return e;
                                    })}

                                    {/* </tr> */}

                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            )

        }) : "";
        // document.getElementById("status").innerHTML = e.statusText;
        return (e.idmatch ?
            <div className="r">
                {/* <nav className="breadcrumb bg-white border">
                    <Link className="breadcrumb-item" to="/">Home</Link>
                    <Link className="breadcrumb-item" to="">{e.group.spname}</Link>
                    <Link className="breadcrumb-item" to="">{e.group.gname}</Link>
                    <Link className="breadcrumb-item" to={'/odds/' + this.props.match.params.sport + '/' + this.props.match.params.group + '/' + this.props.match.params.league}>{e.group.name}</Link>
                    <span className="breadcrumb-item active">{e.hteamName + " vs " + e.ateamName}</span>
                </nav> */}
                <div key={e.id} className="card">

                    <h5 className="card-title" style={{ padding: "10px 0px 0px 10px" }}>
                        <i className={"ficon-inline f-" + e.countryId}></i>
                        {/* {"SportId:"+e.sportId+" LeagueId:"+e.leagueId+" CountryId:"+e.countryId}    
                        {}  */}

                        {e.sportName ? e.sportName + " " : "Sport "}
                        {e.countryName ? e.countryName + " " : "Country "}
                        {e.leagueName ? e.leagueName + " " : "League "}
                    </h5>
                    <h5 className="card-title" style={{ padding: "10px 0px 0px 10px" }}>
                        <i className="far fa-clock"></i>
                        {" " + hours + ":" + minutes + " | " + e.hteamName + " vs " + e.ateamName}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted" style={{ padding: "0px 0px 0px 10px" }}>
                        {timess}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-black" style={{ color: 'black !important', padding: "0px 0px 0px 10px" }} id="status">
                        {e.statusText ? e.statusText.replace(/(<\/?(\s|\S)*?>)/g, '') : e.status}
                    </h6>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12">
                                {list}

                            </div>
                            <div className="col-sm-0 d-none">
                                <ul className="nav flex-column nav-pills border-primary" id="myTab" role="tablist">
                                    {tabs}

                                </ul>
                            </div>
                            <div className="col-sm-12">
                                <div className="tab-content" id="myTabContent">
                                    {tabsConten}
                                </div>
                                <div className="float-right">
                                    <small>provided by
                                    <Link
                                            onClick={() => { window.open('https://www.livescore.in/match/', 'popup', 'width=600,height=600,scrollbars=no,resizable=no'); return false; }}
                                            target="popup" to={"https://www.livescore.in/match/" + e.gsmid}> flashscore</Link></small>
                                </div>
                            </div>






                        </div>
                    </div>
                </div>


            </div>
            :
            <div className="card" style={{ alignItems: "center" }}>
                <div className="card-body" >
                    <div className="loader"></div>
                </div>
            </div>
        );
    }
}

export default Match;
