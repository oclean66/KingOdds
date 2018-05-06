import React from 'react';
import firebase from '../fire';
import { Link } from 'react-router-dom';
//staged

var today = new Date();
var dd = today.getUTCDate();
var mm = today.getUTCMonth() + 1; //January is 0!
var yyyy = today.getUTCFullYear();
dd = dd < 10 ? '0' + dd : dd;
mm = mm < 10 ? '0' + mm : mm;
today = new Date(yyyy + "-" + mm + '-' + dd + ' 00:00');
// var labeldata = yyyy + '-' + mm + '-' + dd;
// console.log(today);
let next = <tr><td>Loading...</td></tr>;
let last = <tr><td>Loading...</td></tr>;
const p = "5%";
let matches, context;
// let sport, league, group;
class Odds extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            matches: [],
            sport: "",
            group: "",
            league: "",
            groupId: 205
        }
        context = this;


    }
    static getDerivedStateFromProps(props, current_state) {
        // if(current_state.sport)
        console.log(current_state);
        console.log(props.match.params);
        if (current_state.sport !== props.match.params.sport || current_state.group !== props.match.params.group || current_state.league !== props.match.params.league) {
            matches = firebase.database().ref('matches/' + props.match.params.sport + "/" + props.match.params.group + "/" + props.match.params.league);

            let aux = [];
            next = <tr><td>Loading...</td></tr>
            matches.orderByChild('timestamp').on("value", snapshot => {
                snapshot.forEach(function (child) {
                    let post = child.val();

                    aux = aux.concat(post);
                })
                // return {
                //     sport: props.match.params.sport,
                //     group: props.match.params.group,
                //     league: props.match.params.league,
                //     matches: aux,
                //     groupId: 205
    
                // }
                context.setState({
                   sport: props.match.params.sport,
                    group: props.match.params.group,
                    league: props.match.params.league,
                    matches: aux,
                    groupId: 205
                });
                console.log(aux);

            })
            // matches.off();
            return null;
            // return {
            //     sport: props.match.params.sport,
            //     group: props.match.params.group,
            //     league: props.match.params.league,
            //     // matches: aux,
            //     groupId: 205

            // }
        }
        return null;
    }
    componentWillUnmount() {
        matches.off();
    }
    componentDidMount() {
        console.log(this.state.sport)
        // console.log(labeldata)
        // console.log(today);

        // matches.orderByChild('timestamp').on("value", snapshot => {
        //     let aux = [];
        //     snapshot.forEach(function (child) {
        //         const post = child.val();
        //         aux = aux.concat(post);

        //     })
        //     this.setState({
        //         matches: aux
        //     });

        //     // console.log(snapshot.val());
        // });
    }
    render() {

        next = <tr><td>Nothing found</td></tr>
        // if (this.state.matches.data)
        let display = {};

        this.state.matches.map((item, i) => {
            let d = new Date(item.time);
            let index = d.getUTCFullYear() + '-' + (d.getUTCMonth() + 1) + '-' + d.getUTCDate();
            display[index] = display[index] || [];
            display[index].push(item);
            return null;
        });

        let array = Object.keys(display);

        next = array.map((item, i) => {

            if (context.state.groupId !== display[item][0].group.gid2) context.setState({ groupId: display[item][0].group.gid2 });
            if (context.state.sportName !== display[item][0].group.spname) context.setState({ sportName: display[item][0].group.spname });
            if (context.state.leagueName !== display[item][0].group.name) context.setState({ leagueName: display[item][0].group.name });


            let d = new Date(item);
            // console.log(d, '=', today);
            // console.log(d >= today)
            if (d >= today) {

                let x = display[item].map((e, i) => {

                    if (context.state.sportName !== e.group.spname) context.setState({ sportName: e.group.spname });
                    if (context.state.leagueName !== e.group.name) context.setState({ leagueName: e.group.name });
                    if (context.state.groupId !== e.group.gid2) context.setState({ groupId: e.group.gid2 });

                    let d = new Date(e.time);
                    let min = d.getUTCMinutes() < 10 ? "0" + d.getUTCMinutes() : d.getUTCMinutes();
                    let time = d.getUTCHours() + ":" + min;

                    let data = e.data;
                    if (data) {
                        data = data[Object.keys(data)[0]];
                        data = data[Object.keys(data)[0]];
                        // data = data.o1;
                    } else {
                        data = { "o1": "-", "o2": "-", "o3": "-" }
                    }
                    return (

                        <tr key={e.id}>
                            <th className="text-center" style={{ width: p, fontWeight: "bolder" }}>{time}</th>
                            <td><Link to={"/match/" + context.state.sport + "/" + context.state.group + "/" + context.state.league + "/" + e.id}>{e.hteamName + " vs " + e.ateamName}</Link></td>
                            <td className="text-center" style={{ width: '7%', fontWeight: "bolder" }}>{e.status}</td>
                            <td className="text-center" style={{ width: p }}>{data.o1}</td>
                            <td className="text-center" style={{ width: p }}>{data.o2}</td>
                            <td className="text-center" style={{ width: p }}>{data.o3}</td>
                        </tr>

                    )
                })
                let label = item;

                var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                // console.log(d.getUTCDate());

                label = (parseInt(dd, 10) === parseInt(d.getUTCDate(), 10) ? 'Today' : days[d.getUTCDay()]) + ', ' + d.getUTCDate() + ' ' + months[d.getUTCMonth()];

                return (
                    <table key={item} className="table table-sm table-bordered bg-light">
                        <thead className="table-primary">
                            <tr >
                                <th colSpan='3' >{label}</th>
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
                // console.log('false');
            } else return null;
        });

        array = array.sort((a, b) => new Date(b) - new Date(a));

        last = array.map((item, i) => {
            let d = new Date(item);

            if (d < today) {
                let x = display[item].map((e, i) => {
                    let d = new Date(e.time);
                    let min = d.getUTCMinutes() < 10 ? "0" + d.getUTCMinutes() : d.getUTCMinutes();
                    let time = d.getUTCHours() + ":" + min;
                    let data = e.data;
                    if (data) {
                        data = data[Object.keys(data)[0]];
                        data = data[Object.keys(data)[0]];
                        // data = data.o1;
                    } else {
                        data = { "o1": "-", "o2": "-", "o3": "-" }
                    }
                    return (

                        <tr key={e.id}>
                            <th className="text-center" style={{ width: p, fontWeight: "bolder" }}>{time}</th>
                            <td><Link to={"/match/" + context.state.sport + "/" + context.state.group + "/" + context.state.league + "/" + e.id}>{e.hteamName + " vs " + e.ateamName}</Link></td>
                            <td className="text-center" style={{ width: '7%', fontWeight: "bolder" }}>{e.results ? e.results[1].value : "-"}</td>
                            <td className="text-center" style={{ width: p }}>{data.o1}</td>
                            <td className="text-center" style={{ width: p }}>{data.o2}</td>
                            <td className="text-center" style={{ width: p }}>{data.o3}</td>
                        </tr>

                    )
                })
                let label = item;

                var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                // console.log(d.getUTCDate());

                label = (dd === d.getUTCDate() ? 'Today' : days[d.getUTCDay()]) + ', ' + d.getUTCDate() + ' ' + months[d.getUTCMonth()];

                return (
                    <table key={item} className="table table-sm table-bordered bg-light">
                        <thead className="table-primary">
                            <tr >
                                <th colSpan='3' >{label}</th>
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
            } else return null;
        });

        return (
            <div>
                <nav className="breadcrumb bg-white border">
                    <Link className="breadcrumb-item" to="#">Home</Link>
                    <Link className="breadcrumb-item" to={"/sport/" + this.state.sport}>{this.state.sportName}</Link>
                    <Link className="breadcrumb-item" to="#">{this.state.group}</Link>
                    <Link className="breadcrumb-item active" to="#">{this.state.leagueName}</Link>
                    {/* <span className="breadcrumb-item active">Bootstrap</span> */}
                </nav>
                <div id="card" className="card">
                    <h5 className="card-title" style={{ padding: "10px 0px 0px 10px" }}>
                        <i className={"ficon-inline f-" + this.state.groupId}></i>
                        {this.state.sportName + ' ' + this.state.group + " - " + this.state.leagueName}</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted" style={{ padding: "0px 0px 0px 10px" }}>{e.group ? e.group.gname + " | " + e.group.name + " - " + timess : ""}</h6> */}

                    <div className="card-body">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <Link className="nav-link active" data-toggle="tab" to="#home">Next Matches</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " data-toggle="tab" to="#menu1">Results</Link>
                            </li>

                        </ul>
                        <div className="cold-sm-12">
                            <div className="tab-content">
                                <div id="home" className="tab-pane fade in active show">
                                    <div className="table-responsive-lg">
                                        {next}
                                    </div>
                                </div>
                                <div id="menu1" className="tab-pane fade">
                                    <div className="table-responsive-lg">
                                        {last}
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

export default Odds
