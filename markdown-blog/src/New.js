import { Button,Input,InputLabel,FormControl } from '@material-ui/core'
import React,{useState} from 'react'
import './New.css'
import {Link} from "react-router-dom"
import { db } from './firebase';
import firebase from 'firebase'
import { useHistory } from 'react-router-dom';
function New(props) {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const history = useHistory()
    const saveData=(event)=>{
        event.preventDefault()
        db.collection('blog').add({
            title:title,
            description:description,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setTitle('')
        setDescription('')
        history.goBack()
    }
    return (
        <div className="form_grp">
             <h1>New Article</h1>
          
         <FormControl>
          <InputLabel>
          Title
          </InputLabel>
          <Input value={title} onChange={e=>setTitle(e.target.value)}/>
           
         </FormControl>
          <form className="text_area">
              <label>Description</label>
              <textarea type="text" value={description} onChange={e=>setDescription(e.target.value)}/>
          </form>
       
        <div className="button_container">
            <div className="cancelbutton">
    <Link to="/">
  <Button color="secondary" variant="contained">Cancel</Button>
  </Link>
  </div>
  <div>
  <Button color="primary" variant="contained" onClick={saveData}>Save</Button>  
  </div>
  </div> 
              

           
        </div>
    )
}

export default New
