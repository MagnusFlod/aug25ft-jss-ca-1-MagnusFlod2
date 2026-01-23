
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
      const memeID = Number(button.dataset.id);

      console.log("Meme ID: ", memeID);

      // Fetching meme-router
      fetch("/meme",
      {
        // Posting memeID to meme-router
        method: "POST",
        headers:
        {
          "Content-Type": "application/json"
        },
        credentials: "same-origin",
        // Sending the data in json-format
        body: JSON.stringify({ memeID: memeID })
      })
      .then(function(response)
      {
        // Redirect only after POST is completed
        if (response.ok)
        {
          window.location.href = "/meme";
        }
      });
    });
  });
});