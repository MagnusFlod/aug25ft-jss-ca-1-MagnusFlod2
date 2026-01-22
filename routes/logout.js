let express = require('express');
let router = express.Router();

router.get('/', function (req, res)
{
    req.logOut(function()
    {
        res.redirect('/memes');
    });
});

module.exports = router;