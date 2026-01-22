
function open_new_window(location)
{
  window.location.href = location;
}

// When the document is loaded several functions are ready to run
document.addEventListener("DOMContentLoaded", function()
{
  // Assigning a variable for details-buttons for every meme
  const detailButtons = document.querySelectorAll(".details-btn");

  // Iterating through every function/buttons
  detailButtons.forEach(function (button)
  {
    // Click-event for one button
    button.addEventListener("click", function()
    {
      // Getting each unique id-information
      const memeID = button.dataset.id;

      console.log("Meme ID: ", memeID);
      // Fetching meme-router
      fetch("/meme",
      {
        // Posting memeID to meme-router
        method: "POST",
        headers:
        {
          "Content-type": "application/json"
        },
        // Sending the data in json-format
        body: JSON.stringify
        ({
          memeID: memeID
        })
      })
      .then(function()
      {
        window.location.href = "/meme";
      });
    });
  });
});