import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import styles from './Form.module.css'
import {getGenres} from '../../actions/ActionIndex'

const validateForm = (input) => {
    let error = {};
    if(!input.name) {
        error.name = "Name is required"
    } else if(!/^[a-zA-Z ]+$/.test(input.name)) {
        error.name = "Name is invalid"  
    } else if(!input.description) {
        error.description = "Description is required"
    } else if(input.rating > 5) {
        error.rating = "The max rating is 5"
    }
    return error;
}






function Form() {
    const history = useHistory()
    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres)
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

 
    
 




    useEffect(() => {
        dispatch(getGenres())
    },[dispatch])
console.log("soy el input" , input)
console.log("errrrrrror", error)
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
        if(Object.keys(error).length > 0) {
                alert('El formulario no se mando debido a errores')
           
        } else {
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
        alert('Juego creado exitosamente')
        history.push('/home')
            
        }
        
    }
    


    return (
        <div className={styles.containerForm}>
            <form className={styles.createForm}  onSubmit={handleSubmit}>
                <h1><span>Upload</span> Videogame</h1>
                 <fieldset>
                 <legend><span className={styles.number}>1</span>Basic Game Info</legend>
                <div>
               
                    <input className={styles.createInput} type="text" name ="name" value={input.name} onChange={handleChange} placeholder = "Name"/>
                    {error.name ? <p >{error.name}</p> : null}
                </div>
                <div  >

                    <input className={styles.createInput} type="text"  name ="description" value={input.description} onChange={handleChange} placeholder = "Description" />
                    {error.description ? <p>{error.description}</p> : null}
                </div>
                <div>

                    <input className={styles.createInput} type="date" name = "release_date" value ={input.release_date} onChange={handleChange} placeholder = "Released" />
                </div>
                <div >

                   <input className={styles.createInput} type="number" name= "rating" value ={input.rating} onChange={handleChange} placeholder = "Rating"/>
                   {error.rating ? <p>{error.rating}</p> : null}
                </div>
                </fieldset>
                <fieldset>  
                <legend><span className={styles.number}>2</span>Game Profile</legend>
                <div >
                    <div>
                    <label>Genre One</label>     
                        <select className={styles.createSelect} name="genreOne" id ="genres" value ={input.genreOne} onChange ={(e) => handleSelect(e)} >
                        <option value= ""> -- select first genre -- </option>
                            {
                                genres.map(g => { return ( <option value={g.id}>{g.name}</option> )})
                            }
                        </select>
                    </div>    
                    <div >
                    <label>Genre Two</label>     
                        <select className={styles.createSelect} name="genreTwo" id ="genres" value ={input.genreTwo} onChange ={(e) => handleSelectTwo(e)}>
                            <option value= ""> -- select second genre -- </option>
                            {
                                genres.map(g => { return ( <option className={styles.option} value={g.id}>{g.name}</option> )})
                            }
                        </select>   
                    </div>  
                </div>  
                
                <div classname={styles.check}>  
                    
                    <label ><input type= "checkbox" name ="ps5" value ="PS5" onChange ={handleBoxs}/> PS5 </label>
                    <label><input type= "checkbox" value ="Nintendo" onChange ={handleBoxs}/> Nintendo </label>
                    <label ><input type= "checkbox" value ="Pc" onChange ={handleBoxs}/> PC </label>
                    <label ><input type= "checkbox" value ="Xbox" onChange ={handleBoxs}/> Xbox </label>
                    <label ><input type= "checkbox" value ="PS4" onChange ={handleBoxs}/> PS4 </label>
                    
                </div> 
                </fieldset>
                <button className={styles.createButton} >Upload</button>
                        <div>
                            <Link to= "/home">
                            <button className={styles.createButton}>Exit</button>
                            </Link>
                        </div>
            </form>
            </div>
    )
}

export default Form
