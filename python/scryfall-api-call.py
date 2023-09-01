#make sure that you do the following command first if you haven't
#pip3 install requests


import requests

def get_random_magic_card():
    # Define the Scryfall API URL for a random card
    scryfall_url = "https://api.scryfall.com/cards/random"

    # Send a GET request to the API
    response = requests.get(scryfall_url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the JSON response
        card_data = response.json()

        # Extract and print relevant information about the card
        card_name = card_data["name"]
        card_set = card_data["set_name"]

        print(f"Card Name: {card_name}")
        print(f"Set Name: {card_set}")
    else:
        print(f"Error: {response.status_code} - {response.text}")

def get_magic_search():
    scryfall_url = "https://api.scryfall.com/cards/search?q=t%3Acreature"
    response = requests.get(scryfall_url)
    if response.status_code == 200:
        card_data = response.json()
        print(card_data["total_cards"])
    else:
        print(f"Error: {response.status_code} - {response.text}")



if __name__ == "__main__":
    get_random_magic_card()
    get_magic_search()
