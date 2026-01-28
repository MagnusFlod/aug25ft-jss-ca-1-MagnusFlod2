let express = require('express');
let router = express.Router();

// When the user logs out, the user is redirected back to the 'memes-page'
router.get('/', function (req, res)
{
    req.logOut(function()
    {
        res.redirect('/memes');
    });
});

module.exports = router;