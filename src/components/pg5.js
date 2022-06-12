import React from "react";

function Pg5(props){
    return(
        <>
        <div id="table">
            <table>
                <thead>
                    <tr>
                        <th>Team1</th>
                        <th>Team2</th>
                        <th>Match Type</th>
                        <th>Tournament Name</th>
                        <th>Start date & time</th>
                        <th>End date & time</th>
                        <th>Location</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.details.teams[0].name}<br /><b>{props.details.teams[0].place}</b></td>
                        <td>{props.details.teams[1].name}<br /><b>{props.details.teams[1].place}</b></td>
                        <td>{props.details.matchType}</td>
                        <td>{props.details.tournamentName}</td>
                        <td>{props.details.startDate.toISOString()}</td>
                        <td>{props.details.endDate.toISOString()}</td>
                        <td>{props.details.location}</td>
                        <td>{props.details.comments}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Pg5;