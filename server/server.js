var app = require('express')();
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser());

mongoose.connect('mongodb://localhost/movies');

var Movie = mongoose.model('Movie', {name: String});

app.get('/', function (req, res) {
    Movie.find(function (err, movies) {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(movies);
    })
});

app.post('/add', function (req, res) {
    var name = req.body.name;
    var movie = new Movie({name: name});
    movie.save(function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        res.send();
    })
});

app.listen(3000);
