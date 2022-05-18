const React = require('react')
const Def = require('../default')

function index(data) {
    let formattedPlaces = data.places.map(place => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name} />
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Index Page</h1>
                {formattedPlaces}
            </main>
        </Def>
    )
}
  


  module.exports = index