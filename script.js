function showStory(storyId) {
  // Hide all stories
  document.querySelectorAll(".story").forEach(function (story) {
    story.style.display = "none";
  });

  // Remove active class from all tab buttons
  document.querySelectorAll(".tabs button").forEach(function (btn) {
    btn.classList.remove("active");
  });

  // Show selected story
  document.getElementById(storyId).style.display = "block";

  // Mark the clicked button as active
  document.querySelector(`[onclick="showStory('${storyId}')"]`).classList.add("active");
}
