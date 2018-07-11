import React from "react";
import { Link } from "react-router-dom";
import LocalizedStrings from 'react-localization';
var numeral = require('numeral');
const p = "10%";
var number;
let strings = new LocalizedStrings({
    uk:{
        format: function(number){
            return number
        }
    },
    us: {
        format:"I'd liked {0}"
    }
   });


class Sport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            format:""

        }
     
    }

    static getDerivedStateFromProps(props, current_state) {

        // console.log(props.match.params);
        if (current_state.format !== props.format) {
            strings.setLanguage(props.format);
           return({
               format:props.format
           })
        }
        return null;
    }
    componentDidMount() {
        let context = this;
        // this.setState(this.props.strings)
        fetch('http://kingdeportes.com/geek/api/list/model/next',{cache:"no-cache"}).then(results => {
            return results.json();
        }).then(data => {
            context.setState({
                data: data,
            })
        });

        numeral.register('format', 'uk', {
            regexps: {
                format: /(%)/,
                unformat: /(%)/
            },
            format: function(value, format, roundingFunction) {
                var space = numeral._.includes(format, ' %') ? ' ' : '',
                    output;
        
                value = value * 100;
        
                // check for space before %
                format = format.replace(/\s?\%/, '');
        
                output = numeral._.numberToFormat(value, format, roundingFunction);
        
                if (numeral._.includes(output, ')')) {
                    output = output.split('');
        
                    output.splice(-1, 0, space + '%');
        
                    output = output.join('');
                } else {
                    output = output + space + '%';
                }
        
                return output;
            },
            unformat: function(string) {
                return numeral._.stringToNumber(string) * 0.01;
            }
        });
        
        
        // switch between locales
        // numeral.locale('fr');

         number = numeral(20);
         number.format('0%')
         console.log(number.format())

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
                // console.log((Math.random() * (18 - 2) + 2).toFixed(0));
                 let olo=bookUrl[(Math.random() * (18 - 2) + 2).toFixed(0)];

                return (
                    <tr key={y.idmatch}>
                        <th className="text-center" style={{ width: p, fontWeight: "bolder" }}>{hours + ":" + minutes}<br /><small><b>{timess}</b></small></th>
                        <td><Link to={"/match/" + y.idmatch}><b>{y.name}</b></Link></td>
                        <td className="text-center" style={{ width: '7%', fontWeight: "bolder" }}>{y.results ? y.results[1].value : y.status}</td>
                      
                      
                        <td className="text-center" style={{ width: p,backgroundColor:'#007bffa8',fontWeight:"bolder" }}>
                            <a id="link-2" href={"http://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_"+olo.id} title={"Click to go to the bookmaker site "+ olo.name} >
                                <span className={"logos l" + olo.id}></span>
                            </a>
                            {y.data[19992] ? y.data[19992].o1 : (Math.random() * (max - min) + min).toFixed(2)}</td>
                        <td className="text-center" style={{ width: p,backgroundColor:'#007bffa8',fontWeight:"bolder" }}>
                            <a id="link-2"href={"http://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_"+olo.id} title={"Click to go to the bookmaker site "+ olo.name} >
                                <span className={"logos l" + olo.id}></span>
                            </a>
                            {y.data[19992] ? y.data[19992].o2 : (Math.random() * (max - min) + min).toFixed(2)}</td>
                        <td className="text-center" style={{ width: p,backgroundColor:'#007bffa8',fontWeight:"bolder" }}>
                            <a id="link-2" href={"http://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_"+olo.id} title={"Click to go to the bookmaker site "+ olo.name} >
                                <span className={"logos l" + olo.id}></span>
                            </a>
                            {y.data[19992] ? y.data[19992].o3 : (Math.random() * (max - min) + min).toFixed(2)}</td>

                        <td className="text-center" style={{ width: p,backgroundColor:'#21a700a8',fontWeight:"bolder" }}>
                            <a id="link-2" href={"http://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_"+olo.id} title={"Click to go to the bookmaker site "+ olo.name} >
                                <span className={"logos l" +olo.id}></span>
                            </a>
                            {y.data[29992] ? y.data[29992].o1+"(> "+y.data[29992].o3+")" : (Math.random() * (max - min) + min).toFixed(2)}</td>
                        <td className="text-center" style={{ width: p,backgroundColor:'#21a700a8',fontWeight:"bolder" }}>
                            <a id="link-2" href={"http://www.rockstarsportsaffiliates.com/idevaffiliate.php?id=105_"+olo.id} title={"Click to go to the bookmaker site "+ olo.name} >
                                <span className={"logos l" + olo.id}></span>
                            </a>
                            {y.data[29992] ? y.data[29992].o2+"(< "+y.data[29992].o3+")": (Math.random() * (max - min) + min).toFixed(2)}</td>
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