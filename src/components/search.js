import React from 'react';
import { Link } from 'react-router-dom';


const p = "10%";
let context;

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            matches: {},
            name: "",
            country: 1
        }
        context = this;
    }
    // static getDerivedStateFromProps(props, current_state) {

    //     // console.log(props.match.params);
    //     if (current_state.id !== props.match.params.id) {
    //         matches = firebase.database().ref('matches');

    //         // let aux = [];
    //         context.setState({
    //             alterMatches: {},
    //             sportId: props.match.params.id.split("c")[0],
    //             sport: props.match.params.sport,
    //             league: props.match.params.league,
    //             groupId: props.match.params.id.split("c")[1]
    //         })
    //         let aux2 = {};
    //         next = <tr><td>Loading...</td></tr>
    //         matches.orderByChild('searchId').equalTo(props.match.params.id).on("value", snapshot => {
    //             let matchesList = snapshot;

    //             matchesList.forEach(child => {
    //                 let item = child.val()
    //                 // console.log(item);
    //                 oddData = firebase.database().ref('odds/' + item.idmatch + "/19992");
    //                 oddData.once("value").then(snap => {
    //                     // console.log(snap.val())
    //                     if (snap.val()) {
    //                         let tempkey = Object.keys(snap.val());
    //                         item.data = snap.val()[tempkey[0]];
    //                         aux2[item.idmatch] = item;
    //                         // console.log(item);
    //                     }
    //                     let temporal = context.state.alterMatches;
    //                     temporal[item.idmatch] = item;
    //                     context.setState({
    //                         alterMatches: temporal
    //                     })
    //                 });
    //             })
    //         })
    //         return null;
    //     }
    //     return null;
    // }
    componentDidMount() {
        fetch('http://localhost/oddsMaster/api/list/model/search/id/' + this.props.match.params.id).then(results => {
            return results.json();
        }).then(data => {
            context.setState({
                matches: data.leagues,
                name: data.name,
                country: data.country,

            })
            // console.log(data);
        });
    }
    static getDerivedStateFromProps(props, current_state) {

        // console.log(props.match.params);
        if (current_state.id !== props.match.params.id) {

            fetch('http://localhost/oddsMaster/api/list/model/search/id/' + props.match.params.id).then(results => {
                return results.json();
            }).then(data => {
                context.setState({
                    matches: data.leagues,
                    name: data.name,
                    country: data.country,

                })
                // console.log(data);
            });
        }
        return null;
    }
    render() {

        let display = this.state.matches;
        let leagues = Object.keys(display).map(i => {
            let item = display[i];
            let min = 1, max = 4.5;
            let match = item.matches.map(y => {
                return (
                    <tr key={y.idmatch}>
                        <th className="text-center" style={{ width: p, fontWeight: "bolder" }}>{y.time}<br /><small><b>{y.date}</b></small></th>
                        <td><Link to={"/match/" + y.idmatch}><b>{y.name}</b></Link></td>
                        <td className="text-center" style={{ width: '7%', fontWeight: "bolder" }}>{y.results ? y.results[1].value : y.status}</td>
                        <td className="text-center" style={{ width: p }}>{y.data ? y.data.o1 : (Math.random() * (max - min) + min).toFixed(2)}</td>
                        <td className="text-center" style={{ width: p }}>{y.data ? y.data.o2 : (Math.random() * (max - min) + min).toFixed(2)}</td>
                        <td className="text-center" style={{ width: p }}>{y.data ? y.data.o3 : (Math.random() * (max - min) + min).toFixed(2)}</td>
                    </tr>
                )
            })
            return (
                <table key={i} className="table table-sm table-bordered bg-light">
                    <thead className="table-primary">
                        <tr >
                            <th colSpan='3' >{item.name}</th>
                            <th className='text-center'>1</th>
                            <th className='text-center'>X</th>
                            <th className='text-center'>2</th>
                        </tr>

                    </thead>
                    <tbody>
                        {match}
                    </tbody>
                </table>
            )
        });
        // console.log(leagues);


        return (
            <div>
                <div id="card" className="card">
                    <h5 className="card-title" style={{ padding: "10px 0px 0px 10px" }}>
                        <div>
                            <i className={"ficon-inline f-" + this.state.country}></i>
                            {this.state.name}
                        </div>

                    </h5>
                    <div className="card-body">
                        <div className="cold-sm-12">
                            <div className="tab-content">
                                <div id="home" className="tab-pane fade in active show">
                                    <div className="table-responsive-lg">
                                        {leagues}
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
