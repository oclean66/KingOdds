import React from "react";
import firebase from '../fire';

const matches = firebase.database().ref('matchesAll');
class Sport extends React.Component {
    constructor() {
        super()
        this.state = { matches: [] }
    }

    componentDidMount() {
        
            matches.on("value", snapshot => {
           
            this.setState({
                matches: snapshot.val()
            });

            console.log(snapshot.val());
        });


    }
    //** Recibe array de objetos **/
    generarTabla(data) {
        if (data) {
            // console.log("Pintando datos... ");
            let headers = [];
            headers[0] = "HORA"
            headers[1] = "Nombre de la liga de cansones";
            // console.table(data);
            let idmatches = Object.keys(data);
            let odds = idmatches.map((id) => { return data[id].odds });
            let matchesObj = idmatches.map((id) => { return data[id] });
            let idodds;
            odds.map((item) => {
                // console.log("Pintado Odds");
                // console.table(item);
                idodds = Object.keys(item);
                // console.log("ids:");
                // console.log("Llaves", idodds);

                idodds.map((idodd) => {
                    headers[idodd] = item[idodd].shortname;
                    // console.log(item[idodd]);
                    return null
                });
                return null;
            });

            headers['z'] = "MAS";

            // console.log("headers",headers);
            let x = Object.keys(headers);
            headers = x.map((i) => {
                // console.log(i, e);
                return <th key={i} className='text-center'>{headers[i]}</th>
            })
            let flujo = matchesObj;
            let rows = flujo.map((i, id) => {

                let p = x.map((i) => { return i });
                // console.log(p);
                let off = p.map((j) => {
                    return i.odds[j] ?
                        <td key={i.idmatch + 'i' + j} className={j}>
                            <div>
                                <div className='btn botn' onClick={
                                    this.props.addTocart.bind(this, i.idmatch, {
                                        choose: 1, id: i.idmatch, name: i.fullname, 
                                        odd: i.odds[j].o1+" ("+i.odds[j].o3+")", option: "Over", price: i.odds[j].o1, 
                                        time: i.time, type: j, version: i.odds[j].o1,
                                    }
                                    )} >{i.odds[j].o1}</div>
                                <div className="btn botn">{i.odds[j].o2}</div>
                                <div className="btn botn">{i.odds[j].o3}</div>
                            </div>
                        </td>
                        : (j > 2 ? <td key={j}></td> : (j === 'z' ? <td key={j}><i className='ion-android-add-circle' style={{ marginLeft: 10 }}></i></td> : null))
                });
                return (
                    <tr key={id}>
                        <th>{i.time}</th>
                        <th><i className={"ficon-inline f-" + i.countryId}></i>{i.fullname}</th>
                        {off}
                    </tr>
                )
            });

            // console.log(headers);

            return (
                <table className="table table-sm table-bordered bg-light">
                    <thead className="table-primary">
                        <tr >
                            {headers}
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            )
        }


    }

    render() {
        return (
            "hola, cmo estas"
        );
    }
}
export default Sport;