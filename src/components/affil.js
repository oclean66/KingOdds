import React, { Component } from "react";
import firebase from '../fire';


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
        let a = this.state.affil;
        let list = Object.keys(a).map(function (trait) {
            // console.log('id ', trait, ': ', a[trait]);
            return (                
               
                <div key={trait} className="col-lg-4">
                    <div className="card card-full-color border border-dark" >
                        <div className="card-body">
                            {/* {a[trait].text} */}
                            <a href={a[trait].url}>
                                <img src={a[trait].img} alt="" style={{ width: "100%" }} />
                                <div className="card-caption"> Clementine Thson </div>
                            </a>
                        </div>
                    </div>
                </div>
               )                   
                });
                // console.log(list);
        
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
                            <h1
                                className="font-weight-bold"
                                style={{ textShadow: "2px 2px 4px #000000" }}
                            >
                                Welcome Rockstar Sport Betting
                            </h1>
                            <p style={{ textShadow: "2px 2px 4px #000000" }}>
                                All the online bookmakers you need right here in one
                                place. No bull, just sites.
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
                            <p style={{ textShadow: "2px 2px 4px #000000" }}>
                                No reviews to try and push you to an affiliates favoured
                                sites.
                            </p>
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
                            <h1
                                className="font-weight-bold"
                                style={{ textShadow: "2px 2px 4px #000000" }}
                            >
                                Welcome Rockstar Sport Betting
                            </h1>
                            <p style={{ textShadow: "2px 2px 4px #000000" }}>
                                Just links and they are all here.
                            </p>
                            </div>
                        </div>
                        </div>
                        <a
                        className="carousel-control-prev"
                        href="#carouselExampleCaptions"
                        role="button"
                        data-slide="prev"
                        >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Previous</span>
                        </a>
                        <a
                        className="carousel-control-next"
                        href="#carouselExampleCaptions"
                        role="button"
                        data-slide="next"
                        >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Next</span>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="line" />
                <div className="row">
                    {list}
                </div>
            </div>)
    }
}
export default Affil;