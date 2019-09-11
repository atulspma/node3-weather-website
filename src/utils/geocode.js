const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXR1bHNwbWEiLCJhIjoiY2swMWFpMmN2MThpNzNjcnV3bXRqcHV1dyJ9.5bzDq4W1Q2sRQwQdoZHbGQ&limit=1'
    request({url, json:true}, (error, {body})=> {
        if (error) {
            callback('Unable to find Geocoding service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find the location. Please try again with some other location...', undefined)
        } else {
            callback(undefined, {
                latitute: body.features[0].center[0],
                longitute: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode