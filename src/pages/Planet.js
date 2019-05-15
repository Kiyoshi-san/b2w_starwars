// import React from 'react';
import React from 'react';
import '../style/Planet.scss';
/**
 LIB USADA
 https://freefrontend.com/css-tables/
 https://codepen.io/FlorinPop17/pen/WmNoJx
 
 */
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

            <div className="pricing-box-container">

                <div className="pricing-box pricing-box-bg-image text-center">
                    <h1 className="text-center">{res.planetProps.name}</h1>
                    
                    <ul className="features-list">
                        <li><strong>Population: </strong> {res.planetProps.population}</li>
                        <li><strong>Climate: </strong>{res.planetProps.climate}</li>
                        <li><strong>Terrain: </strong> {res.planetProps.terrain}</li>
                        <li><strong>Featured in </strong> {res.planetProps.films.lenght?res.planetProps.films.lenght:0} films</li>
                    </ul>
                    <button className="btn-primary">Next</button>
                </div>

            </div>

            {/* <footer>
                <p>
                    Created with <i className="fa fa-heart"></i> by
                    <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
                    - Read about how I created it
                    <a target="_blank" href="https://www.florin-pop.com/blog/2019/02/how-to-create-pricing-plans/">in this article</a><br />
                    Other projects on
                    <a target="_blank" href="https://github.com/florinpop17/work-journal/">Github</a>
                </p>
            </footer> */}


        </div>
    );
}

export default Planet;