// Importing the express library and assigning it to be used in the app
var express = require('express');
var router = express.Router();

// Importing from the memesAPI-file. Gives access to memesApiFile.getMemes() function
var memesApiFile = require('../memesAPI');

// When the user visits the memes-list, this function runs. Get-function that retreives data
router.get('/', function (req, res, next)
{
    // Getting the memes from the API through the path to the memesAPI-file and call the function getMemes to retreive the memes from the array inside memesAPI.js
    const memes = memesApiFile.getMemes();

    // Variable for already viewed memes in a session. An empty array is used if no data is found
    const viewedMemes = req.session.viewedMemes || [];

    // Rendering the necessary data to views-section in memes.ejs
    res.render('memes',
    {
        memes,
        viewedMemes
    });
});

// When a search is performed in the app, this function runs. A post-function that writes data
router.post('/search', function (req, res)
{
    // req.body.search comes from <input name="search">. toLowerCase to make case-insensitive
    const searchTerm = req.body.search.toLowerCase();

    // Retreives the original list of memes. No new API-call. All original memea are intact
    const allMemes = memesApiFile.getMemes();

    // If no letters are written in the search-bar, the user will be redirected back to the original meme's list
    if (!searchTerm)
    {
        return res.redirect('/memes');
    }

    // This is the search engine. filter() iterates over every meme. Keeps only those that matches the search-term
    const filteredMemes = allMemes.filter(function (meme)
    {
        return meme.name.toLowerCase().includes(searchTerm);
    });

    // Rendering the filtered meme or the viewed memes
    res.render('memes',
    {
        memes: filteredMemes,
        viewedMemes: req.session.viewedMemes || []
    });
});

// Exporting the router. Making it possible for app.js to use ('/memes', memesRouter);
module.exports = router;