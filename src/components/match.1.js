import React from "react";
import firebase from '../fire';
// import { Link } from 'react-router-dom';
// const match = firebase.database().ref('groups/'+"20180426");

class Match extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            detail: {
                data: {}
            },
            date: "20180426",
            // datef: "20180426",
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // this.setState({
        //     date: this.props.date
        // });
        const { id, date } = this.props.match.params;
        // let d = this.state.date;
        // const _this = this;
        // let v = [];

        if (!id) return;

        let detail = firebase.database().ref('matches/' + date + '/' + id);
        console.log("l:" + date);
        detail.on("value", snapshot => {
            this.setState({
                detail: snapshot.val()
            });

        });


    }

    // static getDerivedStateFromProps(nextProps, prevState) {

    //     let prev = prevState.date;
    //     let snap = prevState.detail;

    //     // const { id } = nextProps.match.params;
    //     if (nextProps.date !== prevState.date) {
    //         // prev = nextProps.date;
    //         console.log(nextProps.date !== prevState.date)
    //         const { id } = nextProps.match.params;

    //         if (!id) return;
    //         const details = firebase.database().ref('matches/' + prev + '/' + id);
    //         // let snap = [];
    //         details.on('value', function (snapshot) {
    //             snap.push(snapshot.val());
    //             console.log(snap);
    //         });

    //         return {
    //             date: nextProps.date,
    //             detail: snap,
    //         };
    //     } else {
    //         return {
    //             date: nextProps.date,
    //             detail: snap,
    //         };
    //     }


    // }
    render() {

        let e = this.state.detail;
        // console.log(e);
        let timess = new Date(e.time);
        let utcOffset = 0;
        var hours = timess.getUTCHours() + parseInt(utcOffset, 10);
        // correct for number over 24, and negatives
        if (hours >= 24) { hours -= 24; }
        if (hours < 0) { hours += 12; }

        // add leading zero, first convert hours to string
        hours = hours + "";
        if (hours.length === 1) { hours = "0" + hours; }

        // minutes are the same on every time zone
        var minutes = timess.getUTCMinutes();

        // add leading zero, first convert hours to string
        minutes = minutes + "";
        if (minutes.length === 1) { minutes = "0" + minutes; }


        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dd = timess.getDate() + 1;
        dd = dd < 10 ? '0' + dd : dd;
        var today = months[timess.getMonth() - 1] + " " + dd + ", " + timess.getFullYear();
        timess = today;
        // console.log(timess);
        let tabs = Object.keys(e.data).map(function (key) {
            let i = key.replace(/\s|&/g, "");
            return (
                <li key={i} className="nav-item border-primary" style={{border:"solid 1px"}}>
                    <a className="nav-link " id={i + "-tab"} data-toggle="tab" href={"#" + i} role="tab" aria-controls={i} aria-selected="true">{key}</a>
                </li>)

        });
        let tabsConten = Object.keys(e.data).map(function (key) {
            let i = key.replace(/\s|&/g, "");
            let table = Object.keys(e.data[key]).map(function (kei) {
                console.log(e.data[key][kei].bookId);
                return [kei, <td key={kei} data-toggle="tooltip" data-placement="top" title={e.data[key][kei].name}><span className={"blogos l" + e.data[key][kei].bookId}></span> </td>,
                    <td key={kei}>{e.data[key][kei].o1}</td>,
                    <td key={kei}>{e.data[key][kei].o2}</td>,
                    <td key={kei}>{e.data[key][kei].o3}</td>]
            });
            // console.log(table);
            <span class="blogos l14"></span>
            return (
                <div key={i} className="tab-pane fade" id={i} role="tabpanel" aria-labelledby={i + "-tab"}>
                    <div className="card">
                        <div className="card-body">  {key}
                            <table className="table table-sm table-bordered">
                                <thead>
                                    <tr>
                                        <td> - </td>
                                        {table.map((e, i) => {
                                            return e[1];
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>{e.hteamName}</td>
                                        {table.map((e, i) => {
                                            return e[2];
                                        })}
                                    </tr>
                                    <tr><td> Draw </td>
                                        {table.map((e, i) => {
                                            return e[3];
                                        })}
                                    </tr>
                                    <tr><td>{e.hteamName}</td>
                                        {table.map((e, i) => {
                                            return e[4];
                                        })}
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            )

        });

        return (
            <div className="r">
                {
                    <div key={e.id} className="card">
                        <h5 className="card-title" style={{ padding: "10px 0px 0px 10px" }}><i className="far fa-clock"></i> {hours + ":" + minutes + " | " + e.hteamName + " vs " + e.ateamName + " " + e.status}</h5>
                        <h6 className="card-subtitle mb-2 text-muted" style={{ padding: "0px 0px 0px 10px" }}>{e.group ? e.group.gname + " | " + e.group.name + " - " + timess : ""}</h6>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <ul className="nav flex-column nav-pills border-primary" id="myTab" role="tablist">
                                        {tabs}

                                    </ul>
                                </div>
                                <div className="col-sm-9">
                                    <div className="tab-content" id="myTabContent">
                                        {tabsConten}
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                }
                {/* {
                    this.state.detail.map((e) => {
                        let timess = new Date(e.time);
                        let utcOffset = 0;
                        var hours = timess.getUTCHours() + parseInt(utcOffset, 10);
                        // correct for number over 24, and negatives
                        if (hours >= 24) { hours -= 24; }
                        if (hours < 0) { hours += 12; }

                        // add leading zero, first convert hours to string
                        hours = hours + "";
                        if (hours.length === 1) { hours = "0" + hours; }

                        // minutes are the same on every time zone
                        var minutes = timess.getUTCMinutes();

                        // add leading zero, first convert hours to string
                        minutes = minutes + "";
                        if (minutes.length === 1) { minutes = "0" + minutes; }


                        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        var dd = timess.getDate() + 1;
                        dd = dd < 10 ? '0' + dd : dd;
                        var today = months[timess.getMonth() - 1] + " " + dd + ", " + timess.getFullYear();
                        timess = today;
                        // console.log(timess);
                        let tabs = Object.keys(e.data).map(function (key) {
                            let i = key.replace(/\s|&/g, "");
                            return (
                                <li key={i} className="nav-item">
                                    <a className="nav-link " id={i + "-tab"} data-toggle="tab" href={"#" + i} role="tab" aria-controls={i} aria-selected="true">{key}</a>
                                </li>)

                        });
                        let tabsConten = Object.keys(e.data).map(function (key) {
                            let i = key.replace(/\s|&/g, "");
                            let table = Object.keys(e.data[key]).map(function (kei) {

                                return [kei, <td>{e.data[key][kei].name} </td>]
                            });
                            console.log(table);
                            return (
                                <div key={i} className="tab-pane fade" id={i} role="tabpanel" aria-labelledby={i + "-tab"}>
                                    <div className="card">
                                        <div className="card-body">  {i}
                                            <table className="table table-sm table-bordered">
                                                <thead>
                                                    <tr>
                                                        {table.map((e, i) => {
                                                            return e[1];
                                                        })}
                                                    </tr>
                                                </thead>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                            )

                        });
                        return (
                            <div key={e.id} className="card">
                                <h5 className="card-title" style={{ padding: "10px 0px 0px 10px" }}><i className="far fa-clock"></i> {hours + ":" + minutes + " | " + e.hteamName + " vs " + e.ateamName + " " + e.status}</h5>
                                <h6 className="card-subtitle mb-2 text-muted" style={{ padding: "0px 0px 0px 10px" }}>{e.group.gname + " | " + e.group.name + " - " + timess}</h6>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <ul className="nav nav-tabs nav-fill flex-column" id="myTab" role="tablist">
                                                {tabs}

                                            </ul>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="tab-content" id="myTabContent">
                                                {tabsConten}
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>
                        );
                    })
                } */}
            </div>
        );
    }
}

export default Match;
