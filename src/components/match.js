import React from "react";
import firebase from '../fire';
// import { Link } from 'react-router-dom';
// const match = firebase.database().ref('groups/'+"20180426");

class Match extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            detail: {},
            date: "20180426",
            // datef: "20180426",
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // this.setState({
        //     date: this.props.date
        // });
        const { id } = this.props.match.params;
        const _this = this;

        if (!id) return;

        // const detail = firebase.database().ref('matches');
        const detail = firebase.database().ref('matches/' + this.state.date + '/' + id);
        console.log("l:"+this.state.date);
        detail.on("value", snapshot => {
            console.log(snapshot.val());//*

            this.setState({
                detail: []
            });
            this.state.detail.push(snapshot.val())
            this.setState({
                detail: snapshot.val()
            });

        });


    }
    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps);
        // console.log(prevState)
        let snap = prevState.date
        if (nextProps.date !== prevState.date) {
            console.log("p: " + prevState.date);
            console.log("n:" + nextProps.date);
            snap = nextProps.date

        }
        return {
            date: snap
        }
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     // console.log(nextProps);
    //     // console.log(prevState)
    //     if (nextProps.date !== prevState.date) {
    //         const { id } = nextProps.match.params;
    //         const _this = this;

    //         if (!id) return;
    //         const details = firebase.database().ref('matches/' + nextProps.date + '/' + id);
    //         let snap = [];


    //         details.on('value', function (snapshot) {
    //             snap.push(snapshot.val());
    //             // console.log(snap);

    //         });

    //         return {
    //             last: prevState.date,
    //             date: nextProps.date,
    //             detail: snap,
    //             id: id
    //         };
    //     }
    //     return null;
    // }
    render() {


        return (
            <div className="r">
                {
                    // this.state.detail.map((e) => {
                    //     console.log(e);
                    //     return (
                    //         <div className="card">
                    //             <div className="card-body"> {e.id}  </div>
                    //         </div>
                    //     );
                    // })
                }
            </div>
        );
    }
}

export default Match;
