/**
 * Created by championswimmer on 26/02/17.
 */

const router = require('express').Router;

const route = router();
const type = 'insecure';

route.get('/1', function (req, res) {
    res.send("first" + type + " path")
});

route.get('/2', function (req, res) {
    res.send("second" + type + " path")
});

module.exports = route;
