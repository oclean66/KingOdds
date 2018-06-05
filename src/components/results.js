import React from "react";
import firebase from '../fire';
import { Link } from 'react-router-dom';

const res = firebase.database().ref().child('results');
const dates = firebase.database().ref().child('dates');
let self;
class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [], affil: "/blank.txt",
            date: "", lista: [], sport:"Soccer"
        }
        this.changedate = this.changedate.bind(this);
         self = this;

    }
    static getDerivedStateFromProps(props, current_state) {
        // var self = this;
        if (current_state.sport !== props.match.params.id && props.match.params.id && props.match.params.id!=="blank.txt") {  
            res.child(self.state.date + "/"+props.match.params.id).on("value",snapshot=>{

                // console.log(snapshot.val());
                self.setState({
                    data: snapshot.val()
                  });
                  dates.orderByChild(props.match.params.id).equalTo(true).on("value", snapshot => {                    
                    self.setState({
                        lista: snapshot.val()
                    });
                    // console.log(snapshot.val());
                });
            });          
            return {sport:props.match.params.id};
        }
        return null;
    }
    openModal(event) {
        if (event.target !== undefined) {
           this.setState({affil:event.target.id})

        }        
    }
    componentDidMount() {
        let endpoint = this.props.match.params.id?this.props.match.params.id:"Soccer";
        endpoint =endpoint!=="blank.txt"?endpoint:this.state.sport;

        dates.orderByChild(this.state.sport).equalTo(true).on("value", snapshot => {
            // this.setState({
            //     lista: []
            // });
            // this.state.lista.push(snapshot.val())
            this.setState({
                lista: snapshot.val()
            });
            let me = 0;
            Object.keys(snapshot.val()).map(i=>{
               me = i;
               return null;
            })
            this.setState({
                date:me
            })

            res.child(me + "/"+endpoint).on("value", snapshot => {
                this.setState({
                    data: []
                });
                this.state.data.push(snapshot.val())
                this.setState({
                    data: snapshot.val()
                });
    
                // console.log(snapshot.val());
            });


            // console.log(snapshot.val());
        });
        this.setState({
            sport:this.props.match.params.id?this.props.match.params.id:this.state.sport
        })            
    }
    changedate(event) {
        if (event.target !== undefined) {
            // this.setState({date: event.target.value});
            this.setState({
                date: event.target.value
            })
            var amb = this;
            res.child(event.target.value+"/"+this.state.sport).on("value", snapshot => {
                var m = [];
                m.push(snapshot.val())
                amb.setState({
                    data: snapshot.val()
                });
                // console.log(snapshot.val());
            });
        }
    }
    render() {
        // let listas = this.state.affil.map(date=>{
        //    return <option value={date}>{date}</option>

        // })
        let listas = this.state.lista?Object.keys(this.state.lista):[]
        listas = listas.map(date => {
            return <option key={date} value={date}>{date}</option>
            // console.log(date);
        })
        // console.log(this.state.data);
        let data = this.state.data;
        let i = data?Object.keys(data):[];

        
        let content = i.map(c => {
            let y = data[c];
            // console.log(y);
            let matchid = Object.keys(y);

            // console.log(matchid);
            let icon = 1;
            let match = matchid.map(id => {

                let w = "12%";
                if (icon !== y[id].group) icon = y[id].group;

                let r = y[id].results;
                // r
                return (
                    <tr key={id} data-toggle="modal" data-target="#exampleModal" onClick={this.openModal.bind(this)}>
                        <th id={"https://www.livescore.in/match/"+id+"/"}  className='text-center' style={{ width: w }}>{y[id].time}</th>
                        <th id={"https://www.livescore.in/match/"+id+"/"}  className='text-center' style={{ width: w }}>{y[id].status}</th>
                        <th id={"https://www.livescore.in/match/"+id+"/"}  className='text-center' style={{ width:"25%"}}>{y[id].a}</th>
                        <th id={"https://www.livescore.in/match/"+id+"/"}  className='text-center' style={{ width: w }}>{r?r[1].value:"0-0"}</th>
                        <th id={"https://www.livescore.in/match/"+id+"/"}  className='text-center' style={{ width:"25%" }}>{y[id].b}</th>
                    </tr>
                )
            })
            return (

                <div key={c} className="table-responsive-lg">
                    <table className="table table-sm table-bordered bg-light">
                        <thead className="table-primary">
                            <tr >
                                <th colSpan='6' ><i className={"ficon-inline f-" + icon}></i>{c}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {match}
                        </tbody>
                    </table>
                </div>

            )
        })
        let info = (
            <div>               
                <div className="cold-sm-12 border">
                    <div className="card-bosdy">
                        <div className="tab-content">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        )
        let iframe = <iframe title="modal" src={this.state.affil} style={{ width: "100%", height: "100%", border: 0 }}></iframe>;
        // console.log(this.state);
        let sports = (this.state.lista!==undefined?Object.keys(this.state.lista).length>0:false)?
        (this.state.lista[this.state.date]?Object.keys(this.state.lista[this.state.date]):[]):[];
        // console.log(sports);
        sports = sports.map(i=>{
            return <Link key ={i} className="breadcrumb-item" to={"/results/"+i}>{i}</Link>
        });

        return (
            <div>
                <nav className="breadcrumb bg-white border">
                {sports}
                </nav>
                <div className="card">
                    <h5 className="card-title" style={{ padding: "10px 0px 0px 10px" }}>
                    <i className="fas fa-bullhorn"></i>  {this.state.sport} Live Scores 
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted" style={{ padding: "0px 0px 0px 10px" }}>Live scores of the ten most popular betting sports. Click on matches to see match details. </h6>
                    <div className="card-body">
                        <select id='mySelect' className="form-control my-2" value={this.state.date} onChange={this.changedate}>
                            {listas}
                        </select>
                        
                        <div className="card-bhody">
                            {info}
                        </div>
                    </div>

                </div>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document" >
                        <div className="modal-content" style={{ width: 600 }}>
                            <div className="modal-body" style={{ height: 940, width: 600, padding: 10, margin: 0 }}>

                                <div className="border" style={{ position: "absolute", backgroundColor: "rgb(0, 173, 238)",margin:-2,borderRadius:7, width: 584, height: 80, padding: 10 }}>
                                    <div style={{ position: "absolute", backgroundColor: "#00000000", top: 76, width: 599, height: 854, left: -10, padding: 10 }}> </div>
                                    <div className="row">
                                        <div className="col-sm-3 sm-auto text-white">
                                            <img src="/img/logo-small.png" alt="logo" style={{width: 172, margin: -10,padding:0}}/>                                        
                                        </div>
                                        <div className="col-sm-7 sm-auto text-white text-center">
                                            <h4 style={{paddingTop:10}}> Welcome to livescore</h4>
                                        </div>
                                        <div className="col-sm-2 sm-auto" style={{paddingTop:12}}>
                                            <button id="/blank.txt" type="button" className="btn btn-primary" data-dismiss="modal" aria-label="Close" onClick={this.openModal.bind(this)}>
                                            <i className="fas fa-times-circle"></i>
                                            </button>
                                        </div>
                                    </div>

                            </div>
                                {iframe}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;
