const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users = require('./users.json');

function initializePassport()
{
    passport.use(
        new LocalStrategy(function(username, password, done)
        {
            const user = users.find(u => u.username === username);

            if (!user)
            {
                return done(null, false);
            }

            if (user.password !== password)
            {
                return done(null, false);
            }

            return done(null, user);
        })
    );
    // This function is storing only the id of the user in a session
    passport.serializeUser(function(user, done)
    {
        done(null, user.id);
    });
    // This function is finding the users id on each request after login. For example when entering memeID-route from home-page
    passport.deserializeUser(function(id, done)
    {
        const user = users.find(u => u.id === id);
        done(null, user);
    });
}

module.exports = initializePassport;