const request = require('request')

const forecast = (latitute, longitute, callback) => {
    const url = 'https://api.darksky.net/forecast/7e222d65192d4d5dfd863dd4d1c407af/' + longitute + ',' + latitute + '?units=si&lang=en'
    request({url, json:true}, (error, {body}) =>{
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary +  ' It is currently ' + body.currently.temperature + ' degree out. There is a ' + body.currently.precipProbability + '% chance of rain')
        }
    })
}

module.exports = forecast