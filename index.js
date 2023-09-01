//waits until the content is ready so I don't get a "null" error
document.addEventListener('DOMContentLoaded', function() {
    mtgAPICall('Lightning Bolt')
    mtgRandomCall()
    // mtgCreatures()
    searchButton()
})

function mtgAPICall(cardName){
    //defining that the cardElement will go in the 'card' div
    const cardElement = document.getElementById('card')
    const cardTitle = document.getElementById('cardTitle')
    const cardImage = document.getElementById('cardImage')
    const textBox = document.getElementById('textBox')

    //constructing the get request
    //note that encodeURIComponent is an embedded JS function that accounts for spaces, etc
    const apiURL = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}`

    // Make the API call
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            cardTitle.innerText = data.name
            cardImage.src = data.image_uris.art_crop
            textBox.innerText = data.oracle_text

            // console.log(data)
        })
        .catch(error => {
            console.error('Error fetching data:', error)
        })
}

function mtgRandomCall(){
    //defining that the cardElement will go in the 'card' div
    const cardTitle = document.getElementById('cardTitle-random')
    const cardImage = document.getElementById('cardImage-random')
    const textBox = document.getElementById('textBox-random')

    const apiURL = `https://api.scryfall.com/cards/random`

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            cardTitle.innerText = data.name
            cardImage.src = data.image_uris.art_crop
            textBox.innerText = data.oracle_text

            // console.log(data)
        })
        .catch(error => {
            console.error('Error fetching data:', error)
        })
}


function searchButton(){
    // Get references to the form, input field, and results div
    const searchQueryInput = document.getElementById("searchQuery");

    // Add an event listener to the search button
    document.getElementById("searchButton").addEventListener("click", function () {
        // Get the search query from the input field
        const cardName = searchQueryInput.value;

        // You can perform your search logic here
        // For this example, we'll simply display the search query in the results div
        // searchResultsDiv.textContent = `Search Query: ${searchQuery}`;
        console.log("HI")
        mtgAPICall(cardName)
    });
}

function mtgCreatures(){
    const apiURL = `https://scryfall.com/search?q=t%3Amerfolk+t%3Alegend`
    fetch(apiURL, {
        method: 'GET',
        headers: {
            'Origin': 'http://127.0.0.1:5500' // Replace with your development server URL
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error('Error fetching data:', error)
        })
}
