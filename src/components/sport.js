import React from "react";
import { Link } from "react-router-dom";
// import LocalizedStrings from 'react-localization';
// var numeral = require('numeral');
const p = "10%";
// var convert = require('convert-units')
// var number;
const bookUrl = require('../data.json');


class Sport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}           
        }
     
    }

    // static getDerivedStateFromProps(props, current_state) {

      
    // }
    componentDidMount() {
        let context = this;
        // this.setState(this.props.strings)
        // console.log(this.props.format(-110))
        fetch('http://kingdeportes.com/geek/api/list/model/next',{cache:"no-cache"}).then(results => {
            return results.json();
        }).then(data => {
            context.setState({
                data: data,
            })
        });

        

    }
    please(){
        alert("This event is already started or finished, no odds for pre match available");
    }
    render() {
        let raw = this.state.data;
        let table = Object.keys(raw).map(i => {
            let per = raw[i].matches;
            let matches = Object.keys(per).map(z => {
                let y = per[z];
                let min = 1, max = 5;
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

               
                let bookies = Object.keys(bookUrl);
                let olo1 = bookUrl[bookies[(Math.random() * (bookies.length - 2) + 1).toFixed(0)]];
                let olo2 = bookUrl[bookies[(Math.random() * (bookies.length - 2) + 1).toFixed(0)]];
                let olo3 = bookUrl[bookies[(Math.random() * (bookies.length - 2) + 1).toFixed(0)]];
                let olo4 = bookUrl[bookies[(Math.random() * (bookies.length - 2) + 1).toFixed(0)]];
                let olo5 = bookUrl[bookies[(Math.random() * (bookies.length - 2) + 1).toFixed(0)]];

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
                        <td><Link to={(y.status==="Fin" || y.status==="In Play")?"#":"/match/" + y.idmatch+"/#cdate"} onClick={(y.status==="Fin" || y.status==="In Play")?this.please.bind(this,'No'):void(0)}><b>{y.name}</b></Link></td>
                        <td className="text-center" style={{ width: '7%', fontWeight: "bolder" }}>{y.results ? y.results[1].value : y.status}</td>
                      
                      
                        <td className="text-center" style={{ width: p,backgroundColor:'#007bffa8',fontWeight:"bolder" }}>
                            <a target="_blank"  id="link-2" href={temp[1].url} title={"Click to go to the bookmaker site "+ olo1.name} >
                                <span className={"logos l" + (y.data[19992]?y.data[19992].bookIdo1:olo1.idLogo)}></span>
                            {y.data[19992] ? this.props.format(y.data[19992].o1) : this.props.format((Math.random() * (max - min) + min).toFixed(2))}                            
                            </a>
                            </td>
                        <td className={(raw[i].sportName==="Baseball" || raw[i].sportName==="Tennis" || raw[i].sportName==="ESports"  || raw[i].sportName==="volleyball"  || raw[i].sportName==="Hockey" || raw[i].sportName==="aussie rules" || raw[i].sportName==="US Football"  || raw[i].sportName==="Basketball")?"hide":"text-center"} style={{ width: p,backgroundColor:'#007bffa8',fontWeight:"bolder" }}>
                            <a target="_blank"  id="link-2"href={temp[2].url} title={"Click to go to the bookmaker site "+ olo2.name} >
                                <span className={"logos l" + (y.data[19992]?y.data[19992].bookIdo2:olo2.idLogo)}></span>
                            {y.data[19992] ? this.props.format(y.data[19992].o2) : this.props.format((Math.random() * (max - min) + min).toFixed(2))}
                            </a>
                            </td>
                        <td className="text-center" style={{ width: p,backgroundColor:'#007bffa8',fontWeight:"bolder" }}>
                            <a target="_blank"  id="link-2" href={temp[3].url} title={"Click to go to the bookmaker site "+ olo3.name} >
                                <span className={"logos l" + (y.data[19992]?y.data[19992].bookIdo3:olo3.idLogo)}></span>
                            {y.data[19992] ? this.props.format(y.data[19992].o3) : this.props.format((Math.random() * (max - min) + min).toFixed(2))}
                            </a>
                            </td>

                        <td className="text-center" style={{ width: p,backgroundColor:'#21a700a8',fontWeight:"bolder" }}>
                            <a target="_blank"  id="link-2" href={tempo[1].url} title={"Click to go to the bookmaker site "+ olo4.name} >
                                <span className={"logos l" + (y.data[29992]?y.data[29992].bookIdo1:olo4.idLogo)}></span>
                            {y.data[29992] ? this.props.format(y.data[29992].o1)+"(> "+y.data[29992].o3+")" : this.props.format((Math.random() * (max - min) + min).toFixed(2))}
                            </a>
                            </td>
                        <td className="text-center" style={{ width: p,backgroundColor:'#21a700a8',fontWeight:"bolder" }}>
                            <a target="_blank"  id="link-2" href={tempo[2].url} title={"Click to go to the bookmaker site "+ olo5.name} >
                                <span className={"logos l" + (y.data[29992]?y.data[29992].bookIdo2:olo5.idLogo)}></span>
                            {y.data[29992] ? this.props.format(y.data[29992].o2)+"(< "+y.data[29992].o3+")": this.props.format((Math.random() * (max - min) + min).toFixed(2))}
                            </a>
                            </td>
                    </tr>
                )
            })
            return (
                <table key={i} id={i} className="table table-sm table-bordered bg-light">
                    <thead className="table-primary">
                        <tr >
                            <th colSpan='3' >{raw[i].sportName + " " + raw[i].name}</th>
                            <th className='text-center'>1</th>
                            <th className={(raw[i].sportName==="Baseball" || raw[i].sportName==="Tennis" || raw[i].sportName==="ESports"  || raw[i].sportName==="volleyball" || raw[i].sportName==="Hockey" || raw[i].sportName==="aussie rules" || raw[i].sportName==="US Football"  || raw[i].sportName==="Basketball")?'hide':'text-center'}>X</th>
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
                    <h4>
                          {
                        // strings.formatString(strings.format, "-110")
                        }
                        </h4>
                    {table}
                </div>

            </div>
        );
    }
}
export default Sport;