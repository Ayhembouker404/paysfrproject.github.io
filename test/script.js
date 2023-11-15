// script.js
function submitForm() {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // You can use an AJAX request to send data to the server
    // Here's a simple example using fetch
    fetch('/submit-comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, comment }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Comment submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
