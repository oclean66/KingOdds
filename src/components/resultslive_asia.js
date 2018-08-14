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
                    <div className="table-responsive-lg" style={{ border: '1px solid deepskyblue' }}>
                        <iframe title="tile912" id="inscore-xdc-385912" src="http://www.livescore.in/free/385912/" width="624" height="500" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <div id="Soccer" className="tab-pane fade">
                    <div className="table-responsive-lg" style={{ border: '1px solid deepskyblue' }}>
                        <iframe title="tile391" id="inscore-xdc-541391" src="http://www.livescore.in/free/541391/" width="624" height="500" frameborder="0" scrolling="no"></iframe>                    </div>
                </div>
                <div id="Tennis" className="tab-pane fade">
                    <div className="table-responsive-lg" style={{ border: '1px solid deepskyblue' }}>
                        <iframe title="tile556" id="inscore-xdc-785556" src="http://www.livescore.in/free/785556/" width="624" height="500" frameborder="0" scrolling="no"></iframe>                    </div>
                </div>
                <div id="Basketball" className="tab-pane fade">
                    <div className="table-responsive-lg" style={{ border: '1px solid deepskyblue' }}>
                        <iframe title="tile058" id="inscore-xdc-941058" src="http://www.livescore.in/free/941058/" width="624" height="500" frameborder="0" scrolling="no"></iframe>                    </div>
                </div>
                <div id="Hockey" className="tab-pane fade">
                    <div className="table-responsive-lg" style={{ border: '1px solid deepskyblue' }}>
                        <iframe title="tile653" id="inscore-xdc-636653" src="http://www.livescore.in/free/636653/" width="624" height="500" frameborder="0" scrolling="no"></iframe>                    </div>
                </div>

                <div id="AM-Football" className="tab-pane fade">
                    <div className="table-responsive-lg" style={{ border: '1px solid deepskyblue' }}>
                        <iframe title="tile558" id="inscore-xdc-619558" src="http://www.livescore.in/free/619558/" width="624" height="500" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <div id="Handball" className="tab-pane fade">
                    <div className="table-responsive-lg" style={{ border: '1px solid deepskyblue' }}>
                        <iframe title="tile590" id="inscore-xdc-192590" src="http://www.livescore.in/free/192590/" width="624" height="500" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <div id="Volleyball" className="tab-pane fade">
                    <div className="table-responsive-lg" style={{ border: '1px solid deepskyblue' }}>
                        <iframe title="tile845" id="inscore-xdc-203845" src="http://www.livescore.in/free/203845/" width="624" height="500" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <div id="RugbyU" className="tab-pane fade">
                    <div className="table-responsive-lg" style={{ border: '1px solid deepskyblue' }}>
                        <iframe title="tile281" id="inscore-xdc-710281" src="http://www.livescore.in/free/710281/" width="624" height="500" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <div id="Cricket" className="tab-pane fade">
                    <div className="table-responsive-lg" style={{ border: '1px solid deepskyblue' }}>
                        <iframe title="tile750" id="inscore-xdc-733750" src="http://www.livescore.in/free/733750/" width="624" height="500" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>

            </div>

        </div>


    </div>    
);

export default Resultslive;