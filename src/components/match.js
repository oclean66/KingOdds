import React from "react";

import { Link } from 'react-router-dom';
// import { browserHistory } from 'react-router'
// let match;
// let odds;
class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: {},
            odds: {}
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        let context = this;
        if (!id) return;

        fetch('http://kingdeportes.com/geek/api/view/model/match/id/' + this.props.match.params.id).then(results => {
            return results.json();
        }).then(data => {
            context.setState({
                match: data
            })
            // console.log(data);
        });
        fetch('http://kingdeportes.com/geek/api/list/model/odds/id/' + this.props.match.params.id, { cache: "no-cache" }).then(results => {
            return results.json();
        }).then(data => {
            context.setState({
                odds: data
            })
            // console.log(data);
        });
    }
    componentWillUnmount() {
        this.setState({ match: {}, odds: {} })
    }
    render() {

        let e = this.state.match ? this.state.match : { time: 0, id: 0 };
        let f = this.state.odds ? this.state.odds : null; //lista de odds
        // let f=null;
        let timess = new Date(e.timestamp * 1000);
        // let utcOffset = 0;
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
        // console.log(timess);
        let list = f ? Object.keys(f).map(function (key) {
            // let i = key.replace(/\s|&/g, "");
            return (
                <option key={key} value={key}>
                    {f[key].name}
                </option>
                // <li key={i} className="nav-item border-primary" style={{ border: "solid 1px" }}>
                //     <Link className="nav-link " id={i + "-tab"} data-toggle="tab" to={"#" + i} role="tab" aria-controls={i} aria-selected="true">{key}</Link>
                // </li>
            )

        }) : null;

        if (list === null) {
            list = <div className="alert alert-primary" role="alert">
                No Odds Available!
                    </div>;
        } else {
            list = <select id='mySelect' className="form-control">
                <option data-icon="fa fa-clock" value="0">
                    Select a market
                        </option>
                {list}
            </select>
        }

        let tabs = f ? Object.keys(f).map(function (key) {
            let i = key;
            return (
                <li key={i} className="nav-item border-primary" style={{ border: "solid 1px" }}>
                    <Link className="nav-link " id={i + "-tab"} data-toggle="tab" to={"#" + i} role="tab" aria-controls={i} aria-selected="true">{f[key].name}</Link>
                </li>)

        }) : <li className="nav-item border-primary" style={{ border: "solid 1px" }}>
                <Link className="nav-link " data-toggle="tab" to={"#b"} role="tab" aria-selected="true">No data found!</Link>
            </li>;
        //f es la lista de odds agrupados por tipo
        let tabsConten = f ? Object.keys(f).map(function (key) {
            // let i = key; //id de tipo de logro
            let data = f[key].data; //lista de ofertas desordenas
            let tipoDraw = f[key].type;
            let tablehandicap;
            if (tipoDraw === "3" || tipoDraw === "4") {
                let listaOrdenada = [];
                //analizando ofertas de handicap desordenados
                Object.keys(data).map(kei => {
                    //kei // id de logros
                    //data[kei]// un logro {{data[kei].o1}}
                    // listaOrdenada[data[kei].o3][kei]=data[kei];
                    listaOrdenada[parseFloat(data[kei].o3)] = [];
                    return 0;
                    // console.log(kei,data[kei].o3)
                }); // la lista de ofertas sera analizada

                Object.keys(data).map(kei => {
                    listaOrdenada[parseFloat(data[kei].o3)][kei] = data[kei];
                    return 0;
                });

                // console.log(listaOrdenada)
                var sortable = [];
                for (var v in listaOrdenada) {
                    sortable.push([v, listaOrdenada[v]]);
                }
                // console.log(sortable)
                sortable.sort(function (a, b) {
                    return a[0] - b[0];
                });


                tablehandicap = sortable.map((kei, d) => {
                    // console.log(kei[1]);
                    // console.log(
                    let tr = Object.keys(kei[1])
                    // )
                    // console.log(d)
                    let ref = tr.map((i, g) => {
                        // console.log(kei[1][i])
                        let rows =
                            <tr key={i}>
                                <td><span className={"blogos l" + kei[1][i].bookId}></span><strong> {kei[1][i].name}</strong></td>
                                <td className="text-center">{kei[1][i].o1}</td>
                                <td className="text-center">{kei[1][i].o2}</td>
                                <td className="text-center" style={{ fontSize: 14, fontWeight: "bolder" }}>{kei[1][i].o3}</td>
                            </tr>

                        return rows
                    })
                    // ref[ref.length]=<tr key={d} colSpan="3"></tr>

                    // console.log(ref)
                    return ref;

                })
            }


            let auxc = Object.keys(data); //recibe lista de ofertas
            // if (auxc)

            let mino1 = 1000, mino2 = 1000, mino3 = 1000, mayo1 = 0, mayo2 = 0, mayo3 = 0;

            //table es salida para pintar una lista de ofertas
            let table;
            let bookUrls = {
                0: { name: "Bet at Home", id: 3, url: "http://wlbetathome.adsrv.eacdn.com/C.ashx?btag=a_88802b_35088c_&affid=61021&siteid=88802&adid=35088&c=" },
                1: { name: "William Hill", id: 15, url: "http://ads2.williamhill.com/redirect.aspx?pid=191753702&bid=1487416574&redirectURL=http://www.williamhill.com/" },
                2: { name: "Pinnacle", id: 18, url: "https://wlpinnacle.adsrv.eacdn.com/C.ashx?btag=a_17880b_15013c_&affid=17286&siteid=17880&adid=15013&c=" },
                3: { name: "Betsafe", id: 24, url: "http://record.betsafe.com/_iiM15Bc8GRB25MXmw6oCLUvHVvw20nG1/1/&media=177874&campaign=1" },
                4: { name: "888Sport", id: 27, url: "https://mmwebhandler.aff-online.com/C/35461?sr=1463893&anid=" },
                5: { name: "Intertops", id: 31, url: "http://link.intertops.eu/c/392472" },
                6: { name: "Nordicbet", id: 33, url: "http://record.nordicbet.com/_iiM15Bc8GRBg8Gn8XZ9_Tq1VAQ_WgLOB/1/&media=169385&campaign=1" },
                7: { name: "Betsson", id: 43, url: "http://record.betsson.com/_iiM15Bc8GRC7YwhTnKSg_nHybP8PsLu9/1/&media=178107&campaign=1" },
                8: { name: "Betfred", id: 21, url: "https://activewin.adsrv.eacdn.com/C.ashx?btag=a_49341b_15307c_&affid=34127&siteid=49341&adid=15307&c=" },
                9: { name: "Betvision", id: 76, url: "http://wlaceworldgaming.adsrv.eacdn.com/wl/clk/?btag=a_4251b_876&aid=" },
                10: { name: "12Bet", id: 80, url: "http://wlaceworldgaming.adsrv.eacdn.com/wl/clk/?btag=a_4251b_1400&aid=" },
                11: { name: "TitanBet ", id: 121, url: "https://online.europartners.com/page?member=rsg0106&campaign=DEFAULT&channel=DEFAULT&zone=13962342&lp=13524050" },
                12: { name: "Bwin", id: 2, url: "https://promo.bwin.com/en/promo/8040_2017_live_the_action?sb=1&bsbd=1&wm=4589693&zoneId=1824371" },
                13: { name: "Dafabet", id: 147, url: "https://banners.dfbanners.com/redirect.aspx?pid=43578&bid=3825&redirectURL=http://www.dafabet.com/" },
                14: { name: "Come on", id: 383, url: "https://www.comeon.com/?btag=662885_90365_25527_D336E05AA025440FB3A4609E1FDA05E6" },
                15: { name: "Matchbook", id: 390, url: "http://wlmatchbook.adsrv.eacdn.com/C.ashx?btag=a_3207b_2916c_&affid=2084&siteid=3207&adid=2916&c=" },
                16: { name: "18Bet", id: 416, url: "http://wl18bet.adsrv.eacdn.com/wl/clk/?btag=a_1971b_4" },
                17: { name: "1xbet", id: 417, url: "http://refpatog.host/L?tag=d_70919m_1599c_&site=70919&ad=1599" },

            }


            if (tipoDraw === "3" || tipoDraw === "4") {
                table = tablehandicap;
            } else {


                table = auxc.map(function (kei) {
                    let temp = [];
                    let list = Object.keys(bookUrls);
                    list.map(i => {
                        var x = 0;
                        if (bookUrls[i].id == data[kei].bookId) {
                            console.log(bookUrls[i].id, data[kei].bookId, i, list.length);
                            let p = i;
                            for (let index = i; index < list.length; index++) {
                                console.log("en ", parseInt(index), ' va ', (parseInt(index) + 1))
                                // bookUrls[parseInt(index)] = bookUrls[(parseInt(index)+1)];                                
                            }
                            // console.log(bookUrls)
                            // delete bookUrls[bookUrls.length]

                        } else {
                            temp.push(bookUrls[i]);
                            x = x + 1;
                        }

                    })
                    bookUrls = temp;
                    console.log(temp);
                    // console.log("key:"+kei); //id offer
                    if (mino1 > Number(data[kei].o1)) mino1 = Number(data[kei].o1);
                    if (mino2 > Number(data[kei].o2)) mino2 = Number(data[kei].o2);
                    if (mino3 > Number(data[kei].o3)) mino3 = Number(data[kei].o3);

                    if (mayo3 < Number(data[kei].o3)) mayo3 = Number(data[kei].o3);
                    if (mayo2 < Number(data[kei].o2)) mayo2 = Number(data[kei].o2);
                    if (mayo1 < Number(data[kei].o1)) mayo1 = Number(data[kei].o1);
                    // (data[kei].bookId in bookUrls)
                    // delete bookUrls[data[kei].bookId];
                    if (data[kei].bookId)
                        return (
                            <tr key={kei}>
                                <td><span className={"blogos l" + data[kei].bookId}></span><strong> {data[kei].name}</strong></td>
                                <td className="text-center">{data[kei].o1}</td>
                                <td className="text-center">{data[kei].o2}</td>
                                <td className={tipoDraw !== "2" ? "text-center" : "hide"}>{tipoDraw !== "2" ? data[kei].o3 : ""}</td>
                            </tr>
                        )
                    return null;
                });
            }


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
                11: { name: "TitanBet ", id: 121, logo: 32, url: "https://online.europartners.com/page?member=rsg0106&campaign=DEFAULT&channel=DEFAULT&zone=13962342&lp=13524050" },
                12: { name: "Bwin", id: 2, logo: 42, url: "https://promo.bwin.com/en/promo/8040_2017_live_the_action?sb=1&bsbd=1&wm=4589693&zoneId=1824371" },
                13: { name: "Dafabet", id: 147, logo: 26, url: "https://banners.dfbanners.com/redirect.aspx?pid=43578&bid=3825&redirectURL=http://www.dafabet.com/" },
                14: { name: "Come on", id: 383, logo: 23, url: "https://www.comeon.com/?btag=662885_90365_25527_D336E05AA025440FB3A4609E1FDA05E6" },
                15: { name: "Matchbook", id: 390, logo: 22, url: "http://wlmatchbook.adsrv.eacdn.com/C.ashx?btag=a_3207b_2916c_&affid=2084&siteid=3207&adid=2916&c=" },
                16: { name: "18Bet", id: 416, logo: 9, url: "http://wl18bet.adsrv.eacdn.com/wl/clk/?btag=a_1971b_4" },
                17: { name: "1xbet", id: 417, logo: 38, url: "http://refpatog.host/L?tag=d_70919m_1599c_&site=70919&ad=1599" },
            }



            // console.log(mino1, mino2, mino3, mayo1, mayo2, mayo3);
            mino1 = mino1 - 0.10;
            mino2 = mino2 - 0.10;
            mino3 = mino3 - 0.10;
            mayo1 = mayo1 + 0.10;
            mayo2 = mayo2 + 0.10;            
            mayo3 = mayo3 + 0.10;

            // let min = 1, max = 4.5;
            if (auxc.length < 30 && tipoDraw !== "3") {
                // console.log("Faltan: " + (30 - auxc.length));
                // console.table(table);
                let i = auxc.length;
                // let i = 1;
                while (i < auxc.length + bookUrls.length) {
                    let y = i - auxc.length;
                    let n;
                    // let n = (Math.random() * (18 - 0) + 0).toFixed(0);
                    // console.log("select: " + n);
                    n = bookUrls[y];
                    let help = {
                        bookId: n.id,
                        o1: (Math.random() * (mayo1 - mino1) + mino1).toFixed(2),
                        o2: (Math.random() * (mayo2 - mino2) + mino2).toFixed(2),
                        o3: (Math.random() * (mayo3 - mino3) + mino3).toFixed(2),
                        name: n.name
                    }
                    table[i] =
                        <tr key={i}>
                            <td><span className={"blogos l" + help.bookId}></span><strong> {help.name}.</strong></td>
                            <td className="text-center">{help.o1}</td>
                            <td className="text-center">{help.o2}</td>
                            <td className={tipoDraw !== "2" ? "text-center" : "hide"}>{tipoDraw !== "2" ? help.o3 : ""}</td>
                        </tr>

                    i++;
                }
            }
            // console.log(table);
            let headersT;
            if (tipoDraw === "3") {
                headersT = <tr className="table-primary">
                    <td> <strong>Bookmakers</strong></td>
                    <td className="text-center"> <strong></strong> </td>
                    <td className="text-center"> <strong></strong> </td>
                    <td className="text-center"> <strong>Handicap</strong> </td>

                </tr>
            } else if (tipoDraw === "2") {
                headersT = <tr className="table-primary">
                    <td> <strong>Bookmakers</strong></td>
                    <td className="text-center"> <strong>1</strong> </td>
                    <td className="text-center"> <strong>2</strong> </td>
                </tr>
            } else {
                headersT = <tr className="table-primary">
                    <td> <strong>Bookmakers</strong></td>
                    <td className="text-center"> <strong>1</strong> </td>
                    <td className="text-center"> <strong>X</strong> </td>
                    <td className="text-center"> <strong>2</strong> </td>

                </tr>
            }

            return (
                <div key={key} className="tab-pane fade" id={key} role="tabpanel" aria-labelledby={key + "-tab"}>
                    <div className="card">
                        <div className="card-body">
                            {/* <h5>{key}</h5> */}
                            <table className="table table-sm table-bordered bg-light">
                                <thead>
                                    {headersT}
                                </thead>
                                <tbody>
                                    {/* <tr><td>{e.hteamName}</td> */}
                                    {table.map((e, i) => {
                                        return e;
                                    })}

                                    {/* </tr> */}

                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            )

        }) : "";
        // document.getElementById("status").innerHTML = e.statusText;
        return (e.idmatch ?
            <div className="r">


                <div className="card text-center" style={{ boxShadow: "-1px -3px 4px 3px rgba(0, 0, 0, 0.1)" }}>
                <a href="#" onClick={this.props.history.goBack?this.props.history.goBack.bind():void(0)} className="btn btn-primary" style={{position:"absolute", top:10, left:10}}>  <i class="fas fa-arrow-circle-left"></i> Back</a>
                    <div className="card-header">
                        <h5>
                            <i className={"ficon-inline f-" + e.countryId}></i>
                            {e.sportName ? e.sportName + " " : "Sport "}
                            {e.leagueName ? e.leagueName + " " : "League "}
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">

                            <div className="col-sm-4">
                                <img src={"http://kingdeportes.com/geek/themes/flat/img/logos/"+e.hteamId+".png"} alt="..." className="img-thumbnail" style={{ width: 80 }} />
                            </div>
                            <div className="col-sm-4">

                                <h5 className="card-title">{e.name}</h5>
                                <h6>  {timess} </h6>
                                <a href="#" className={e.status == "Pro" ? "btn btn-success " : (e.status == "Fin" ? "btn btn-danger " : "btn btn-warning ")} style={{ marginLeft: 10 }}>
                                    <i className="far fa-clock"></i>
                                    {" " + hours + ":" + minutes }
                                </a>

                            </div>
                            <div className="col-sm-4">
                                <img src={"http://kingdeportes.com/geek/themes/flat/img/logos/"+e.ateamId+".png"} alt="..." className="img-thumbnail" style={{ width: 80 }} />
                            </div>
                        </div>


                    </div>
                    <div className="card-footer  text-left">
                        <div className="row">
                            <div className="col-sm-12">
                                {list}

                            </div>
                            <div className="col-sm-0 d-none">
                                <ul className="nav flex-column nav-pills border-primary" id="myTab" role="tablist">
                                    {tabs}

                                </ul>
                            </div>
                            <div className="col-sm-12">
                                <div className="tab-content" id="myTabContent">
                                    {tabsConten}
                                </div>
                                <div className="float-right">
                                    <small>provided by
                                    <Link
                                            onClick={() => { window.open('https://www.livescore.in/match/', 'popup', 'width=600,height=600,scrollbars=no,resizable=no'); return false; }}
                                            target="popup" to={"https://www.livescore.in/match/" + e.gsmid}> flashscore</Link></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className="card" style={{ alignItems: "center" }}>
                <div className="card-body" >
                    <div className="loader"></div>
                </div>
            </div>
        );
    }
}

export default Match;
