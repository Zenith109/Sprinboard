// Add an event listener to the form to handle the submit event
document.getElementById('image-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the input fields
    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;
    const imageUrl = document.getElementById('image-url').value;

    // Create a wrapper div for the image and text
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper';

    // Create an img element and set its source if the URL is valid
    const img = document.createElement('img');
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (urlPattern.test(imageUrl)) {
        img.src = imageUrl;
    } else {
        alert('Please enter a valid URL.'); // Alert the user if the URL is invalid
        return; // Exit the function if the URL is invalid
    }
    img.alt = 'User provided image'; // Set the alt attribute for the image

    // Create div elements for the top and bottom text
    const topTextElement = document.createElement('div');
    topTextElement.className = 'top-text';
    topTextElement.textContent = topText;

    const bottomTextElement = document.createElement('div');
    bottomTextElement.className = 'bottom-text';
    bottomTextElement.textContent = bottomText;

    // Append the image and text elements to the wrapper
    imageWrapper.appendChild(img);
    imageWrapper.appendChild(topTextElement);
    imageWrapper.appendChild(bottomTextElement);

    // Append the wrapper to the image container
    document.getElementById('image-container').appendChild(imageWrapper);

    // Reset the form fields
    document.getElementById('image-form').reset();

    // Add an event listener to the wrapper to remove it when clicked
    imageWrapper.addEventListener('click', function() {
        this.remove();
    });
});