import React, {useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import styles from "./Form.module.css"

const validateForm = (input) => {
    let error = [];
    if(!input.name) {
        error.name = "Name is required"
    } else if(!/^[a-zA-Z ]+$/.test(input.name)) {
        error.name = "Name is invalid"  
    } else if(!input.description) {
        error.description = "Description is required"
    } else if(!input.rating > 5) {
        error.rating = "The max rating is 5"
    }
    return error;
}






function Form() {

    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name: '',                   //required
        description: '',            //required
        release_date: '',           // required
        rating: '',                 // required max 5 puntos
        genreOne: '',
        genreTwo: '',
        platform: []   
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validateForm({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleSelect = (e) => {
        setInput({
            ...input,
            genreOne: e.target.value
        })
    }
    const handleSelectTwo = (e) => {
        setInput({
            ...input,
            genreTwo: e.target.value
        })
    }

    const handleBoxs = (e) => {
        let checked = e.target.checked
        if(checked) {
            setInput({
                ...input,
                platform: [...input.platform, e.target.value]
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3002/videogame', input)
        setInput({
            name: '',
            description: '',
            release_date: '',
            rating: '',
            genreOne: '',
            genreTwo: '',             
            platform: []   
        })
    }
    


    return (
        
            <form className = {styles.form} onSubmit={handleSubmit}>
                <h2 className ={styles.title}>Create Videogame</h2>
                <div className ={` ${styles.inputcontainer} ${styles.ic1} `} >

                    <input type="text" className = {styles.input} name ="name" value={input.name} onChange={handleChange} placeholder = "Name"/>
                    {error.name ? <p className ="danger">{error.name}</p> : null}
                </div>
                <div className = {` ${styles.inputcontainer} ${styles.ic1} `} >

                    <input type="text" className ={styles.input} name ="description" value={input.description} onChange={handleChange} placeholder = "Description" />
                    {error.description ? <p className ={styles.danger}>{error.description}</p> : null}
                </div>
                <div className = {` ${styles.inputcontainer} ${styles.ic1} `}>

                    <input type="date" className ={styles.input} name = "release_date" value ={input.release_date} onChange={handleChange} placeholder = "Released" />
                </div>
                <div className = {` ${styles.inputcontainer} ${styles.ic1} `}>

                   <input type="number" className ={styles.input} name= "rating" value ={input.rating} onChange={handleChange} placeholder = "Rating"/>
                   {error.rating ? <p className ={styles.danger}>{error.rating}</p> : null}
                </div>

                <div  className ={styles.genres}>
                    <div>
                    <span>Genre 1</span>     
                        <select name="genreOne" id ="genres" value ={input.genreOne} onChange ={handleSelect} className ={styles.genresform}>
                            <option value= ""> -- select an option -- </option>
                            <option value= "1">Action</option> 
                            <option value="2">Indie</option>
                            <option value="3">Adventure</option>
                            <option value="4">Role</option>
                            <option value="5">Strategy</option>
                            <option value="6">Shooter</option>
                            <option value="7">Casual</option>
                            <option value="8">Simulation</option>
                            <option value="9">Puzzle</option>
                            <option value="10">Arcade</option>
                            <option value="11">Platformer</option>
                            <option value="12">Racing</option>
                            <option value="13">Multiplayer</option>
                            <option value="14">Sports</option>
                            <option value="15">Fighting</option>
                            <option value="16">Family</option>
                            <option value="17">Board-games</option>
                            <option value="18">Educational</option>
                            <option value="19">Card</option>
                        </select>
                    </div>    
                    <div >
                    <label>Genre 2</label>     
                        <select name="genreTwo" id ="genres" value ={input.genreTwo} onChange ={handleSelectTwo} className ={styles.genresform}>
                            <option value= ""> -- select an option -- </option>
                            <option value= "1">Action</option> 
                            <option value="2">Indie</option>
                            <option value="3">Adventure</option>
                            <option value="4">Role</option>
                            <option value="5">Strategy</option>
                            <option value="6">Shooter</option>
                            <option value="7">Casual</option>
                            <option value="8">Simulation</option>
                            <option value="9">Puzzle</option>
                            <option value="10">Arcade</option>
                            <option value="11">Platformer</option>
                            <option value="12">Racing</option>
                            <option value="13">Multiplayer</option>
                            <option value="14">Sports</option>
                            <option value="15">Fighting</option>
                            <option value="16">Family</option>
                            <option value="17">Board-games</option>
                            <option value="18">Educational</option>
                            <option value="19">Card</option>
                        </select>   
                    </div>  
                </div>  
                
                <div className = {styles.platforms}>  
                    
                    <label><input type= "checkbox" name ="ps5" value ="PS5" onChange ={handleBoxs}/> PS5 </label>
                    <label><input type= "checkbox" value ="Nintendo" onChange ={handleBoxs}/> Nintendo </label>
                    <label><input type= "checkbox" value ="Pc" onChange ={handleBoxs}/> PC </label>
                    <label><input type= "checkbox" value ="Xbox" onChange ={handleBoxs}/> Xbox </label>
                    <label><input type= "checkbox" value ="PS4" onChange ={handleBoxs}/> PS4 </label>
                    
                </div> 
                
                <button className ={styles.submit}>Create</button>
                        <div className ={styles.contbackhome}>
                            <Link to= "/home">
                            <button className ={styles.backhome}>Home</button>
                            </Link>
                        </div>
            </form>
       
    )
}

export default Form