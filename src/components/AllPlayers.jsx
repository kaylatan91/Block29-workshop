import { fetchAllPlayers } from '../API'
import { useState, useEffect } from 'react'
import SinglePlayer from './SinglePlayer'

export default function AllPlayers() {
    const [players, setPlayers ] = useState([])
    const [selectedPuppyId, setSelectedPuppyId] = useState(null)

    async function fetchAllPuppies() {
            try {
                setPlayers(await fetchAllPlayers())
            } catch (error) {
                console.error(error)
            }
        }
    useEffect(() => {
        fetchAllPuppies()
    }, [])

    return (
        <div>
        {
            players.map((player)=>{
                return (
                    <div key={player.id}>
                        <h2>Name: {player.name}</h2>
                        <h2>Breed: {player.breed}</h2>
                        <img src={player.imageUrl} alt={player.name} />
                        <SinglePlayer selectedPuppyId={player.id} setSelectedPuppyId={setSelectedPuppyId}/>
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
