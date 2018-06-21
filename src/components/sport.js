import React from "react";
import { Link } from "react-router-dom";

const p = "10%";
class Sport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},

        }
    }

    componentDidMount() {
        let context = this;
        fetch('https://kingdeportes.com/oddsMaster/api/list/model/next').then(results => {
            return results.json();
        }).then(data => {
            context.setState({
                data: data,
            })
        });
    }
    render() {
        let raw = this.state.data;
        let table = Object.keys(raw).map(i => {
            let per = raw[i].matches;
            let matches = Object.keys(per).map(z => {
                let y = per[z];
                let min = 1, max = 4.5;
                let timess = new Date(y.timestamp * 1000);

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


                return (
                    <tr key={y.idmatch}>
                        <th className="text-center" style={{ width: p, fontWeight: "bolder" }}>{hours + ":" + minutes}<br /><small><b>{timess}</b></small></th>
                        <td><Link to={"/match/" + y.idmatch}><b>{y.name}</b></Link></td>
                        <td className="text-center" style={{ width: '7%', fontWeight: "bolder" }}>{y.results ? y.results[1].value : y.status}</td>
                      
                      
                        <td className="text-center" style={{ width: p,backgroundColor:'#007bffa8',fontWeight:"bolder" }}>
                            <a id="link-2" href={"https://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_"+y.bookId} title="Click to go to the bookmaker site" >
                                <span class={"logos l" + y.bookId}></span>
                            </a>
                            {y.data ? y.data.o1 : (Math.random() * (max - min) + min).toFixed(2)}</td>
                        <td className="text-center" style={{ width: p,backgroundColor:'#007bffa8',fontWeight:"bolder" }}>
                            <a id="link-2"href={"https://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_"+y.bookId} title="Click to go to the bookmaker site" >
                                <span class={"logos l" + y.bookId}></span>
                            </a>
                            {y.data ? y.data.o2 : (Math.random() * (max - min) + min).toFixed(2)}</td>
                        <td className="text-center" style={{ width: p,backgroundColor:'#007bffa8',fontWeight:"bolder" }}>
                            <a id="link-2" href={"https://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_"+y.bookId} title="Click to go to the bookmaker site" >
                                <span class={"logos l" + y.bookId}></span>
                            </a>
                            {y.data ? y.data.o3 : (Math.random() * (max - min) + min).toFixed(2)}</td>

                        <td className="text-center" style={{ width: p,backgroundColor:'#21a700a8',fontWeight:"bolder" }}>
                            <a id="link-2" href={"https://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_"+y.bookId} title="Click to go to the bookmaker site" >
                                <span class={"logos l" + y.bookId}></span>
                            </a>
                            {y.data ? y.data.o2 : (Math.random() * (max - min) + min).toFixed(2)}</td>
                        <td className="text-center" style={{ width: p,backgroundColor:'#21a700a8',fontWeight:"bolder" }}>
                            <a id="link-2" href={"https://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_"+y.bookId} title="Click to go to the bookmaker site" >
                                <span class={"logos l" + y.bookId}></span>
                            </a>
                            {y.data ? y.data.o3 : (Math.random() * (max - min) + min).toFixed(2)}</td>
                    </tr>
                )
            })
            return (
                <table key={i} id={i} className="table table-sm table-bordered bg-light">
                    <thead className="table-primary">
                        <tr >
                            <th colSpan='3' >{raw[i].sportName + " " + raw[i].name}</th>
                            <th className='text-center'>1</th>
                            <th className='text-center'>X</th>
                            <th className='text-center'>2</th>

                             <th className='text-center'>Under</th>
                            <th className='text-center'>Over</th>
                        </tr>

                    </thead>
                    <tbody>
                        {matches}
                    </tbody>
                </table>
            )
        })



        return (
            <div className="card">
                <div className="card-body">
                    <h5>Next Matches</h5>
                    {table}
                </div>

            </div>
        );
    }
}
export default Sport;