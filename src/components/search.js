import React from 'react';
import firebase from '../fire';
import { Link } from 'react-router-dom';

// import { O_NONBLOCK } from 'constants';
//staged

var today = new Date();
// var dd = today.getUTCDate();
// var mm = today.getUTCMonth() + 1; //January is 0!
// var yyyy = today.getUTCFullYear();
// dd = dd < 10 ? '0' + dd : dd;
// mm = mm < 10 ? '0' + mm : mm;
// today = new Date(yyyy + "-" + mm + '-' + dd + ' 00:00');
// var labeldata = yyyy + '-' + mm + '-' + dd;
// console.log(today);
let next = <tr><td>Loading...</td></tr>;
// let last = <tr><td>Loading...</td></tr>;
const p = "10%";
let matches, context, oddData;
// let sport, league, group;
class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            matches: [],
            alterMatches: {},
            sportId: this.props.match.params.id.split("c")[0],
            sport: this.props.match.params.sport,
            league: this.props.match.params.league,
            groupId: this.props.match.params.id.split("c")[1]
        }
        context = this;


    }
    static getDerivedStateFromProps(props, current_state) {

        // console.log(props.match.params);
        if (current_state.id !== props.match.params.id) {
            matches = firebase.database().ref('matches');

            // let aux = [];
            context.setState({
                alterMatches: {},
                sportId: props.match.params.id.split("c")[0],
                sport: props.match.params.sport,
                league: props.match.params.league,
                groupId: props.match.params.id.split("c")[1]
            })
            let aux2 = {};
            next = <tr><td>Loading...</td></tr>
            matches.orderByChild('searchId').equalTo(props.match.params.id).on("value", snapshot => {
                let matchesList = snapshot;
                // console.table(matchesList);
                matchesList.forEach(child => {
                    let item = child.val()
                    // console.log(item);
                    oddData = firebase.database().ref('odds/' + item.idmatch + "/19992");
                    oddData.once("value").then(snap => {
                        // console.log(snap.val())
                        if (snap.val()) {
                            let tempkey = Object.keys(snap.val());
                            // console.log(tempkey);

                            // item.data = {};
                            item.data = snap.val()[tempkey[0]];
                            aux2[item.idmatch] = item;
                            console.log(item);

                            let temporal = context.state.alterMatches;
                            temporal[item.idmatch] = item;
                            context.setState({
                                alterMatches: temporal
                            })
                        }

                    });
                })
            })
            return null;
        }
        return null;
    }
    componentWillUnmount() {
        matches.off();
        oddData.off();
    }

    render() {

        let display = this.state.alterMatches;
        let orga = {}

        let array = Object.keys(display);
        // var gid2, spname, name;
        array.map((i) => {
            orga[display[i].leagueId] = [];
            return null;
        })
        array.map((i) => {
            orga[display[i].leagueId].push(display[i]);
            return null;
        })
        // console.table(orga);
        next = Object.keys(orga).map((i) => {
            let event = orga[i];
            // console.table(event);
            let leagueName = "Loading...";
            let x = Object.keys(event).map((y) => {
                let time = new Date(event[y].timestamp * 1000);
                let date;
                leagueName = event[y].leagueName;
                let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
                let month = time.getMonth() < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
                let year = time.getFullYear();
                let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
                let min = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
                time = hour + ":" + min;
                date = year + "/" + month + "/" + day;
                // console.log(event[y].timestamp, " > ", (today.getTime() / 1000))
                if (event[y].timestamp > (today.getTime() / 1000)) {

                    return (
                        <tr key={y}>
                            <th className="text-center" style={{ width: p, fontWeight: "bolder" }}>{time}<br /><small><b>{date}</b></small></th>
                            <td><Link to={"/match/" + event[y].idmatch}><b>{event[y].hteamName + " vs " + event[y].ateamName}</b></Link></td>
                            <td className="text-center" style={{ width: '7%', fontWeight: "bolder" }}>{event[y].results ? event[y].results[1].value : event[y].status}</td>
                            <td className="text-center" style={{ width: p }}>{event[y].data ? event[y].data.o1 : "-"}</td>
                            <td className="text-center" style={{ width: p }}>{event[y].data ? event[y].data.o2 : "-"}</td>
                            <td className="text-center" style={{ width: p }}>{event[y].data ? event[y].data.o3 : "-"}</td>
                        </tr>
                    )
                } else return null;
            })
            return (
                <table key={i} className="table table-sm table-bordered bg-light">
                    <thead className="table-primary">
                        <tr >
                            <th colSpan='3' >{leagueName}</th>
                            <th className='text-center'>1</th>
                            <th className='text-center'>X</th>
                            <th className='text-center'>2</th>
                        </tr>

                    </thead>
                    <tbody>
                        {x}
                    </tbody>
                </table>
            )

        })



        return (
            <div>

                <div id="card" className="card">
                    <h5 className="card-title" style={{ padding: "10px 0px 0px 10px" }}>
                        <div><i className={"sicon-sport-" + this.state.sportId}></i> {this.state.sport}</div>
                        <i className={"ficon-inline f-" + this.state.groupId}></i>
                        {this.state.league}: Next Matches
                        {/* {this.state.sportName + ' ' + this.state.group + " - " + this.state.leagueName} */}
                    </h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted" style={{ padding: "0px 0px 0px 10px" }}>{e.group ? e.group.gname + " | " + e.group.name + " - " + timess : ""}</h6> */}

                    <div className="card-body">

                        <div className="cold-sm-12">
                            <div className="tab-content">
                                <div id="home" className="tab-pane fade in active show">
                                    <div className="table-responsive-lg">
                                        {next}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        );
    }

}

export default Search
