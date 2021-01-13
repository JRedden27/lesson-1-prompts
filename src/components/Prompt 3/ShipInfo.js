import React, { Component } from 'react';

class ShipInfo extends Component {
    constructor() {
        super()
    }
    render() {
        let { currentStation, crewMembers } = this.props
        // Experimented with using the map method, but didn't succeed.
        
        //let crewList = crewMembers.map((crew) => <li key={crew.name}>{crew.name}</li>);
        // for(let i = 0; i < crewMembers.length; i++){
        //     crewList += crewMembers.map(crewMembers[i] => `<li>crewMembers[i]</li>`)
        // }
         console.log(crewMembers)
        return (
            <div>
                {/* {crewList} */}
                <li>{crewMembers[0]}</li>
                <li>{crewMembers[1]}</li>
                <li>{crewMembers[2]}</li>
                <li>{crewMembers[3]}</li>
                <h3>`Currently taking on repairs at: {currentStation}`</h3>
            </div>
        );
    }
}

export default ShipInfo;