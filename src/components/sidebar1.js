import React from "react";
// import "../css/sidebar.css";
import firebase from '../fire';
import { Link } from 'react-router-dom';

var today = new Date();
var dd = today.getDate()+1;
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
dd = dd < 10 ? '0' + dd : dd;
mm = mm < 10 ? '0' + mm : mm;
today = yyyy + mm + dd;
     
const sports = firebase.database().ref().child('sports');
const groups = firebase.database().ref('groups/20180428');

class SideBar extends React.Component {
  constructor() {
    super()
    this.state = { sports: [], groups:[] }
  }
  componentDidMount() {

    sports.on("value", snapshot => {
      this.setState({
        sports: []
      });
      this.state.sports.push(snapshot.val())
      this.setState({
        sports: snapshot.val()
      });

      console.log(snapshot.val());
    });
    groups.on("value", snapshot => {
      this.setState({
        groups: []
      });
      this.state.groups.push(snapshot.val())
      this.setState({
        groups: snapshot.val()
      });

      // console.log(this.state.groups);
    });

  }
  render() {
    let a = this.state.sports;
    let b = this.state.groups;
    let s = a!==null?Object.keys(a).map(function (i) {
      let g = Object.keys(b).map(function (y) {
        if (b[y].spid === a[i].id) { 
  
          return (
            <li key={y}>
              <a href="">{b[y].name}</a>
            </li>
         )
        }
      });
      
      // console.log(g);
      

      return (
        <li key={i} className="">
          <a href={"#"+i} data-toggle="collapse" aria-expanded="false">
           <i className={"icons "+a[i].class} />
            { a[i].name}
          </a>
          <ul className="collapse list-unstyled" id={i}>
            <li><Link to="/">Today's Matches</Link></li>
            <li><Link to="/">Example 1 </Link></li>
            <li><Link to="/about">Example 2 </Link></li>
            <li>
              <a href={"#b"+i} data-toggle="collapse" aria-expanded="false">Example 3 </a>
              <ul className="collapse list-unstyled" id={"b"+i}>
                <li><Link to="/">Example 3.1</Link></li>
                <li><Link to="/">Example 3.2</Link></li>
                <li><Link to="/">Example 3.3</Link></li>
              </ul>
            </li>
            {g}
            
            </ul>
        </li>
      )
    }):"";
    
   
    return (
      <nav id="sidebar" className="" style={{ borderRadius: "10px 0 0 10px" }}>


        <ul className="list-unstyled components">
          <li className="sidebar-header-item" style={{ color: "#7386D5", background: "#fff", borderRadius: "10px 0 0 0" }}>
            <a href="" style={{ borderRadius: "10 0 0 0" }}>
              <i className="icons sicon-olympic-games" />
              SPORTS
            </a>
          </li>
          
         {s}
          <li>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
              <i className="icons sicon-sport-7" />
              Pages
            </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="">Page 1</a>
              </li>
              <li>
                <a href="">Page 2</a>
              </li>
              <li>
                <a href="">Page 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideBar;
