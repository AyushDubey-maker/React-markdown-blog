import { Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

import {db} from "./firebase"
import Blogs from './Blogs'
import './Blogdata.css'
function Blogdata() {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        db.collection('blog').orderBy('timestamp','desc').onSnapshot(snapshot =>{
          setBlogs(snapshot.docs.map(doc =>({id:doc.id,title:doc.data().title,description:doc.data().description})))
        })
        },[]);
    return (
        <div className="newarticle_button">
            <h1>Blog Articles</h1>
           <Link to="/new">
           <Button color="primary" variant="contained">
               New Article
           </Button>
           </Link> 
           <div>
           <ul>
        {blogs.map(blog=>(
  <Blogs blog={blog}/>
        
  ))}
        
      </ul>
           </div>

        </div>
    )
}

export default Blogdata
