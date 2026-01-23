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

    if(!req.session.viewedMemes)
    {
        req.session.viewedMemes = [];
    }

    if(!req.session.viewedMemes.includes(memeID))
    {
        req.session.viewedMemes.push(memeID);
    }

    console.log('Session viewedMemes AFTER push!! ', req.session.viewedMemes);

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
