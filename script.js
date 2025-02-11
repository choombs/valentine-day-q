// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');

    // Clear any existing content
    imageContainer.innerHTML = '';

    // Create a new Image element for the sad cat GIF
    var catImage = new Image();

    // Set the source to the uploaded GIF
    catImage.src = 'sad-cat-uwu-sad-cat.gif'; // Ensure the file is in the correct directory

    // Set alternative text for accessibility
    catImage.alt = 'Sad Cat Uwu';

    // When the image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}


function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';

    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');

    // Create a new Image element for the dancing cat GIF
    var catHeartImage = new Image();

    // Set the source to the uploaded GIF
    catHeartImage.src = 'cat.gif'; // Ensure the file is in the correct directory

    // Set alternative text for accessibility
    catHeartImage.alt = 'Dancing Cat';

    // When the GIF is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}


// Display the cat.gif initially
displayCat();
