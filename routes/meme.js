var express = require('express');
var router = express.Router();
var memesApiFile = require('../memesAPI');

let selectedMeme = null;

router.post('/', function(req, res, next)
{
    const memeID = req.body.memeID;

    const memes = memesApiFile.getMemes();

    selectedMeme = memes.find(function(meme)
    {
        return meme.id == memeID;
    });

    res.status(200).end();
});

router.get('/', function (req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    if(!selectedMeme)
    {
        return res.redirect('/memes');
    }
    res.render('meme',
    {
        meme: selectedMeme
    });
});

module.exports = router;
