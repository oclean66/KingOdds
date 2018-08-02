import React from 'react';
import { Link } from 'react-router-dom';

const Resultslive = ({ name }) => (
    <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className="nav-link active" data-toggle="tab" to="#Baseball">Baseball</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" data-toggle="tab" to="#Soccer">Soccer</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " data-toggle="tab" to="#Tennis">Tennis</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " data-toggle="tab" to="#Basketball">Basketball</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " data-toggle="tab" to="#Hockey">Hockey</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " data-toggle="tab" to="#AM-Football">AM Football</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " data-toggle="tab" to="#Handball">Handball</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " data-toggle="tab" to="#Volleyball">Volleyball</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " data-toggle="tab" to="#RugbyU">Rugby Union</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " data-toggle="tab" to="#Cricket">Cricket</Link>
            </li>



        </ul>
        <div className="cold-sm-12">
            <div className="tab-content">
                <div id="Baseball" className="tab-pane fade in active show">
                    <div className="table-responsive-lg">
                        <iframe title="livescore00" id="inscore-xdc-182649" src="http://www.livescore.in/free/182649/" width="900" height="1000" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <div id="Soccer" className="tab-pane fade">
                    <div className="table-responsive-lg">
                    <iframe id="inscore-xdc-541391" src="http://www.livescore.in/free/541391/" width="624" height="500" frameborder="0" scrolling="no"></iframe>                    
                    </div>
                </div>
                <div id="Tennis" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe title="livescore02" id="inscore-xdc-505531" src="http://www.livescore.in/free/505531/" width="624" height="500" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <div id="Basketball" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe title="livescore03" id="inscore-xdc-694009" src="http://www.livescore.in/free/694009/" width="624" height="500" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <div id="Hockey" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe title="livescore04" id="inscore-xdc-765906" src="http://www.livescore.in/free/765906/" width="624" height="500" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>

                <div id="AM-Football" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe title="livescore06" id="inscore-xdc-754328" src="http://www.livescore.in/free/754328/" width="624" height="500" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <div id="Handball" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe title="livescore07" id="inscore-xdc-420521" src="http://www.livescore.in/free/420521/" width="624" height="500" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <div id="Volleyball" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe title="livescore08" id="inscore-xdc-618361" src="http://www.livescore.in/free/618361/" width="624" height="500" frameborder="0" scrolling="no"></iframe>                    </div>
                </div>
                <div id="RugbyU" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe title="livescore09" id="inscore-xdc-847679" src="http://www.livescore.in/free/847679/" width="624" height="500" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <div id="Cricket" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe title="livescore10" id="inscore-xdc-878005" src="http://www.livescore.in/free/878005/" width="624" height="500" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>

            </div>

        </div>


    </div>
);

export default Resultslive;