import React from "react";
// import firebase from '../fire';

class Sport extends React.Component {
    componentDidMount() {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', 'https://widgets.oddsportal.com/827b0c429231dbd/');
        addScript.setAttribute('type', "text/javascript");
        document.getElementById('oddsportal').appendChild(addScript);
        // document.body.appendChild(addScript);
    }
    render() {
        return (
            <div className="card" style={{ alignItems: "center" }}>
               

                <div className="card-body" id="oddsportal">
                <h5>Next Matches</h5>
                <div id="wait-please-cd4ff42a781bde9" style={{background: "url(&quot;https://widgets.oddsportal.com/res/x/oddsportal180608110243/img/wait-ico.gif&quot;) 10px 5px no-repeat", margin: "15px 0px 0px 280px", width: "315px", height: "515px", display: "none"}}></div>
                <iframe title="Oddsportal" id="op-widget-9858cef2cc92189" width="1000" height="2000" src="https://widgets.oddsportal.com/9858cef2cc92189/s/" frameborder="0" onload="a_9858cef2cc92189(this.id);"></iframe>
                
                </div>

            </div>
        );
    }
}
export default Sport;