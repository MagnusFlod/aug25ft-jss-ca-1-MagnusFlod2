

// When the document is loaded several functions are ready to run
document.addEventListener("DOMContentLoaded", function()
{
  // Assigning a variable for details-buttons with class: 'details-btn' for every meme
  // Inside memes.ejs is: <button class="details-btn" data-id="123">Details</button>. Class is for button. ID is for the specific meme
  const detailButtons = document.querySelectorAll(".details-btn");

  // Iterating through every function/buttons
  detailButtons.forEach(function (button)
  {
    // Click-event for one button
    button.addEventListener("click", function()
    {
      // Getting each unique id-information. Using 'Number' because 'dataset' always provides a string, but id is a number
      const memeID = Number(button.dataset.id);

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