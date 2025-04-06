// Function to change text content
document.getElementById('change-text-button').addEventListener('click', function() {
    document.getElementById('text-content').textContent = 'The text content has been changed dynamically!';
});

// Function to modify CSS styles dynamically
document.getElementById('change-text-button').addEventListener('click', function() {
    document.getElementById('text-content').style.color = 'blue';
    document.getElementById('text-content').style.fontSize = '20px';
});

// Function to add a new element
document.getElementById('add-element-button').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph added dynamically!';
    document.getElementById('content').appendChild(newElement);
});

// Function to remove an element
document.getElementById('remove-element-button').addEventListener('click', function() {
    const element = document.getElementById('text-content');
    if (element) {
        element.remove();
    }
});
