document.addEventListener('DOMContentLoaded', function () {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data; // Inject footer content into the specified div
        })
        .catch(error => console.error('Error fetching footer:', error));
});