import React from 'react';
import firebase from '../fire';


var today = new Date();
var dd = today.getDate()+1;
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
dd = dd < 10 ? '0' + dd : dd;
mm = mm < 10 ? '0' + mm : mm;
today = yyyy + mm + dd;

const p = "5%";
const matches = firebase.database().ref('matches/'+today);

class Odds extends React.Component {
    constructor(props) {
        super(props)
        this.state = { matches: [], pictures: [] }
        // matches = this.props.firebase;
    }

    componentDidMount() {
        // console.log(matches);
        matches.orderByChild('timestamp').on("value", snapshot => {
            let aux = [];
            snapshot.forEach(function (child) {
                const post = child.val();
                aux = aux.concat(post);

            })
            this.setState({
                pictures: aux
            });

        });
        console.log(this.props.date);
    }
    render() {

        let exe = this.state.pictures.map(function (picture) {
            let d = new Date(picture.time);
            let min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
            let time = d.getHours() + ":" + min;
            return <tr key={picture.id}>
                <th className="text-center" style={{ width: p, fontWeight: "bolder" }}>{time}</th>
                <td>{picture.hteamName + " vs " + picture.ateamName}</td>
                <td className="text-center" style={{ width: p, fontWeight: "bolder" }}>{picture.status + " " + picture.timestamp}</td>
                <td className="text-center" style={{ width: p }}>{picture.data["1X2 Full Time"][Object.keys(picture.data["1X2 Full Time"])[0]].o1}</td>
                <td className="text-center" style={{ width: p }}>{picture.data["1X2 Full Time"][Object.keys(picture.data["1X2 Full Time"])[0]].o2}</td>
                <td className="text-center" style={{ width: p }}>{picture.data["1X2 Full Time"][Object.keys(picture.data["1X2 Full Time"])[0]].o3}</td>
            </tr>
        })




        return (
            <div className="row">
                <div className="col-lg-12">
                    <h2>Today's Matches</h2>
                    <table className="table table-sm  table-hover table-bordered" style={{ backgroundColor: "rgb(0, 173, 238)", color: "white" }}>
                        <thead className="thead-dark">
                            <tr>
                                <th colSpan="3">Brasil > Serie B</th>
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
