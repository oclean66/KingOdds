import React from 'react';
import { Link } from 'react-router-dom';


const p = "10%";
const bookUrl = require('../data.json');
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
        fetch('http://kingdeportes.com/geek/api/list/model/search/id/' + this.props.match.params.id, { cache: "no-cache" }).then(results => {
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
    componentWillUnmount() {
        this.setState({
            matches: {},
            name: "",
            country: 1
        })
    }
    static getDerivedStateFromProps(props, current_state) {

        // console.log(props.match.params);
        if (current_state.id !== props.match.params.id) {

            fetch('http://kingdeportes.com/geek/api/list/model/search/id/' + props.match.params.id).then(results => {
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
    please(){
        alert("This event is already started or finished, no odds for pre match available");
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
               
                let bookies = Object.keys(bookUrl);
                let olo1 = bookUrl[bookies[(Math.random() * (bookies.length - 2) + 1).toFixed(0)]];
                let olo2 = bookUrl[bookies[(Math.random() * (bookies.length - 2) + 1).toFixed(0)]];
                let olo3 = bookUrl[bookies[(Math.random() * (bookies.length - 2) + 1).toFixed(0)]];
                let olo4 = bookUrl[bookies[(Math.random() * (bookies.length - 2) + 1).toFixed(0)]];
                let olo5 = bookUrl[bookies[(Math.random() * (bookies.length - 2) + 1).toFixed(0)]];

                // let list = Object.keys(bookUrls);
                let temp={
                    0: {url:"#",name:"no name"},
                    1: {url:"#",name:"no name"},
                    2: {url:"#",name:"no name"},
                    3: {url:"#",name:"no name"}
                };
                let tempo={
                    0: {url:"#",name:"no name"},
                    1: {url:"#",name:"no name"},
                    2: {url:"#",name:"no name"},
                    3: {url:"#",name:"no name"}
                };
                bookies.sort();
                // let bool = false;

                if(y.data[19992])
                bookies.map(i => {
                    // console.log(bookUrl[i].idLogo,y.data[19992].bookIdo1)
                    if (bookUrl[i].idLogo == y.data[19992].bookIdo1) {
                        temp[1] = bookUrl[i];
                        // bool = true;
                    }
                    if (bookUrl[i].idLogo == y.data[19992].bookIdo2) {
                        temp[2] = bookUrl[i];
                        // bool = true;
                    }
                    if (bookUrl[i].idLogo == y.data[19992].bookIdo3) {
                        temp[3] = bookUrl[i];
                        // bool = true;
                    }
                    return 1;
                })

                if(y.data[29992])
                bookies.map(i => {
                    // console.log(bookUrl[i].idLogo,y.data[19992].bookIdo1)
                    if (bookUrl[i].idLogo == y.data[29992].bookIdo1) {
                        tempo[1] = bookUrl[i];
                        // bool = true;
                    }
                    if (bookUrl[i].idLogo == y.data[29992].bookIdo2) {
                        tempo[2] = bookUrl[i];
                        // bool = true;
                    }
                    // if (bookUrl[i].idLogo == y.data[29992].bookIdo3) {
                    //     tempo[3] = bookUrl[i];
                    //     // bool = true;
                    // }
                    return 1;
                })

              

                return (
                    <tr key={y.idmatch}>
                        <th className="text-center" style={{ width: p, fontWeight: "bolder",backgroundColor:y.status==="In Play"?"#ffd559":(y.status==="Fin"?"red":"#d3d3d34f"), color:y.status==="Fin"?"white":"black" }}>{hours + ":" + minutes}<br /><small><b>{timess}</b></small></th>
                        <td><Link to={(y.status==="Fin" || y.status==="In Play")?"#":"/match/" + y.idmatch} onClick={(y.status==="Fin" || y.status==="In Play")?this.please.bind(this,'No'):void(0)} ><b>{y.name}</b></Link></td>
                        <td className="text-center" style={{ width: '7%', fontWeight: "bolder" }}>{y.results ? y.results[1].value : y.status}</td>


                        <td className="text-center" style={{ width: p, backgroundColor: 'rgb(184, 218, 255)', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={temp[1].url} title={"Click to go to the bookmaker site " +  temp[1].name} >
                                <span className={"logos l" + (y.data[19992]?y.data[19992].bookIdo1:olo1.idLogo)}></span>
                            </a>
                            {this.props.format(y.data[19992] ? y.data[19992].o1 : (Math.random() * (max - min) + min).toFixed(2))}
                        </td>

                        <td className={(item.sportName==="Baseball" || item.sportName==="Hockey" || item.sportName==="aussie rules" || item.sportName==="US Football" || item.sportName==="Tennis" || item.sportName==="ESports" || item.sportName==="volleyball" || item.sportName==="Basketball")?"hide":"text-center"} style={{ width: p, backgroundColor: 'rgb(184, 218, 255)', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={temp[2].url} title={"Click to go to the bookmaker site " +temp[2].name} >
                                <span className={"logos l" + (y.data[19992]?y.data[19992].bookIdo2:olo2.idLogo)}></span>
                            </a>
                            {this.props.format(y.data[19992] ? y.data[19992].o2 : (Math.random() * (max - min) + min).toFixed(2))}
                        </td>

                        <td className="text-center" style={{ width: p, backgroundColor: 'rgb(184, 218, 255)', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={temp[3].url} title={"Click to go to the bookmaker site " + temp[3].name} >
                                <span className={"logos l" + (y.data[19992]?y.data[19992].bookIdo3:olo3.idLogo)}></span>
                            </a>
                            {this.props.format(y.data[19992] ? y.data[19992].o3 : (Math.random() * (max - min) + min).toFixed(2))}
                        </td>




                        <td className="text-center" style={{ width: p, backgroundColor: '#AED581', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={tempo[1].url} title={"Click to go to the bookmaker site " + tempo[1].name} >
                                <span className={"logos l" + (y.data[29992]?y.data[29992].bookIdo1:olo4.idLogo)}></span>
                            </a>
                            {y.data[29992] ? this.props.format(y.data[29992].o1) + "(> " + y.data[29992].o3 + ")" : this.props.format((Math.random() * (max - min) + min).toFixed(2)) + " (2.5)"}
                        </td>

                        <td className="text-center" style={{ width: p, backgroundColor: '#AED581', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={tempo[2].url} title={"Click to go to the bookmaker site " + tempo[2].name} >
                                <span className={"logos l" + (y.data[29992]?y.data[29992].bookIdo2:olo5.idLogo)}></span>
                            </a>
                            {y.data[29992] ? this.props.format(y.data[29992].o2) + "(< " + y.data[29992].o3 + ")" : this.props.format((Math.random() * (max - min) + min).toFixed(2)) + " (2.5)"}
                        </td>

                    </tr>
                )
            })
            return (
                <table key={i} className="table table-sm table-bordered bg-light">
                    <thead className="table-primary">
                        <tr >
                            <th colSpan='3' >{item.name}</th>
                            <th className='text-center'>1</th>
                            <th className={(item.sportName==="Baseball" || item.sportName==="Hockey" || item.sportName==="aussie rules" || item.sportName==="US Football" || item.sportName==="Tennis" || item.sportName==="ESports"  || item.sportName==="volleyball"  || item.sportName==="Basketball")?"hide":'text-center'}>X</th>
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
