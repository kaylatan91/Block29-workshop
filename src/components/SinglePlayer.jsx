import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchSinglePlayer } from "../API"
// import AllPlayers from "./AllPlayers"

export default function SinglePlayer ({ selectedPuppyId,setSelectedPuppyId }) {
    const navigate = useNavigate()
    const [player, setPlayer] = useState({})
    
    async function getSinglePuppy() {
        try {
            setPlayer(await fetchSinglePlayer(selectedPuppyId))
        } catch (error) {
            console.error("Can't get player", error)
        }
    }
    useEffect(() => {
        getSinglePuppy()
    },[])

    return (
        console.log(player)
        // <>
        // <div>
        //     <p>Id: {player.id}</p>
        //     <p>Name: {player.name}</p>
        //     <p>Breed: {player.breed}</p>
        //     <p>Team: {player.team}</p>
        //     <p>State: {player.status}</p>
        // </div>
        // </>
    )
}


// <div className="singleplayer">
//     <button onClick={ () => navigate(selectedPlayer.data.player)}>See Details</button>
// </div>

