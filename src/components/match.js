import React from "react";

import { Link } from 'react-router-dom';

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

        fetch('http://kingdeportes.com/oddsMaster/api/view/model/match/id/' + this.props.match.params.id).then(results => {
            return results.json();
        }).then(data => {
            context.setState({
                match: data
            })
            // console.log(data);
        });
        fetch('http://kingdeportes.com/oddsMaster/api/list/model/odds/id/' + this.props.match.params.id, { cache: "no-cache" }).then(results => {
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
        let f = this.state.odds ? this.state.odds : null;
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

        let tabsConten = f ? Object.keys(f).map(function (key) {
            let i = key;
            let data = f[key].data;
            // console.log("Data Leng:"+data.length);
            let auxc = Object.keys(data);
            // if (auxc)



            let mino1=1000, mino2=1000, mino3=1000, mayo1=0, mayo2=0, mayo3=0;
            let table = auxc.map(function (kei) {
                if (mino1 > Number(data[kei].o1)) mino1 = Number(data[kei].o1);
                if (mino2 > Number(data[kei].o2)) mino2 = Number(data[kei].o2);
                if (mino3 > Number(data[kei].o3)) mino3 = Number(data[kei].o3);

                if (mayo3 < Number(data[kei].o3)) mayo3 = Number(data[kei].o3);
                if (mayo2 < Number(data[kei].o2)) mayo2 = Number(data[kei].o2);
                if (mayo1 < Number(data[kei].o1)) mayo1 = Number(data[kei].o1);
                
                if (data[kei].bookId)
                    return (
                        <tr key={kei}>
                            <td><span className={"blogos l" + data[kei].bookId}></span><strong> {data[kei].name}</strong></td>
                            <td className="text-center">{data[kei].o1}</td>
                            <td className="text-center">{data[kei].o2}</td>
                            <td className="text-center">{data[kei].o3}</td>
                        </tr>
                    )
                return null;
            });
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

            console.log(mino1, mino2, mino3, mayo1, mayo2, mayo3);
            mino1=mino1-0.5, mino2=mino2-0.5, mino3=mino3-0.5, mayo1=mayo1+0.5, mayo2=mayo2+0.5, mayo3=mayo3+0.5;
            // let min = 1, max = 4.5;
            if (auxc.length < 30) {
                // console.log("Faltan: " + (30 - auxc.length));
                // console.table(table);
                let i = auxc.length;
                // let i = 1;
                while (i < auxc.length+19) {
                    let y =i-auxc.length;
                    let n;
                    // let n = (Math.random() * (18 - 0) + 0).toFixed(0);
                    // console.log("select: " + n);
                    n = bookUrl[y];
                    let help = {
                        bookId: n.id,
                        o1: (Math.random() * (mayo1 - mino1) + mino1).toFixed(2),
                        o2: (Math.random() * (mayo2 - mino2) + mino2).toFixed(2),
                        o3: (Math.random() * (mayo3 - mino3) + mino3).toFixed(2),
                        name: n.name
                    }
                    table[i] =
                        <tr key={i}>
                            <td><span className={"blogos l" + help.bookId}></span><strong> {help.name}</strong></td>
                            <td className="text-center">{help.o1}</td>
                            <td className="text-center">{help.o2}</td>
                            <td className="text-center">{help.o3}</td>
                        </tr>

                    i++;
                }
            }
            // console.log(table);

            return (
                <div key={i} className="tab-pane fade" id={i} role="tabpanel" aria-labelledby={i + "-tab"}>
                    <div className="card">
                        <div className="card-body">
                            {/* <h5>{key}</h5> */}
                            <table className="table table-sm table-bordered bg-light">
                                <thead>
                                    <tr className="table-primary">
                                        <td> <strong>Bookmakers</strong></td>
                                        <td className="text-center"> <strong>1</strong> </td>
                                        <td className="text-center"> <strong>X</strong> </td>
                                        <td className="text-center"> <strong>2</strong> </td>

                                    </tr>
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
                <div key={e.id} className="card">
                    <h5 className="card-title" style={{ padding: "10px 0px 0px 10px" }}>
                        <i className={"ficon-inline f-" + e.countryId}></i>
                        {e.sportName ? e.sportName + " " : "Sport "}
                        {/* {e.countryName ? e.countryName + " " : "Country "} */}
                        {e.leagueName ? e.leagueName + " " : "League "}
                    </h5>
                    <h5 className="card-title" style={{ padding: "10px 0px 0px 10px" }}>
                        <i className="far fa-clock"></i>
                        {" " + hours + ":" + minutes + " | " + e.name}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted" style={{ padding: "0px 0px 0px 10px" }}>
                        {timess}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-black" style={{ color: 'black !important', padding: "0px 0px 0px 10px" }} id="status">
                        {e.statusText ? e.statusText.replace(/(<\/?(\s|\S)*?>)/g, '') : e.status}
                    </h6>
                    <div className="card-body">
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
