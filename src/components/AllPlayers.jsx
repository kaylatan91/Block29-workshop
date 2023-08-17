// import { fetchAllPlayers } from '../API'
import { useState, useEffect } from 'react'

export default function AllPlayers() {
    const [players, setPlayers ] = useState([])

    useEffect(() => {
        async function fetchAllPlayers() {
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players")
                const players = await response.json()
                setPlayers(players.data.players)
            } catch (error) {
                console.error(error)
            }
        }
        fetchAllPlayers()
    },[])

    return (
        <div>
        {
            players.map((player)=>{
                return (
                    <div key={player.id}>
                        <h2>Name: {player.name}</h2>
                        <h2>Breed: {player.breed}</h2>
                        <img src={player.imageUrl} alt={player.name} />
                    </div>
                )
            })
        }
       </div>
    )
}





// export default function AllPlayers(){
//     const [players, setPlayers] = useState([])

//     useEffect(() => {
//         setPlayers(fetchAllPlayers())
//     },[])

//     return (
//         // "This is the All Players form"
//         console.log(players)
//     )
// }
