var express = require('express');
var router = express.Router();
// Importing the memes from the array in the memesAPI-file
var memesApiFile = require('../memesAPI');

// Initial value of the selected meme. Starts at null
let selectedMeme = null;

// Post-method for meme-details. The function runs when 'Details-button' is clicked
router.post('/', function(req, res, next)
{
    // Requiring the memeID from the json-body in custom.js
    const memeID = req.body.memeID;

    // Getting the memes from the array
    const memes = memesApiFile.getMemes();

    // Iterating through every meme and returning the meme with correct identification
    selectedMeme = memes.find(function(meme)
    {
        return meme.id == memeID;
    });

    // If the user never visited the details, an empty array is made in session
    if(!req.session.viewedMemes)
    {
        req.session.viewedMemes = [];
    }

    // If the user never visited the memes with correct meme-ID, the memes ID will be added to the array
    if(!req.session.viewedMemes.includes(memeID))
    {
        req.session.viewedMemes.push(memeID);
    }

    // Debug
    console.log('Session viewedMemes AFTER push!! ', req.session.viewedMemes);

    // Post is finished and successfull
    res.status(200).end();
});

// Get-method for meme-details. This router opens when the browser navigates to /meme
router.get('/', function (req, res, next)
{
    // Security. If no authenticated users are on this page, they are not allowed to view meme-details
    if(!req.isAuthenticated())
    {
        // Redirected to login-page if the user is a guest and tries to navigate to: http://localhost:3000/login in the browser
        return res.redirect('/login');
    }
    // More security. If the user is logged in with an authenticaed profile, but no meme is selected and the user tries to navigate to: http://localhost:3000/meme
    if(!selectedMeme)
    {
        // The user is redirected back to the http://localhost:3000/memes route
        return res.redirect('/memes');
    }
    // If every condition is met correctly, the meme-details page will be made to the user
    res.render('meme',
    {
        meme: selectedMeme
    });
});

module.exports = router;
