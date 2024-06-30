document.getElementById('connectButton').addEventListener('click', function() {
    fetch('http://localhost:3000/api/hello') // Change this URL to match your backend endpoint
        .then(response => response.text())
        .then(data => {
            document.getElementById('responseText').textContent = 'Response: ' + data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('responseText').textContent = 'Failed to fetch data';
        });
});
