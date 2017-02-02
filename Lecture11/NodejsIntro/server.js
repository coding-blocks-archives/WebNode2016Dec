/**
 * Created by championswimmer on 28/01/17.
 */

const express = require('express');

const app = express();

app.use(function (req, res) {
    res.send("hello there !")
});

app.listen(4040);