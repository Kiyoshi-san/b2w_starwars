// import React from 'react';
import React from 'react';
// import '../Planet.scss';

/**

planetProps:{
    climate: "temperate"
    created: "2014-12-20T17:50:47.864000Z"
    diameter: "unknown"
    edited: "2014-12-20T20:58:18.517000Z"
    films: []
    gravity: "1"
    name: "Skako"
    orbital_period: "384"
    population: "500000000000"
    residents: ["https://swapi.co/api/people/76/"]
    rotation_period: "27"
    surface_water: "unknown"
    terrain: "urban, vines"
    url: "https://swapi.co/api/planets/56/"
}

*/

function Planet(res) {
    console.log("a")
    console.log(res.planetProps.name)
    console.log("a")
    return (
        <div className="App">
            <h1>{res.planetProps.name}</h1>
        </div>
    );
}

export default Planet;