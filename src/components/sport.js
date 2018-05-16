import React from "react";
import firebase from '../fire';

const matches = firebase.database().ref('menu');
class Sport extends React.Component {
    constructor() {
        super()
        this.state = { matches: [] }
    }

    componentDidMount() {
        console.log(1525615200 > (Date.now()/1000));
        // matches.orderByChild('{idgroup}/{idleague}/{idmacth}/timestamp').startAt('0').on("value", snapshot => {
            matches.orderByChild('group/{idleague}/{idevent}/name').equalTo('Super League').once("value", snapshot => {
            this.setState({
                matches: []
            });
            this.state.matches.push(snapshot.val())
            this.setState({
                matches: snapshot.val()
            });

            console.log(snapshot.val());
        });


    }

    render() {
        return (
            "hola, cmo estas"
        );
    }
}
export default Sport;