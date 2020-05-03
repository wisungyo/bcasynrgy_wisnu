const userRoutes = (app, fs) => {

    // variables
    var dataPath = './data/cities.txt';
    console.log(dataPath);

    var inputCities = "/cities";
    var inputCity = "/city";
    var inputDefault = "/";
    
    // READ
    app.get(inputCities, (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });

    app.get(inputCity, (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            var result = JSON.parse(data);
            random = 1 + Math.floor(Math.random()*7);
            res.send(result[random]);
        });
    })
};

module.exports = userRoutes;