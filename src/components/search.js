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

    componentDidMount() {
        fetch('http://kingdeportes.com/oddsMaster/api/list/model/search/id/' + this.props.match.params.id,{cache:"no-cache"}).then(results => {
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
    componentWillUnmount(){
        this.setState({
            matches: {},
            name: "",
            country: 1
        })
    }
    static getDerivedStateFromProps(props, current_state) {

        // console.log(props.match.params);
        if (current_state.id !== props.match.params.id) {

            fetch('http://kingdeportes.com/oddsMaster/api/list/model/search/id/' + props.match.params.id).then(results => {
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
                let timess = new Date(y.timestamp * 1000);
                // console.log(y.timestamp);
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
                // var generator = new Random(seed);

                let bookUrl = {                   
                    0: { name: "Bet at Home", id: 3, logo: 39, },
                    1: { name: "William Hill", id: 15, logo: 4, },
                    2: { name: "Pinnacle", id: 18, logo: 2, },
                    3: { name: "Betsafe", id: 24, logo: 6, },
                    4: { name: "888Sport", id: 27, logo: 31, },
                    5: { name: "Intertops", id: 31, logo: 3, },
                    6: { name: "Nordicbet", id: 33, logo: 7, },
                    7: { name: "Betsson", id: 43, logo: 5, },
                    8: { name: "Betfred", id: 44, logo: 40, },
                    9: { name: "Betvision", id: 76, logo: 13, },
                    10: { name: "12Bet", id: 80, logo: 16, },
                    11: { name: "TitanBet ", id: 121, logo: 32, },
                    12: { name: "Bwin", id: 128, logo: 42, },
                    13: { name: "Dafabet", id: 147, logo: 26, },
                    14: { name: "Come on", id: 383, logo: 23, },
                    15: { name: "Matchbook", id: 390, logo: 22, },
                    16: { name: "18Bet", id: 416, logo: 9, },
                    17: { name: "1xbet", id: 417, logo: 38, },
                    18: { name: "Betonline", id: 446, logo: 34, }, 
                }
                console.log((Math.random() * (18 - 2) + 2).toFixed(0));
                 let olo=bookUrl[(Math.random() * (18 - 2) + 2).toFixed(0)];
                return (
                    <tr key={y.idmatch}>
                        <th className="text-center" style={{ width: p, fontWeight: "bolder" }}>{hours + ":" + minutes}<br /><small><b>{timess}</b></small></th>
                        <td><Link to={"/match/" + y.idmatch}><b>{y.name}</b></Link></td>
                        <td className="text-center" style={{ width: '7%', fontWeight: "bolder" }}>{y.results ? y.results[1].value : y.status}</td>


                        <td className="text-center" style={{ width: p, backgroundColor: '#007bffa8', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={"https://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_" + olo.logo} title={"Click to go to the bookmaker site "+ olo.name} >
                                <span className={"logos l" +  olo.id}></span>
                            </a>
                            {y.data[19992] ? y.data[19992].o1 : (Math.random() * (max - min) + min).toFixed(2)}
                        </td>

                        <td className="text-center" style={{ width: p, backgroundColor: '#007bffa8', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={"https://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_" + olo.logo} title={"Click to go to the bookmaker site "+ olo.name} >
                                <span className={"logos l" +  olo.id}></span> 
                            </a>
                            {y.data[19992] ? y.data[19992].o2 : (Math.random() * (max - min) + min).toFixed(2)}</td>
                        <td className="text-center" style={{ width: p, backgroundColor: '#007bffa8', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={"https://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_" + olo.logo} title={"Click to go to the bookmaker site "+ olo.name} >
                                <span className={"logos l" +  olo.id}></span>
                            </a>
                            {y.data[19992] ? y.data[19992].o3 : (Math.random() * (max - min) + min).toFixed(2)}</td>

                        <td className="text-center" style={{ width: p, backgroundColor: '#21a700a8', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={"https://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_" + olo.logo} title={"Click to go to the bookmaker site "+ olo.name} >
                                <span className={"logos l" +  olo.id}></span>
                            </a>
                            {y.data[29992] ? y.data[29992].o1+"(> "+y.data[29992].o3+")" : ((Math.random() * (max - min) + min).toFixed(2)) + " (2.5)"}</td>
                        <td className="text-center" style={{ width: p, backgroundColor: '#21a700a8', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={"https://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_" + olo.logo} title={"Click to go to the bookmaker site "+ olo.name} >
                                <span className={"logos l" +  olo.id}></span>
                            </a>
                            {y.data[29992] ? y.data[29992].o2+"(< "+y.data[29992].o3+")" : ((Math.random() * (max - min) + min).toFixed(2)) + " (2.5)"}</td>
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

                            <th className='text-center'>Under</th>
                            <th className='text-center'>Over</th>
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
