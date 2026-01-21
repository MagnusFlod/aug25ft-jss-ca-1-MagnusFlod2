// Making array to store memes securily while the server is running
let memesCall = [];

// Function that puts all the memes from the API into the array
function setMemes(memes)
{
    memesCall = memes;
}

// Function that when called, sends the memes from the array
function getMemes()
{
    return memesCall;
}

// Exports the functions to other files
module.exports =
{
    setMemes,
    getMemes
};