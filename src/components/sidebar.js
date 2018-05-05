import React from "react";
// import "../css/sidebar.css";
import firebase from '../fire';
import { Link } from 'react-router-dom';

var today = new Date();
var dd = today.getUTCDate();
var mm = today.getUTCMonth() + 1; //January is 0!
var yyyy = today.getUTCFullYear();
dd = dd < 10 ? '0' + dd : dd;
mm = mm < 10 ? '0' + mm : mm;
today = yyyy + mm + dd;
// var utctoday='';
// var utctoday = yyyy + "-" + mm + "-" + dd;

const menu = firebase.database().ref().child('menu');


class SideBar extends React.Component {
  constructor() {
    super()
    this.state = { menu: [] }
  }
  componentDidMount() {

    menu.on("value", snapshot => {
      this.setState({
        menu: []
      });
      this.state.menu.push(snapshot.val())
      this.setState({
        menu: snapshot.val()
      });

      // console.log(snapshot.val());
    });


  }
  render() {
    let a, b, c, s, t, q, w,k;
    a = this.state.menu;

    if (a !== null && a !== undefined) {
      // console.log(a);
      s = Object.keys(a).map(function (i) {
        k = false;
        b = a[i].groups;
        t = b ? Object.keys(b).map((y) => {
          w = false;
          c = b[y];
          q = Object.keys(c).map((z) => {
            if (c[z].lastseen) {
              let ls = new Date(c[z].lastseen);
              // console.log(ls.getUTCFullYear() + "-" + (ls.getUTCMonth() + 1) + "-" + ls.getUTCDate());
              ls = Date.UTC(ls.getUTCFullYear(), ls.getUTCMonth() + 1, ls.getUTCDate());
              // console.log("ls: " + ls);
              // utctoday = Date.UTC(yyyy, mm, dd);
              // console.log("today: " + utctoday);
              // console.log("today+5: " + Date.UTC(yyyy, mm, dd+5));

              // console.log("today+5: "+new Date(Date.UTC(yyyy, mm, dd+5)).getUTCDate());
              if (ls >= Date.UTC(yyyy, mm, dd - 7) && ls <= Date.UTC(yyyy, mm, dd + 5)) {
                // console.log("true");
                w = true;
                k = true;
                return <li key={z}><Link to={"/odds/" + i + "/" + y + "/" + z+"#card"}>{c[z].name}</Link></li>
              } else return null;
            } else return null;
           
          });
          if (w)
            return (
              <li key={y}>
                <Link to={"#" + i + "b" + y} data-toggle="collapse" aria-expanded="false">{y}</Link>
                <ul className="collapse list-unstyled" id={i + "b" + y}>
                  {q}
                </ul>
              </li>)
          else return null;
        }) : "";
        if (k)
          return (
            <li key={i} className="">
              <Link to={"#" + i} data-toggle="collapse" aria-expanded="false">
                <i className={"icons " + a[i].class || i} />
                <span>{a[i].name || i}</span>

              </Link>
              <ul className="collapse list-unstyled" id={i}>
                {/* <li><Link to="">Today's Matches</Link></li> */}
                {t}                
              </ul>
            </li>
          )
        else
          return null;  
      });

    } else {
      s = <li>
        <Link to="#a1">
          <i className="fa fa-spinner fa-spin" />
          <span className="">Loading...</span>
        </Link>
      </li>
    }

    return (
      <nav id="sidebar" className="" style={{ borderRadius: "10px 0 0 10px" }}>


        <ul className="list-unstyled components">
          <li className="sidebar-header-item" style={{ color: "#7386D5", background: "#fff", borderRadius: "10px 0 0 0" }}>
            <Link id="sports" to="/" style={{ borderRadius: "10 0 0 0" }}>
              <i className="icons sicon-olympic-games" />
              SPORTS
            </Link>
          </li>

          {s}

        </ul>
      </nav>
    );
  }
}

export default SideBar;
