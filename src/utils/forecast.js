const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/24e7731d6ffa45f917d76a3654c6f3b4/' + encodeURIComponent(latitude) + ', ' + encodeURIComponent(longitude)

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service.", undefined)
        } else {
            const summary = body.daily.data[0].summary
            const temperature = body.currently.temperature
            const precipProbability = body.currently.precipProbability
            callback('', summary + ' It is currently ' + temperature + ' degrees out. There is a ' + precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast