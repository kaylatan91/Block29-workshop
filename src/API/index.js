// const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF"
const PLAYERS_API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players"


export async function fetchAllPlayers () {
    try {
        // fetch data from the API
        const response = await fetch(PLAYERS_API_URL);

        // transform into json for use
        const players = await response.json();
        return players.data.players

    } catch (error) {
        console.error("Failed to load all players", error)
    }
}

export async function fetchSinglePlayer(playerId) {
    try{
        // fetch data from the API
        const response = await fetch(`${PLAYERS_API_URL}/${playerId}`)

        // transform into json for use
        const result = await response.json()
        const singlePuppy = result.data.player
        return singlePuppy    
    } catch (error) {
        console.error("Failed to retrieve player details", error)
    }
}






