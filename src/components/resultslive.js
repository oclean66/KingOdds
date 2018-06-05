import React from 'react';
import { Link } from 'react-router-dom';

const Resultslive = ({ name }) => (
    <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className="nav-link active" data-toggle="tab" to="#Soccer">Soccer</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" data-toggle="tab" to="#Tennis">Tennis</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" data-toggle="tab" to="#Basketball">Basketball</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" data-toggle="tab" to="#Hockey">Hockey</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" data-toggle="tab" to="#Baseball">Baseball</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" data-toggle="tab" to="#AM-Football">AM Football</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" data-toggle="tab" to="#handball">Handball</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" data-toggle="tab" to="#Volleyball">Volleyball</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" data-toggle="tab" to="#RugbyU">Rugby Union</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" data-toggle="tab" to="#Cricket">Cricket</Link>
            </li>

            

        </ul>
        <div className="cold-sm-12">
            <div className="tab-content">
                <div id="Socer" className="tab-pane fade in active show">
                    <div className="table-responsive-lg">
                        <iframe title="livescore06" id="inscore-xdc-844206" src="https://www.livescore.in/free/844206/" width="1000" height="1200" frameBorder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <div id="Tennis" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe title="livescore33" id="inscore-xdc-540333" src="https://www.livescore.in/free/540333/" width="1000" height="500" frameBorder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <div id="Basketball" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe id="inscore-xdc-101042" src="https://www.livescore.in/free/101042/" width="1000" height="500" frameBorder="0" scrolling="no"></iframe>

                    </div>
                </div>
                <div id="Hockey" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe id="inscore-xdc-101042" src="https://www.livescore.in/free/101042/" width="1000" height="500" frameBorder="0" scrolling="no"></iframe>

                    </div>
                </div>
                <div id="Baseball" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe id="inscore-xdc-101042" src="https://www.livescore.in/free/101042/" width="1000" height="500" frameBorder="0" scrolling="no"></iframe>

                    </div>
                </div>
                <div id="AM-Football" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe id="inscore-xdc-101042" src="https://www.livescore.in/free/101042/" width="1000" height="500" frameBorder="0" scrolling="no"></iframe>

                    </div>
                </div>
                <div id="Handball" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe id="inscore-xdc-101042" src="https://www.livescore.in/free/101042/" width="1000" height="500" frameBorder="0" scrolling="no"></iframe>

                    </div>
                </div>
                <div id="Volleyball" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe id="inscore-xdc-101042" src="https://www.livescore.in/free/101042/" width="1000" height="500" frameBorder="0" scrolling="no"></iframe>

                    </div>
                </div>
                <div id="Rugby-U" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe id="inscore-xdc-101042" src="https://www.livescore.in/free/101042/" width="1000" height="500" frameBorder="0" scrolling="no"></iframe>

                    </div>
                </div>
                <div id="Cricket" className="tab-pane fade">
                    <div className="table-responsive-lg">
                        <iframe id="inscore-xdc-101042" src="https://www.livescore.in/free/101042/" width="1000" height="500" frameBorder="0" scrolling="no"></iframe>

                    </div>
                </div>

            </div>

        </div>


    </div>
);

export default Resultslive;