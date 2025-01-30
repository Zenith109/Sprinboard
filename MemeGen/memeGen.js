document.getElementById('image-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;
    const imageUrl = document.getElementById('image-url').value;

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper';

    const img = document.createElement('img');
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (urlPattern.test(imageUrl)) {
        img.src = imageUrl;
    } else {
        alert('Please enter a valid URL.');
        return;
    }
    img.alt = 'User provided image';

    const topTextElement = document.createElement('div');
    topTextElement.className = 'top-text';
    topTextElement.textContent = topText;

    const bottomTextElement = document.createElement('div');
    bottomTextElement.className = 'bottom-text';
    bottomTextElement.textContent = bottomText;

    imageWrapper.appendChild(img);
    imageWrapper.appendChild(topTextElement);
    imageWrapper.appendChild(bottomTextElement);

    document.getElementById('image-container').appendChild(imageWrapper);

    document.getElementById('image-form').reset();

    imageWrapper.addEventListener('click', function() {
        this.remove();
    });
});