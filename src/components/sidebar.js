import React from "react";
// import "../css/sidebar.css";
// import firebase from '../fire';
import { Link } from 'react-router-dom';

var today = new Date();
var dd = today.getUTCDate();
var mm = today.getUTCMonth() + 1; //January is 0!
var yyyy = today.getUTCFullYear();
dd = dd < 10 ? '0' + dd : dd;
mm = mm < 10 ? '0' + mm : mm;
today = yyyy + mm + dd;


class SideBar extends React.Component {
  constructor() {
    super()
    this.state = { menu: [] }

  }
  componentDidMount() {
    var context = this;
    fetch('http://kingdeportes.com/geek/api/list/model/menu/',{cache:"no-cache"}
    ).then(results => {
      return results.json();
    }).then(data => {
      context.setState({ menu: data })
      // console.log(data);
    });
  }
componentWillUnmount(){
  this.setState({menu:[]});
}

  render() {
    let a, b, c, s;
    a = this.state.menu;


    if (a) {
      s = Object.keys(a);
      s = s.map((i) => {
        b = a[i].countries;
        c = Object.keys(b).map((y) => {
          if (b[y].lastseen) {
            let ls = new Date(b[y].lastseen);
            ls = Date.UTC(ls.getUTCFullYear(), ls.getUTCMonth() + 1, ls.getUTCDate());

            // console.log(ls,">=", Date.UTC(yyyy, mm, dd)," && ", ls ,"<=", Date.UTC(yyyy, mm, dd + 5));

            if (ls >= Date.UTC(yyyy, mm, dd) && ls <= Date.UTC(yyyy, mm, dd + 5)) {
              return (
                <li key={y}>

                  <Link to={"/search/" + b[y].id}>
                    <i className={"ficon-inline f-" + y}></i>
                    {b[y].name}
                  </Link>
                </li>
              )
            } else return null;
          }
          return null;

        })

        return (
          <li key={i}>
            <Link to={"#" + i} data-toggle="collapse" aria-expanded="false">
              <i className={"icons " + a[i].class} />
              <span>{a[i].name}</span>
            </Link>
            <ul className="collapse list-unstyled" id={i}>
              {c}
            </ul>
          </li>
        )

      })
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
          {/* <li>
            <Link to={"#"} data-toggle="collapse" aria-expanded="false">
              <i className={"icons "} />
              <span>{"soccer"}</span>
            </Link>
          </li> */}
          {s}

        </ul>
      </nav>
    );
  }
}

export default SideBar;
