const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const passportLocal = require('passport-local');
const session = require('express-session');

const userconfig = require('./users.json');

const LocalStrategy = passportLocal.Strategy;

const routes = {
    secure: require('./routes/secure'),
    insecure: require('./routes/insecure')
};

const app = express();


passport.use(new LocalStrategy(function (user, pass, done) {

    console.log('Login requested ' + user + pass);

    if (!userconfig[user]) {
        console.log('no user');
        done(null, false, {message: 'No such user'})
    } else {
        if (userconfig[user] != pass) {
            console.log('wrong password');
            done(null, false, {message: 'Wrong password'})
        } else {
            console.log('correct');
            done(null, {u: user, p: pass}, {message: 'SUCCESS'})

        }
    }

}));

passport.serializeUser(function (user, done) {
    return done(null, user.u);

});

passport.deserializeUser(function (id, done) {
    return done(null, {
        u: id,
        p: userconfig[id]
    })
});


app.use('/public', express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/secure', routes.secure);
app.use('/insecure', routes.insecure);




app.post('/login',
    passport.authenticate('local', { successRedirect: '/secure/1',
        failureRedirect: '/public/login.html'})
);




app.listen(3333, () => {
    console.log('Started');
});
