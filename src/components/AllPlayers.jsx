import { getAllPlayers, removePlayer } from "../API/index";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers(){
    const [player, setPlayer]= useState([])
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(null);
  
    const navigate= useNavigate()
    useEffect(()=>{
        async function RenderAllPlayer(){
            try{
                const response = await getAllPlayers()
                setPlayer(response)
            }catch(error){
                console.log("failed to fetch")
            }
        }
        RenderAllPlayer()
    },[])
function clickHandler(playerId){
        navigate(`/players/${playerId}`);
      }
const deleteHandler = async (id) => {
        const response = await removePlayer(id);
        const notdeleted= player.filter(item=>item.id !== id)
        setPlayer(notdeleted)
       
      }
      console.log(searchValue)

function searchBarHandler(e){
    e.preventDefault();
    const result = player.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    setSearchResult(result)
   
}
return(
   
   <div className="main">
   <form onSubmit={searchBarHandler}>
    <label>
        Search:
        <input type="text" placeholder="search"  value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        
    </label>
    <button type="submit">Search</button>
    </form>

    { (searchResult || player).map((player) => (
    // ... rest of your mapping code
    <>
            // ... rest of your mapping code
            <div key={player.id} className="containerplayer">
                <h1>{player.name}</h1>
                <h1>{player.breed}</h1>
                <img src={player.imageUrl} alt="photo" />
            </div><button onClick={() => clickHandler(player.id)}>View Puppy</button><button onClick={() => deleteHandler(player.id)}>Delete</button></>
))}
        </div>
        
)
}


        
       
        
          
           
        
           