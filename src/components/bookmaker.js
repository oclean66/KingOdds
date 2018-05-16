import React from "react";
import { Link } from 'react-router-dom';
const Bookmaker =()=> (
    <div id="col-content">
    
    
        <h1>Bookmakers Comparison - Where to Bet?</h1>

        <div className="cms">
            <p>This is the list of all internet bookmakers we cover on RockstartSportBook, sorted by overall ratings which take into
                account odds quality (payout), BMR rating and user rating.</p>
        </div>
        <div>
            <div className="box">

                <table id="view-all-bookmaker" className="table table-sm table-bordered bg-light">
                    <colgroup>
                        <col width="*" />
                        <col width="5%" />
                        <col width="5%" />
                        <col width="5%" />
                        <col width="5%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th className="first2 bold">  Bookmakers

                            </th>
                            <th className="sortable-img bookmaker-columns bc-odds-quality">  Odds Quality

                            </th>
                            <th className="sortable-img bookmaker-columns bc-sbr-rating">  BMR Rating

                            </th>
                            <th className="sortable-img bookmaker-columns bc-payment-methods">  Users Rating

                            </th>
                            <th className="sortable-img last2 bookmaker-columns bc-overall-rating"> Overall Rating

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link id ="1" to="/bookmaker"  title="See more details about Pinnacle" >
                                        <span className="blogos l18"></span>
                                    </Link>
                                    <Link to="/bookmaker"  title="See more details about Pinnacle" >Pinnacle</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="pinnacle/" className="no-hover-underline">
                                    <span className="l stars-small-dark-5" xparam="Click here to rate Pinnacle~1">
                                        <span className="hidden">4.7</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-5">
                                    <span className="hidden">4.9</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="5dimes/" title="See more details about 5Dimes" >
                                        <span className="blogos l20"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="5dimes/" title="See more details about 5Dimes" >5Dimes</Link>
                                </div>



                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="5dimes/" className="no-hover-underline">
                                    <span className="l stars-small-dark-4" xparam="Click here to rate 5Dimes~1">
                                        <span className="hidden">3.7</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-5">
                                    <span className="hidden">4.567</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="sbobet/" title="See more details about SBOBET" >
                                        <span className="blogos l75"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="sbobet/" title="See more details about SBOBET" >SBOBET</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="sbobet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-5" xparam="Click here to rate SBOBET~1">
                                        <span className="hidden">4.5</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-5">
                                    <span className="hidden">4.5</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="asianodds/" title="See more details about Asianodds" >
                                        <span className="blogos l476"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="asianodds/" title="See more details about Asianodds" >Asianodds</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="asianodds/" className="no-hover-underline">
                                    <span className="l stars-small-dark-5" xparam="Click here to rate Asianodds~1">
                                        <span className="hidden">4.5</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-5">
                                    <span className="hidden">4.5</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <span className="blogos noPointer l16"></span>
                                    <span >bet365</span>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="bet365/" className="no-hover-underline">
                                    <span className="l stars-small-dark-4" xparam="Click here to rate bet365~1">
                                        <span className="hidden">4.2</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">4.4</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="betfair-exchange/" title="See more details about Betfair Exchange" >
                                        <span className="blogos l44"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="betfair-exchange/" title="See more details about Betfair Exchange" >Betfair Exchange</Link>
                                </div>

                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="betfair-exchange/" className="no-hover-underline">
                                    <span className="l stars-small-dark-4" xparam="Click here to rate Betfair Exchange~1">
                                        <span className="hidden">4.2</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">4.4</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="matchbook/" title="See more details about Matchbook" >
                                        <span className="blogos l390"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="matchbook/" title="See more details about Matchbook" >Matchbook</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="matchbook/" className="no-hover-underline">
                                    <span className="l stars-small-dark-4" xparam="Click here to rate Matchbook~1">
                                        <span className="hidden">3.9</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">4.3</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="marathonbet/" title="See more details about Marathonbet" >
                                        <span className="blogos l381"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="marathonbet/" title="See more details about Marathonbet" >Marathonbet</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="marathonbet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-4" xparam="Click here to rate Marathonbet~1">
                                        <span className="hidden">3.8</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">4.267</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="william-hill/" title="See more details about William Hill" >
                                        <span className="blogos l15"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="william-hill/" title="See more details about William Hill" >William Hill</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="william-hill/" className="no-hover-underline">
                                    <span className="l stars-small-dark-4" xparam="Click here to rate William Hill~1">
                                        <span className="hidden">3.7</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">4.233</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="smarkets/" title="See more details about Smarkets" >
                                        <span className="blogos l485"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="smarkets/" title="See more details about Smarkets" >Smarkets</Link>
                                </div>

                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="smarkets/" className="no-hover-underline">
                                    <span className="l stars-small-dark-5" xparam="Click here to rate Smarkets~1">
                                        <span className="hidden">4.6</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">4.2</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="188bet/" title="See more details about 188BET" >
                                        <span className="blogos l56"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="188bet/" title="See more details about 188BET" >188BET</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="188bet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-4" xparam="Click here to rate 188BET~1">
                                        <span className="hidden">4</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">4</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="intertops/" title="See more details about Intertops" >
                                        <span className="blogos l31"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="intertops/" title="See more details about Intertops" >Intertops</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="intertops/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Intertops~1">
                                        <span className="hidden">2.6</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">3.867</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="coolbet/" title="See more details about Coolbet" >
                                        <span className="blogos l468"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="coolbet/" title="See more details about Coolbet" >Coolbet</Link>
                                </div>

                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="coolbet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-5" xparam="Click here to rate Coolbet~1">
                                        <span className="hidden">4.6</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">3.867</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="island-casino/" title="See more details about Island Casino" >
                                        <span className="blogos l92"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="island-casino/" title="See more details about Island Casino" >Island Casino</Link>
                                </div>

                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="island-casino/" className="no-hover-underline">
                                    <span className="l stars-small-dark-2" xparam="Click here to rate Island Casino~1">
                                        <span className="hidden">2.4</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">3.8</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="betcruise/" title="See more details about Betcruise" >
                                        <span className="blogos l113"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="betcruise/" title="See more details about Betcruise" >Betcruise</Link>
                                </div>

                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="betcruise/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Betcruise~1">
                                        <span className="hidden">3.3</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">3.767</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="scandibet/" title="See more details about ScandiBet" >
                                        <span className="blogos l473"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="scandibet/" title="See more details about ScandiBet" >ScandiBet</Link>
                                </div>

                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="scandibet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-4" xparam="Click here to rate ScandiBet~1">
                                        <span className="hidden">4.3</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">3.767</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="nightrush/" title="See more details about NightRush" >
                                        <span className="blogos l492"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="nightrush/" title="See more details about NightRush" >NightRush</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="nightrush/" className="no-hover-underline">
                                    <span className="l stars-small-dark-4" xparam="Click here to rate NightRush~1">
                                        <span className="hidden">4.3</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">3.767</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="betfred/" title="See more details about Betfred" >
                                        <span className="blogos l21"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="betfred/" title="See more details about Betfred" >Betfred</Link>
                                </div>

                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="betfred/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Betfred~1">
                                        <span className="hidden">3.1</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">3.7</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="ladbrokes/" title="See more details about Ladbrokes" >
                                        <span className="blogos l28"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="ladbrokes/" title="See more details about Ladbrokes" >Ladbrokes</Link>
                                </div>

                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="ladbrokes/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Ladbrokes~1">
                                        <span className="hidden">3.1</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">3.7</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="titanbet/" title="See more details about Titanbet" >
                                        <span className="blogos l121"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="titanbet/" title="See more details about Titanbet" >Titanbet</Link>
                                </div>

                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="titanbet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Titanbet~1">
                                        <span className="hidden">3</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">3.667</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="10bet/" title="See more details about 10Bet" >
                                        <span className="blogos l14"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="10bet/" title="See more details about 10Bet" >10Bet</Link>
                                </div>

                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="10bet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate 10Bet~1">
                                        <span className="hidden">2.7</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">3.567</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="babibet/" title="See more details about Babibet" >
                                        <span className="blogos l469"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="babibet/" title="See more details about Babibet" >Babibet</Link>
                                </div>

                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="babibet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-4" xparam="Click here to rate Babibet~1">
                                        <span className="hidden">3.6</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">3.533</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="betvictor/" title="See more details about BetVictor" >
                                        <span className="blogos l76"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="betvictor/" title="See more details about BetVictor" >BetVictor</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="betvictor/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate BetVictor~1">
                                        <span className="hidden">2.6</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">3.533</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="betfair/" title="See more details about Betfair" >
                                        <span className="blogos l429"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="betfair/" title="See more details about Betfair" >Betfair</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="betfair/" className="no-hover-underline">
                                    <span className="l stars-small-dark-4" xparam="Click here to rate Betfair~1">
                                        <span className="hidden">3.6</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-4">
                                    <span className="hidden">3.533</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="unibet/" title="See more details about Unibet" >
                                        <span className="blogos l5"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="unibet/" title="See more details about Unibet" >Unibet</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="unibet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Unibet~1">
                                        <span className="hidden">3.4</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3.467</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="dafabet/" title="See more details about Dafabet" >
                                        <span className="blogos l147"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="dafabet/" title="See more details about Dafabet" >Dafabet</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="dafabet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Dafabet~1">
                                        <span className="hidden">3.4</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3.467</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="betolimp/" title="See more details about BetOlimp" >
                                        <span className="blogos l446"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="betolimp/" title="See more details about BetOlimp" >BetOlimp</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="betolimp/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate BetOlimp~1">
                                        <span className="hidden">3.4</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3.467</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="888sport/" title="See more details about 888sport" >
                                        <span className="blogos l27"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="888sport/" title="See more details about 888sport" >888sport</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="888sport/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate 888sport~1">
                                        <span className="hidden">3.1</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3.367</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="bethard/" title="See more details about Bethard" >
                                        <span className="blogos l464"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="bethard/" title="See more details about Bethard" >Bethard</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="bethard/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Bethard~1">
                                        <span className="hidden">3.1</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3.367</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="betcity/" title="See more details about BetCity" >
                                        <span className="blogos l482"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="betcity/" title="See more details about BetCity" >BetCity</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="betcity/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate BetCity~1">
                                        <span className="hidden">3.1</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3.367</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="bwin/" title="See more details about bwin" >
                                        <span className="blogos l2"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="bwin/" title="See more details about bwin" >bwin</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="bwin/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate bwin~1">
                                        <span className="hidden">3</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3.333</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="boylesports/" title="See more details about BoyleSports" >
                                        <span className="blogos l30"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="boylesports/" title="See more details about BoyleSports" >BoyleSports</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="boylesports/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate BoyleSports~1">
                                        <span className="hidden">3</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3.333</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="leonbets/" title="See more details about Leonbets" >
                                        <span className="blogos l73"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="leonbets/" title="See more details about Leonbets" >Leonbets</Link>
                                </div>

                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="leonbets/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Leonbets~1">
                                        <span className="hidden">2.9</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3.3</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="comeon/" title="See more details about ComeOn" >
                                        <span className="blogos l383"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="comeon/" title="See more details about ComeOn" >ComeOn</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="comeon/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate ComeOn~1">
                                        <span className="hidden">2.8</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3.267</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="18bet/" title="See more details about 18bet" >
                                        <span className="blogos l416"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="18bet/" title="See more details about 18bet" >18bet</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="18bet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate 18bet~1">
                                        <span className="hidden">2.8</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3.267</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="tonybet/" title="See more details about TonyBet" >
                                        <span className="blogos l378"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="tonybet/" title="See more details about TonyBet" >TonyBet</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-2">
                                    <span className="hidden">2</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="tonybet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate TonyBet~1">
                                        <span className="hidden">3.4</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3.133</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="expekt/" title="See more details about Expekt" >
                                        <span className="blogos l9"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="expekt/" title="See more details about Expekt" >Expekt</Link>
                                </div>

                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="expekt/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Expekt~1">
                                        <span className="hidden">3.2</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3.067</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="betclic/" title="See more details about Betclic" >
                                        <span className="blogos l32"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="betclic/" title="See more details about Betclic" >Betclic</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="betclic/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Betclic~1">
                                        <span className="hidden">3</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="betsson/" title="See more details about Betsson" >
                                        <span className="blogos l43"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="betsson/" title="See more details about Betsson" >Betsson</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="betsson/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Betsson~1">
                                        <span className="hidden">3</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">3</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="vernons/" title="See more details about Vernons" >
                                        <span className="blogos l418"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="vernons/" title="See more details about Vernons" >Vernons</Link>
                                </div>

                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="vernons/" className="no-hover-underline">
                                    <span className="l stars-small-dark-2" xparam="Click here to rate Vernons~1">
                                        <span className="hidden">1.8</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">2.933</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="nordicbet/" title="See more details about NordicBet" >
                                        <span className="blogos l33"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="nordicbet/" title="See more details about NordicBet" >NordicBet</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="nordicbet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate NordicBet~1">
                                        <span className="hidden">2.7</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">2.9</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="1xbet/" title="See more details about 1xBet" >
                                        <span className="blogos l417"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="1xbet/" title="See more details about 1xBet" >1xBet</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-5">
                                    <span className="hidden">5</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-1">
                                    <span className="hidden">1</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="1xbet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate 1xBet~1">
                                        <span className="hidden">2.5</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">2.833</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="betrally/" title="See more details about Betrally" >
                                        <span className="blogos l403"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="betrally/" title="See more details about Betrally" >Betrally</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="betrally/" className="no-hover-underline">
                                    <span className="l stars-small-dark-2" xparam="Click here to rate Betrally~1">
                                        <span className="hidden">2.4</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">2.8</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="marsbet/" title="See more details about Marsbet" >
                                        <span className="blogos l470"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="marsbet/" title="See more details about Marsbet" >Marsbet</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="marsbet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-2" xparam="Click here to rate Marsbet~1">
                                        <span className="hidden">2.4</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">2.8</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="betway/" title="See more details about Betway" >
                                        <span className="blogos l26"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="betway/" title="See more details about Betway" >Betway</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="betway/" className="no-hover-underline">
                                    <span className="l stars-small-dark-2" xparam="Click here to rate Betway~1">
                                        <span className="hidden">2.3</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">2.767</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="betsafe/" title="See more details about Betsafe" >
                                        <span className="blogos l24"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="betsafe/" title="See more details about Betsafe" >Betsafe</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="betsafe/" className="no-hover-underline">
                                    <span className="l stars-small-dark-2" xparam="Click here to rate Betsafe~1">
                                        <span className="hidden">2.2</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">2.733</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="vulkanbet/" title="See more details about Vulkanbet" >
                                        <span className="blogos l451"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="vulkanbet/" title="See more details about Vulkanbet" >Vulkanbet</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="vulkanbet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-2" xparam="Click here to rate Vulkanbet~1">
                                        <span className="hidden">2.2</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">2.733</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="oddsring/" title="See more details about Oddsring" >
                                        <span className="blogos l393"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="oddsring/" title="See more details about Oddsring" >Oddsring</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-2">
                                    <span className="hidden">2</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="oddsring/" className="no-hover-underline">
                                    <span className="l stars-small-dark-2" xparam="Click here to rate Oddsring~1">
                                        <span className="hidden">2.2</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">2.733</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="jetbull/" title="See more details about Jetbull" >
                                        <span className="blogos l57"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="jetbull/" title="See more details about Jetbull" >Jetbull</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-2">
                                    <span className="hidden">2</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="jetbull/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Jetbull~1">
                                        <span className="hidden">3.1</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">2.7</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="tipico/" title="See more details about Tipico" >
                                        <span className="blogos l70"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="tipico/" title="See more details about Tipico" >Tipico</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-2">
                                    <span className="hidden">2</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="tipico/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Tipico~1">
                                        <span className="hidden">3.1</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">2.7</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="sportingbet/" title="See more details about Sportingbet" >
                                        <span className="blogos l38"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="sportingbet/" title="See more details about Sportingbet" >Sportingbet</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-2">
                                    <span className="hidden">2</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="sportingbet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate Sportingbet~1">
                                        <span className="hidden">2.9</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-3">
                                    <span className="hidden">2.633</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="12bet/" title="See more details about 12BET" >
                                        <span className="blogos l80"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="12bet/" title="See more details about 12BET" >12BET</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-1">
                                    <span className="hidden">1</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="12bet/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate 12BET~1">
                                        <span className="hidden">3.4</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-2">
                                    <span className="hidden">2.467</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="youwin/" title="See more details about youwin" >
                                        <span className="blogos l128"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="youwin/" title="See more details about youwin" >youwin</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-1">
                                    <span className="hidden">1</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-4">
                                    <span className="hidden">4</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="youwin/" className="no-hover-underline">
                                    <span className="l stars-small-dark-2" xparam="Click here to rate youwin~1">
                                        <span className="hidden">2.3</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-2">
                                    <span className="hidden">2.433</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="interwetten/" title="See more details about Interwetten" >
                                        <span className="blogos l1"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="interwetten/" title="See more details about Interwetten" >Interwetten</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-2">
                                    <span className="hidden">2</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="interwetten/" className="no-hover-underline">
                                    <span className="l stars-small-dark-2" xparam="Click here to rate Interwetten~1">
                                        <span className="hidden">1.8</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-2">
                                    <span className="hidden">2.267</span></span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="noxwin/" title="See more details about Noxwin" >
                                        <span className="blogos l55"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="noxwin/" title="See more details about Noxwin" >Noxwin</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-1">
                                    <span className="hidden">1</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-3">
                                    <span className="hidden">3</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="noxwin/" className="no-hover-underline">
                                    <span className="l stars-small-dark-2" xparam="Click here to rate Noxwin~1">
                                        <span className="hidden">2.1</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-2">
                                    <span className="hidden">2.033</span></span>
                            </td>
                        </tr>
                        <tr className="even">
                            <td className="tlogos">
                                <div className="l">
                                    <Link to="/bookmaker" titler="bet-at-home/" title="See more details about bet-at-home" >
                                        <span className="blogos l3"></span>
                                    </Link>
                                    <Link to="/bookmaker" titler="bet-at-home/" title="See more details about bet-at-home" >bet-at-home</Link>
                                </div>


                            </td>
                            <td>
                                <span className="l stars-small-dark-2">
                                    <span className="hidden">2</span></span>
                            </td>
                            <td>
                                <span className="l stars-small-dark-1">
                                    <span className="hidden">1</span></span>
                            </td>
                            <td>
                                <Link to="/bookmaker" titler="bet-at-home/" className="no-hover-underline">
                                    <span className="l stars-small-dark-3" xparam="Click here to rate bet-at-home~1">
                                        <span className="hidden">2.6</span></span>
                                </Link>
                            </td>
                            <td>
                                <span className="l stars-small-orange-2">
                                    <span className="hidden">1.867</span></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
export default Bookmaker;