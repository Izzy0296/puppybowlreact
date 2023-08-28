
import { useState } from 'react';
import { postPlayer } from '../API/index';
import { useNavigate } from 'react-router-dom';
//import classes from './NewPlayerForm.module.css';

const  NewPlayerForm = () => {
    const [puppyName, setPuppyName] = useState("");
    const [puppyBreed, setPuppyBreed] = useState("");
    const [playerStatus, setPlayerStatus] = useState("bench");
    const [imageUrl, setImageUel] = useState("");
    const navigate = useNavigate()
   
    function onPuppyNameChanged(e){
        setPuppyName(e.target.value)
    }
    function onPuppyBreedChanged(e){
        setPuppyBreed(e.target.value)
    }
    function onPuppyStatusChanged(e){
        setPlayerStatus(e.target.value)
    }
    function onPuppyImageUrlChanged(e){
        setImageUel(e.target.value)
    }


    function submitHandler (event) {
    
        event.preventDefault();
        console.log(puppyName,puppyBreed,playerStatus,imageUrl)
      navigate('/allplayers')
      //  if(
      //   puppyName != "" && 
      //   puppyBreed != "" && 
      //   playerStatus !="" && 
      //   imageUrl!= "" && 
      //   ) 
        { 
       }
       const newPuppy = {
        name: puppyName,
        breed: puppyBreed,
        status: playerStatus,
        imageUrl: imageUrl,
       
       }

        postPlayer(newPuppy);

        console.log(newPuppy)
      }

    const resetHandler =()=>{
        setPuppyName('');
        setPuppyBreed('');

// we can dynamically update this state object whenever the inputChangeHandler is executed
    }

    return (
        
        <form onSubmit={submitHandler} className="form" >
         <div className="container">
             <p>
                 <label htmlFor="name">NAME:</label>
                 <input onChange={onPuppyNameChanged}
               type="text" 
               id="name" />
                    <label htmlFor="breed">BREED:</label>
                 <input onChange={onPuppyBreedChanged}
               type="text" 
               id="breed" />
                      <label htmlFor="url">ImageUrl:</label>
                 <input onChange={onPuppyImageUrlChanged}
               type="text" 
               id="url" />
 
             <label>

             Status:
          <select
            value={playerStatus}
            onChange={onPuppyStatusChanged}
          >
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label> 

            </p> 
        </div>
        <p className="buttons">
            <button onClick={resetHandler} type="reset" className="buttonAlt">Reset</button>
            <button onClick={submitHandler} type="submit" className="button">Add New Player</button>
        </p>
       </form>
    );
};

export default NewPlayerForm;