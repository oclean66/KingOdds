import React, { Component } from "react";
import firebase from '../fire';
import { Link } from 'react-router-dom';

const affils = firebase.database().ref().child('affil');
class Affil extends Component {

    constructor() {
        super()
        this.state = { affil: [] }
    }
    componentDidMount() {

        affils.on("value", snapshot => {
            this.setState({
                affil: []
            });
            this.state.affil.push(snapshot.val())
            this.setState({
                affil: snapshot.val()
            });

            // console.log(this.state.affil);
        });

    }
    render() {
        let list;
        let a = this.state.affil;
        if (a) {
            list = Object.keys(a).map(function (trait) {
                // console.log('id ', trait, ': ', a[trait]);
                return (

                    <div key={trait} className="col-lg-4">
                        <div className="card card-full-color border border-dark" >
                            <div className="card-body">
                                {/* {a[trait].text} */}
                                <Link to={a[trait].url} target="_blank">
                                    <img src={a[trait].img} alt="" style={{ width: "100%" }} />
                                    {/* <div className="card-caption"> Clementine Thson </div> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            });
            // console.log(list);
        }
        return (
            <div>
                <div className="page-head" style={{ padding: 0 }}>
                    <div className="bd-example">
                        <div
                            id="carouselExampleCaptions"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselExampleCaptions"
                                    data-slide-to="0"
                                    className="active"
                                />
                                <li
                                    data-target="#carouselExampleCaptions"
                                    data-slide-to="1"
                                    className=""
                                />
                                <li
                                    data-target="#carouselExampleCaptions"
                                    data-slide-to="2"
                                    className=""
                                />
                            </ol>
                            <div className="carousel-inner" style={{ height: 200 }}>
                                <div className="carousel-item active" style={{ height: 200 }}>
                                    <img
                                        className="d-block w-100"
                                        data-src="holder.js/150x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide"
                                        alt="First slide [800x400]"
                                        src="img/img2.jpg"
                                        data-holder-rendered="true"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2 className="font-weight-bold" style={{ textShadow: "2px 2px 4px #000000" }} >
                                            Welcome to Rockstar Sports Betting
                                        </h2>
                                        <p style={{ textShadow: "2px 2px 4px #000000", color: "white" }}>
                                            Best for odds comparison, Online betting and Live Scores
    
                            </p>
                                    </div>
                                </div>
                                <div className="carousel-item" style={{ height: 200 }}>
                                    <img
                                        className="d-block w-100"
                                        data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide"
                                        alt="Second slide [800x400]"
                                        src="img/img3.jpg"
                                        data-holder-rendered="true"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1
                                            className="font-weight-bold"
                                            style={{ textShadow: "2px 2px 4px #000000" }}
                                        >
                                            No. 1 For Online Betting Sites
                            </h1>

                                    </div>
                                </div>
                                <div className="carousel-item" style={{ height: 200 }}>
                                    <img
                                        className="d-block w-100"
                                        data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                                        alt="Third slide [800x400]"
                                        src="img/img1.jpg"
                                        data-holder-rendered="true"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2 className="font-weight-bold" style={{ textShadow: "2px 2px 4px #000000" }} >
                                            Welcome to Rockstar Sports Betting
                                        </h2>
                                        <p style={{ textShadow: "2px 2px 4px #000000", color: "white" }}>
                                            Best for odds comparison, Online betting and Live Scores
    
                            </p>
                                    </div>
                                </div>
                            </div>
                            <Link
                                className="carousel-control-prev"
                                to="#carouselExampleCaptions"
                                role="button"
                                data-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                />
                                <span className="sr-only">Previous</span>
                            </Link>
                            <Link
                                className="carousel-control-next"
                                to="#carouselExampleCaptions"
                                role="button"
                                data-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                />
                                <span className="sr-only">Next</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="line" />
                <div className="row">
                    <div className="col-lg-12 clearfix" style={{ textAlign: "-webkit-center", padding: 20 }}>
                        <a href="http://www.livescore.in/" title="Livescore" target="_blank" rel="noopener noreferrer">
                            <div className="card card-full-color border border-dark" style={{ background: "url('https://www.livescore.in/res/image/content/livescore_in_345x70.gif'),black", backgroundSize: "345px 70px", backgroundRepeat: "no-repeat", width: 345,height:70 }} >
                                <div className="card-body center">

                                </div>
                            </div>
                        </a>
                    </div>
                    {list}
                </div>
            </div>)
    }
}
export default Affil;