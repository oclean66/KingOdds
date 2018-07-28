import React from "react";
// import RDT from 'react-datatable';
const array = require('../data.json');

let Bookmaker=()=>{
    let bookUrl={};
    bookUrl=array;

    let outy = Object.keys(bookUrl);
    outy.sort();


    
    return(
        <div>
           <h1>Bookmakers Comparison - Where to Bet?</h1> 
           <div className="cms" style={{ color: "darkgrey" }}>
                <p>
                    This is the list of all internet bookmakers we cover on Rockstar Sports Netwoek, sorted by overall ratings which take into
                account odds quality (payout), BMR rating and user rating.
                </p>
            </div>
            <div>               
                <div className="table-responsive">
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
                            <th>Bookmakers</th>
                            <th>Odds Quality</th>
                            <th>BMR Rating</th>
                            <th>Users Rating</th>
                            <th>Overall Rating</th>
                        </tr>
                    </thead>                    
                    <tbody>                        
                        {
                        
                        outy.map((i)=>{
                            return  <tr key={i}>
                                         <td >
                                            <div>
                                                <a href={bookUrl[i].url} title={"Show more about "+bookUrl[i].name}>
                                                    <span className={"blogos l"+bookUrl[i].idLogo}></span>
                                                </a> 
                                                <a href={bookUrl[i].url} title={"Show more about "+bookUrl[i].name}>{bookUrl[i].name}</a>  
                                            </div>
                                        </td>
                                        <td>{bookUrl[i].quality}</td>                                        
                                        <td>{bookUrl[i].bmrRating}</td>                                        
                                        <td>{bookUrl[i].userRating}</td>
                                        <td>{bookUrl[i].overallRating}</td>                                       
                                    </tr>
                        })}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default Bookmaker;