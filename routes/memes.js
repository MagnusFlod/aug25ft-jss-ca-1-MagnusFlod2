var express = require('express');
var router = express.Router();

// Importing from the memesAPI-file
var memesApiFile = require('../memesAPI');

router.get('/', function (req, res, next)
{
    // Getting the memes from the API through the path to the memesAPI-file and call the function getMemes to retreive the memes from the array
    const memes = memesApiFile.getMemes();

    const viewedMemes = req.session.viewedMemes || [];

    console.log('Memes length: ', memes.length);

    res.render('memes',
    {
        memes,
        viewedMemes
    });
    console.log('Viewed memes:', req.session.viewedMemes);
});

router.post('/search', function (req, res)
{
    const searchTerm = req.body.search.toLowerCase();
    const allMemes = memesApiFile.getMemes();

    if (!searchTerm)
    {
        return res.redirect('/memes');
    }

    const filteredMemes = allMemes.filter(function (meme)
    {
        return meme.name.toLowerCase().includes(searchTerm);
    });

    res.render('memes',
    {
        memes: filteredMemes,
        viewedMemes: req.session.viewedMemes || []
    });
});

module.exports = router;