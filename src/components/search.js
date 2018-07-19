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
                // var generator = new Random(seed);

                // let bookUrl = {
                //     0: { name: "Bet at Home", id: 3, logo: 39, },
                //     1: { name: "William Hill", id: 15, logo: 4, },
                //     2: { name: "Pinnacle", id: 18, logo: 2, },
                //     3: { name: "Betsafe", id: 24, logo: 6, },
                //     4: { name: "888Sport", id: 27, logo: 31, },
                //     5: { name: "Intertops", id: 31, logo: 3, },
                //     6: { name: "Nordicbet", id: 33, logo: 7, },
                //     7: { name: "Betsson", id: 43, logo: 5, },
                //     8: { name: "Betfred", id: 44, logo: 40, },
                //     9: { name: "Betvision", id: 76, logo: 13, },
                //     10: { name: "12Bet", id: 80, logo: 16, },
                //     11: { name: "TitanBet ", id: 121, logo: 32, },
                //     12: { name: "Bwin", id: 128, logo: 42, },
                //     13: { name: "Dafabet", id: 147, logo: 26, },
                //     14: { name: "Come on", id: 383, logo: 23, },
                //     15: { name: "Matchbook", id: 390, logo: 22, },
                //     16: { name: "18Bet", id: 416, logo: 9, },
                //     17: { name: "1xbet", id: 417, logo: 38, },
                //     18: { name: "Betonline", id: 446, logo: 34, },
                // }
                let bookUrl = {
                    0: { name: "Bet at Home", id: 3, logo: 39, url: "http://wlbetathome.adsrv.eacdn.com/C.ashx?btag=a_88802b_35088c_&affid=61021&siteid=88802&adid=35088&c=" },
                    1: { name: "William Hill", id: 15, logo: 4, url: "http://ads2.williamhill.com/redirect.aspx?pid=191753702&bid=1487416574&redirectURL=http://www.williamhill.com/" },
                    2: { name: "Pinnacle", id: 18, logo: 2, url: "https://wlpinnacle.adsrv.eacdn.com/C.ashx?btag=a_17880b_15013c_&affid=17286&siteid=17880&adid=15013&c=" },
                    3: { name: "Betsafe", id: 24, logo: 6, url: "http://record.betsafe.com/_iiM15Bc8GRB25MXmw6oCLUvHVvw20nG1/1/&media=177874&campaign=1" },
                    4: { name: "888Sport", id: 27, logo: 31, url: "https://mmwebhandler.aff-online.com/C/35461?sr=1463893&anid=" },
                    5: { name: "Intertops", id: 31, logo: 3, url: "http://link.intertops.eu/c/392472" },
                    6: { name: "Nordicbet", id: 33, logo: 7, url: "http://record.nordicbet.com/_iiM15Bc8GRBg8Gn8XZ9_Tq1VAQ_WgLOB/1/&media=169385&campaign=1" },
                    7: { name: "Betsson", id: 43, logo: 5, url: "http://record.betsson.com/_iiM15Bc8GRC7YwhTnKSg_nHybP8PsLu9/1/&media=178107&campaign=1" },
                    8: { name: "Betfred", id: 21, logo: 40, url: "https://activewin.adsrv.eacdn.com/C.ashx?btag=a_49341b_15307c_&affid=34127&siteid=49341&adid=15307&c=" },
                    9: { name: "Betvision", id: 76, logo: 13, url: "http://wlaceworldgaming.adsrv.eacdn.com/wl/clk/?btag=a_4251b_876&aid=" },
                    10: { name: "12Bet", id: 80, logo: 16, url: "http://wlaceworldgaming.adsrv.eacdn.com/wl/clk/?btag=a_4251b_1400&aid=" },
                    11: { name: "TitanBet ", id: 121, logo: 32, url: "https://online.europartners.com/page?member=rsg0106&campaign=DEFAULT&channel=DEFAULT&zone=13962043&lp=13768449" },
                    12: { name: "Bwin", id: 2, logo: 42, url: "https://promo.bwin.com/en/promo/8040_2017_live_the_action?sb=1&bsbd=1&wm=4589693&zoneId=1824371" },
                    13: { name: "Dafabet", id: 147, logo: 26, url: "https://banners.dfbanners.com/redirect.aspx?pid=43578&bid=3825&redirectURL=http://www.dafabet.com/" },
                    14: { name: "Come on", id: 383, logo: 23, url: "https://www.comeon.com/?btag=662885_90365_25527_D336E05AA025440FB3A4609E1FDA05E6" },
                    15: { name: "Matchbook", id: 390, logo: 22, url: "http://wlmatchbook.adsrv.eacdn.com/C.ashx?btag=a_3207b_2916c_&affid=2084&siteid=3207&adid=2916&c=" },
                    16: { name: "18Bet", id: 416, logo: 9, url: "http://wl18bet.adsrv.eacdn.com/wl/clk/?btag=a_1971b_4" },
                    17: { name: "1xbet", id: 417, logo: 38, url: "http://refpatog.host/L?tag=d_70919m_1599c_&site=70919&ad=1599" },
                }
                // console.log((Math.random() * (18 - 2) + 2).toFixed(0));
                // let olo = bookUrl[(Math.random() * (18 - 2) + 2).toFixed(0)];

                let olo1 = bookUrl[(Math.random() * (17 - 1) + 1).toFixed(0)];
                let olo2 = bookUrl[(Math.random() * (17 - 1) + 1).toFixed(0)];
                let olo3 = bookUrl[(Math.random() * (17 - 1) + 1).toFixed(0)];
                let olo4 = bookUrl[(Math.random() * (17 - 1) + 1).toFixed(0)];
                let olo5 = bookUrl[(Math.random() * (17 - 1) + 1).toFixed(0)];

                // y.data[19992]?

                return (
                    <tr key={y.idmatch}>
                        <th className="text-center" style={{ width: p, fontWeight: "bolder",backgroundColor:y.status=="In Play"?"#ffd559":(y.status=="Fin"?"red":"#d3d3d34f"), color:y.status=="Fin"?"white":"black" }}>{hours + ":" + minutes}<br /><small><b>{timess}</b></small></th>
                        <td><Link to={(y.status=="Fin" || y.status=="In Play")?"#":"/match/" + y.idmatch} onClick={(y.status=="Fin" || y.status=="In Play")?this.please.bind(this,'No'):void(0)} ><b>{y.name}</b></Link></td>
                        <td className="text-center" style={{ width: '7%', fontWeight: "bolder" }}>{y.results ? y.results[1].value : y.status}</td>


                        <td className="text-center" style={{ width: p, backgroundColor: 'rgb(184, 218, 255)', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={olo1.url} title={"Click to go to the bookmaker site " + olo1.name} >
                                <span className={"logos l" + olo1.id}></span>
                            </a>
                            {y.data[19992] ? y.data[19992].o1 : (Math.random() * (max - min) + min).toFixed(2)}
                        </td>

                        <td className={item.sportName=="Baseball"?"hide":"text-center"} style={{ width: p, backgroundColor: 'rgb(184, 218, 255)', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={olo2.url} title={"Click to go to the bookmaker site " + olo2.name} >
                                <span className={"logos l" + olo2.id}></span>
                            </a>
                            {y.data[19992] ? y.data[19992].o2 : (Math.random() * (max - min) + min).toFixed(2)}
                        </td>

                        <td className="text-center" style={{ width: p, backgroundColor: 'rgb(184, 218, 255)', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={olo3.url} title={"Click to go to the bookmaker site " + olo3.name} >
                                <span className={"logos l" + olo3.id}></span>
                            </a>
                            {y.data[19992] ? y.data[19992].o3 : (Math.random() * (max - min) + min).toFixed(2)}
                        </td>




                        <td className="text-center" style={{ width: p, backgroundColor: '#AED581', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={olo4.url} title={"Click to go to the bookmaker site " + olo4.name} >
                                <span className={"logos l" + olo4.id}></span>
                            </a>
                            {y.data[29992] ? y.data[29992].o1 + "(> " + y.data[29992].o3 + ")" : ((Math.random() * (max - min) + min).toFixed(2)) + " (2.5)"}
                        </td>

                        <td className="text-center" style={{ width: p, backgroundColor: '#AED581', fontWeight: "bolder" }}>
                            <a id="link-2" target="_blank" href={olo5.url} title={"Click to go to the bookmaker site " + olo5.name} >
                                <span className={"logos l" + olo5.id}></span>
                            </a>
                            {y.data[29992] ? y.data[29992].o2 + "(< " + y.data[29992].o3 + ")" : ((Math.random() * (max - min) + min).toFixed(2)) + " (2.5)"}
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
                            <th className={item.sportName=="Baseball"?"hide":'text-center'}>X</th>
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
