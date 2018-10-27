const request = require('request');
let url = "https://api.openweathermap.org/data/2.5/forecast/daily?q=Karachi&mode=json&units=metric&cnt=7&appid=c924444369c69301f0834daccf34fed9";


class Weather {
    static getWeather(req, res) {
        request(url, { json: true }, (err, response, body) => {
            if (err) { return console.log(err); }
            let array = [];
            let data = response.body.list;
            for (let i = 0; i <= data.length - 1; i++) {
                let obj = {};
                obj['temperature'] = {
                    min: data[i].temp.min,
                    max: data[i].temp.max
                };
                obj['humidity'] = data[i].humidity;
                obj['rain'] = {
                    main: data[i].weather[0].main,
                    description: data[i].weather[0].description
                }
                array.push(obj);
            }
            res.json(array);

        });
    }
}

module.exports = Weather;