document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded
    setTimeout(function () {
        // Hide the loader after 3 seconds
        document.getElementById("loaderContainer").style.display = "none";
    }, 3000);
});
