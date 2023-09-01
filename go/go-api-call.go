package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
    "encoding/json"
)

func main() {
    // Define the Scryfall API URL you want to access
    scryfallURL := "https://api.scryfall.com/cards/random"

    // Create an HTTP client
    client := &http.Client{}

    // Make a GET request to the Scryfall API
    response, err := client.Get(scryfallURL)
    if err != nil {
        fmt.Println("Error making GET request:", err)
        return
    }
    defer response.Body.Close()

    // Read the response body
    responseBody, err := ioutil.ReadAll(response.Body)
    if err != nil {
        fmt.Println("Error reading response body:", err)
        return
    }

    // Create a struct to hold the JSON response
    var cardData map[string]interface{}

    // Unmarshal the JSON response into the struct
    if err := json.Unmarshal(responseBody, &cardData); err != nil {
        fmt.Println("Error unmarshaling JSON:", err)
        return
    }

    // Access specific data from the response
    cardName, _ := cardData["name"].(string)
    cardSet, _ := cardData["set_name"].(string)

    // Print the card information
    fmt.Printf("Card Name: %s\n", cardName)
    fmt.Printf("Set Name: %s\n", cardSet)
}
