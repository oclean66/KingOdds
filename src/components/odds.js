import React from 'react';
import firebase from '../fire';
import { Link } from 'react-router-dom';


var today = new Date();
var dd = today.getDate() + 1;
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
dd = dd < 10 ? '0' + dd : dd;
mm = mm < 10 ? '0' + mm : mm;
today = yyyy + mm + dd;
let exe;
const p = "5%";
let matches, context;
// let sport, league, group;
class Odds extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            matches: []
        }
        context = this;


    }
    static getDerivedStateFromProps(props, current_state) {
        // console.log(context.state);
        if (current_state.sport !== props.match.params.sport || current_state.group !== props.match.params.group || current_state.league !== props.match.params.league) {
            matches = firebase.database().ref('matches/' + props.match.params.sport + "/" + props.match.params.group + "/" + props.match.params.league);

            let aux = [];
            exe = <tr><td>Loading...</td></tr>
            matches.orderByChild('timestamp').on("value", snapshot => {
                snapshot.forEach(function (child) {
                    let post = child.val();
                    aux = aux.concat(post);
                })
                context.setState({
                    matches: aux
                });
            })

            return {
                sport: props.match.params.sport,
                group: props.match.params.group,
                league: props.match.params.league,
                // matches:aux

            }
        }
    }
    componentDidMount() {

        matches.orderByChild('timestamp').on("value", snapshot => {
            let aux = [];
            snapshot.forEach(function (child) {
                const post = child.val();
                aux = aux.concat(post);

            })
            this.setState({
                matches: aux
            });

            // console.log(snapshot.val());
        });
    }
    render() {

        exe = <tr><td>Nothing found</td></tr>
        // if (this.state.matches.data)
        exe = this.state.matches.map(function (picture) {
            let d = new Date(picture.time);
            let min = d.getUTCMinutes() < 10 ? "0" + d.getUTCMinutes() : d.getUTCMinutes();
            let time = d.getUTCHours() + ":" + min;

            let data = picture.data;
            if (data) {
                data = data[Object.keys(data)[0]];
                data = data[Object.keys(data)[0]];
                // data = data.o1;
            } else { 
                data = {"o1":"","o2":"","o3":""}
            }
            if(context.state.sportName !== picture.group.spname) context.setState({ sportName: picture.group.spname });
            if(context.state.leagueName !== picture.group.name) context.setState({ leagueName: picture.group.name });
            


            return <tr key={picture.id}>
                <th className="text-center" style={{ width: p, fontWeight: "bolder" }}>{time}</th>
                <td><Link to={"/match/" + context.state.sport + "/" + context.state.group + "/" + context.state.league + "/" + picture.id}>{picture.hteamName + " vs " + picture.ateamName}</Link></td>
                <td className="text-center" style={{ width: p, fontWeight: "bolder" }}>{picture.status}</td>
                <td className="text-center" style={{ width: p }}>{data.o1}</td>
                <td className="text-center" style={{ width: p }}>{data.o2}</td>
                <td className="text-center" style={{ width: p }}>{data.o3}</td>
                {/* <td className="text-center" style={{ width: p }}>{picture.data["1X2 Full Time"][Object.keys(picture.data["1X2 Full Time"])[0]].o2}</td> */}
                {/* <td className="text-center" style={{ width: p }}>{picture.data["1X2 Full Time"][Object.keys(picture.data["1X2 Full Time"])[0]].o3}</td> */}
            </tr>
        })

        return (
            <div id="card" className="card">
                <h5 className="card-title" style={{ padding: "10px 0px 0px 10px" }}><i className="far fa-clock"></i> Today's Matches</h5>
                {/* <h6 className="card-subtitle mb-2 text-muted" style={{ padding: "0px 0px 0px 10px" }}>{e.group ? e.group.gname + " | " + e.group.name + " - " + timess : ""}</h6> */}

                <div className="card-body">
                    <table className="table table-sm table-bordered bg-light" >
                        <thead>
                            <tr className="table-primary">
                                <th colSpan="3">{this.state.sportName + " - " + this.state.group + " - " + this.state.leagueName}</th>
                                <th className="text-center" style={{ width: p }}>1</th>
                                <th className="text-center" style={{ width: p }}>x</th>
                                <th className="text-center" style={{ width: p }}>2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exe}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default Odds
