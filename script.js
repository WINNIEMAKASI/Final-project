// JavaScript for handling the search form
const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const location = document.getElementById('location').value.trim();

    if (location !== '') {
        // Perform further actions like searching hotels or redirecting to a search results page
        alert(`Searching hotels in ${location}...`);
    } else {
        alert('Please enter a location to search.');
    }
});