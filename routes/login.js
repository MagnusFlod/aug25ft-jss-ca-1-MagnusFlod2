let express = require('express');
let router = express.Router();
let passport = require('passport');


router.get('/', function (req, res)
{
    res.render('login');
});

router.post
(
    // If the username and password is correct, the user is directed to the meme-page. If they are incorrect, the user is redirected to the login page
    '/', passport.authenticate('local',
    {
        successRedirect: '/memes',
        failureRedirect: '/login'
    })
);

module.exports = router;