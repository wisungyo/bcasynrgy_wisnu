const userRoutes = (app, fs) => {

    // variables
    var dataPath = './data/cities.txt';
    console.log(dataPath);

    // var inputCities = "/cities";
    // var inputCity = "/city";
    // var inputDefault = "/";
    
    // READ
    app.get('/cities', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });

    app.get('/city', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            var result = JSON.parse(data);
            random = 1 + Math.floor(Math.random()*7);
            res.send(result[random]);
        });
    })

    app.get('/:something', (req, res) => {
        const other = req.params.otherURL;
        if (other === 'everythingIsError') {
            res.send(404).json({
                message: 'Why are you here? I think you have lost..'
            });
        } else {
            res.status(404).json({
                message: 'Why are you here? I think you have lost.'
            });
        }
    })
};

module.exports = userRoutes;