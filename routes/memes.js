var express = require('express');
var router = express.Router();

// Importing from the memesAPI-file
var memesApiFile = require('../memesAPI');

router.get('/', function (req, res, next)
{
    // Getting the memes from the API through the path to the memesAPI-file and call the function getMemes to retreive the memes from the array
    const memes = memesApiFile.getMemes();

    console.log('Memes length: ', memes.length);

    res.render('memes',
    {
        memes: memes
    });
});

module.exports = router;